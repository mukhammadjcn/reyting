import { Link, useSearchParams } from "react-router-dom";
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
  Pagination,
  Upload,
  UploadFile,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { INews } from "types/index";
import NoData from "src/components/animation/Lotties";
import SunEditor from "suneditor-react";

function News() {
  const [form] = Form.useForm();
  const [news, setNews] = useState([]);
  const [open, setOpen] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const [total, setTotal] = useState(0);
  const current = searchParams.get("page");
  const [currentpage, setCurrentPage] = useState(current ? current : 1);

  let options = {
    buttonList: [
      ["undo", "redo"],
      ["paragraphStyle", "blockquote"],
      ["bold", "underline", "italic", "strike", "subscript", "superscript"],
      ["fontColor", "hiliteColor"],
      ["align", "list", "lineHeight"],
      ["outdent", "indent"],

      ["table", "horizontalRule", "link", "image", "video"],
      ["fullScreen", "showBlocks", "codeView"],
      ["preview", "print"],
      ["removeFormat"],
    ], // Or Array of button list, eg. [['font', 'align'], ['image']]
    defaultTag: "p",
    minHeight: "200px",
    showPathLabel: false,
  };

  const handleMakeParams = (key: any, value: any) => {
    if (value) {
      if (searchParams.has(key)) searchParams.set(key, value);
      else searchParams.append(key, value);
    } else searchParams.delete(key);
    setSearchParams(searchParams);
  };
  const setPage = (val: any) => {
    setCurrentPage(val);
    handleMakeParams("page", val);
    GetNews();
    window.scrollTo(0, 0);
  };
  const urlMaker = () => {
    let url = "&";
    for (let key of searchParams.keys()) {
      let value = searchParams.get(key);
      url = url + `${url.length < 2 ? "" : "&"}${key}=${value}`;
    }
    return url.length > 2 ? url : "";
  };

  const GetNews = async () => {
    try {
      const { data } = await GetNewsConfig(urlMaker());
      setTotal(data?.totalElements);
      setNews(data?.content);
    } catch (error) {
      // CatchError(error);
    }
  };
  const submitNews = async (val: any) => {
    if (fileList.length > 0) {
      try {
        const { data } = await CreateNewsConfig({
          ...val,
          newsDate: val?.newsDate?.format("YYYY-MM-DD"),
        });
        message.success(data?.message);

        let images = new FormData();
        fileList.forEach((item: any) => {
          images.append("files", item);
        });

        await CreateImageConfig(data?.object, images);

        form.resetFields();
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
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.anonsUZ,
                    }}
                  ></p>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <NoData title="Yangiliklar mavjud emas" />
      )}

      <div
        className="flex"
        style={{ justifyContent: "center", marginBottom: 24 }}
      >
        <Pagination
          total={total}
          current={+currentpage}
          onChange={(val) => setPage(val)}
        />
      </div>

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

          <Form.Item
            label="Yangilikni o'zbekcha anonsi"
            name="anonsUZ"
            rules={[
              { required: true, message: "Yangilikni o'zbekcha anonsi !" },
            ]}
          >
            <Input.TextArea rows={4} maxLength={450} showCount />
          </Form.Item>
          <Form.Item
            label="Yangilikni ruscha anonsi"
            name="anonsRU"
            rules={[{ required: true, message: "Yangilikni ruscha anonsi !" }]}
          >
            <Input.TextArea rows={4} maxLength={450} showCount />
          </Form.Item>
          <Form.Item
            label="Yangilikni inglizcha anonsi"
            name="anonsEN"
            rules={[
              { required: true, message: "Yangilikni inglizcha anonsi !" },
            ]}
          >
            <Input.TextArea rows={4} maxLength={450} showCount />
          </Form.Item>

          <Form.Item
            label="Yangilikni o'zbekcha matni"
            name="textUZ"
            rules={[
              {
                min: 20,
                required: true,
                message: "Yangilikni o'zbekcha matni !",
              },
            ]}
          >
            <SunEditor setOptions={options} height="400" />
          </Form.Item>
          <Form.Item
            label="Yangilikni ruscha matni"
            name="textRU"
            rules={[
              {
                min: 20,
                required: true,
                message: "Yangilikni ruscha matni !",
              },
            ]}
          >
            <SunEditor setOptions={options} height="400" />
          </Form.Item>
          <Form.Item
            label="Yangilikni inglizcha matni"
            name="textEN"
            rules={[
              {
                min: 20,
                required: true,
                message: "Yangilikni inglizcha matni !",
              },
            ]}
          >
            <SunEditor setOptions={options} height="400" />
          </Form.Item>

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
