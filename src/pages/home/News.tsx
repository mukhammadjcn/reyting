import { Link } from "react-router-dom";
import { CatchError } from "src/utils/index";
import { CalendarSvg } from "src/components/svg";
import React, { useEffect, useState } from "react";
import {
  CreateImageConfig,
  CreateNewsConfig,
  GetNewsConfig,
} from "src/server/config/Urls";
import {
  Alert,
  Button,
  DatePicker,
  Form,
  Input,
  message,
  Modal,
  Upload,
  UploadFile,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { INews } from "types/index";
import NoData from "src/components/animation/Lotties";

function News() {
  const [form] = Form.useForm();
  const [news, setNews] = useState([]);
  const [open, setOpen] = useState(false);
  const [textUZ, setTextUZ] = useState<string>("");
  const [textRU, setTextRU] = useState<string>("");
  const [textEN, setTextEN] = useState<string>("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const GetNews = async () => {
    try {
      const { data } = await GetNewsConfig();
      setNews(data?.content);
    } catch (error) {
      // CatchError(error);
    }
  };
  const submitNews = async (val: any) => {
    if (textEN && textRU && textUZ && fileList.length > 0) {
      try {
        const { data } = await CreateNewsConfig({
          ...val,
          textEN,
          textRU,
          textUZ,
          newsDate: val?.newsDate?.format("YYYY-MM-DD"),
        });
        message.success(data?.message);

        let images = new FormData();
        fileList.forEach((item: any) => {
          images.append("files", item);
        });

        await CreateImageConfig(data?.object, images);

        form.resetFields();
        setTextEN("");
        setTextRU("");
        setTextUZ("");
        setFileList([]);
        setOpen(false);
        GetNews();
      } catch (error) {
        CatchError(error);
      }
    } else {
      message.error("Hamma maydonlarni to'ldiring");
    }
  };
  const closeModal = () => {
    form.resetFields();
    setTextEN("");
    setTextRU("");
    setTextUZ("");
    setFileList([]);
    setOpen(false);
  };
  const uploadPicture = (val: any) => {
    if (fileList.length < 8) {
      setFileList([...fileList, val]);
    } else {
      message.error("8 tadan ortiq rasm yuklab bo'lmaydi");
    }
    return false;
  };
  const handlePreview = async (file: any) => {
    setPreviewImage(file.thumbUrl || (file.preview as string));
    setPreviewVisible(true);
  };
  const deletePicture = (file: any) => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    setFileList(newFileList);
  };
  const handleCancel = () => setPreviewVisible(false);

  useEffect(() => {
    GetNews();
  }, []);

  return (
    <div className="adminblog">
      <div
        className="flex"
        style={{
          padding: 8,
          borderRadius: 8,
          marginBottom: 16,
          justifyContent: "end",
        }}
      >
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setOpen(true)}
        >
          Yangilik qo'shish
        </Button>
      </div>

      {news.length > 0 ? (
        news.map((item: INews) => (
          <div className="adminblog__news" key={item.id}>
            <Link
              to={`/home/news/${item.id}`}
              className="adminblog__new"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="left">
                <img
                  src={
                    item?.documentResponses[0]?.fileUrl ??
                    "https://picsum.photos/200"
                  }
                  alt=""
                />
                <div className="flex">
                  <CalendarSvg />
                  <span>
                    {new Date(item?.createdDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="hashteg">
                  {item.isPublic && <span className="asosiy">#asosiy</span>}{" "}
                  #news
                </div>
              </div>
              <div className="right">
                <h2>{item?.titleUZ}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.textUZ,
                  }}
                ></div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <NoData title="Yangiliklar mavjud emas" />
      )}

      <Modal
        title=""
        width={800}
        open={open}
        footer={null}
        onCancel={closeModal}
      >
        <Form
          form={form}
          onFinish={submitNews}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            label="Yangilikni o'zbekcha sarlovhasi"
            name="titleUZ"
            rules={[
              { required: true, message: "Yangilikni o'zbekcha sarlovhasi !" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Yangilikni ruscha sarlovhasi"
            name="titleRU"
            rules={[
              { required: true, message: "Yangilikni ruscha sarlovhasi !" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Yangilikni inglizcha sarlovhasi"
            name="titleEN"
            rules={[
              { required: true, message: "Yangilikni inglizcha sarlovhasi !" },
            ]}
          >
            <Input />
          </Form.Item>

          <div style={{ marginBottom: 16 }}>
            <p style={{ marginBottom: 8 }}>Yangilikni o'zbekcha matni</p>
            <CKEditor
              editor={ClassicEditor}
              data={textUZ}
              onChange={(event: any, editor: any) => {
                const data = editor.getData();
                setTextUZ(data);
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <p style={{ marginBottom: 8 }}>Yangilikni ruscha matni</p>
            <CKEditor
              editor={ClassicEditor}
              data={textRU}
              onChange={(event: any, editor: any) => {
                const data = editor.getData();
                setTextRU(data);
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <p style={{ marginBottom: 8 }}>Yangilikni inglizcha matni</p>
            <CKEditor
              editor={ClassicEditor}
              data={textEN}
              onChange={(event: any, editor: any) => {
                const data = editor.getData();
                setTextEN(data);
              }}
            />
          </div>

          <Form.Item
            style={{ width: "100%" }}
            label="Yangilik sanasi"
            name="newsDate"
            rules={[
              {
                required: true,
                message: "Yangilik sanasi !",
              },
            ]}
          >
            <DatePicker
              placeholder="Sanani belgilang !"
              style={{ width: "50%" }}
            />
          </Form.Item>

          <Upload
            maxCount={2}
            listType="picture-card"
            onRemove={deletePicture}
            onPreview={handlePreview}
            beforeUpload={uploadPicture}
          >
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>

          <Form.Item style={{ marginBottom: 0, marginTop: 16 }}>
            <div className="flex" style={{ justifyContent: "end" }}>
              <Button onClick={closeModal} style={{ marginRight: 16 }}>
                Bekor qilish
              </Button>
              <Button type="primary" htmlType="submit">
                Yuborish
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>

      <Modal open={previewVisible} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </div>
  );
}

export default News;
