import {
  Button,
  Form,
  Input,
  message,
  Modal,
  Upload,
  UploadFile,
  DatePicker,
  Skeleton,
} from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CreateImageConfig,
  DelNewsIdConfig,
  GetNewsIdConfig,
  ImageConfig,
  PrimaryConfig,
  UpdateNewsConfig,
} from "src/server/config/Urls";
import { CatchError } from "src/utils/index";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import SunEditor from "suneditor-react";
import { INews } from "types/index";
import { LoadingOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

function NewsID() {
  const location = useLocation();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { i18n } = useTranslation();
  const [news, setNews] = useState<any>();
  const [open, setOpen] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

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
  const GiveTrans = (news: INews, title = "title") => {
    const lang = localStorage.getItem("lang") ?? "RU";
    if (title == "title") {
      return lang == "RU"
        ? news?.titleRU
        : lang == "EN"
        ? news?.titleEN
        : news?.titleUZ;
    } else if (title == "anons") {
      return lang == "RU"
        ? news?.anonsRU
        : lang == "EN"
        ? news?.anonsEN
        : news?.anonsUZ;
    }
    return lang == "RU"
      ? news?.textRU
      : lang == "EN"
      ? news?.textEN
      : news?.textUZ;
  };

  const NewsID = async () => {
    try {
      const { data } = await GetNewsIdConfig(
        location.pathname.replaceAll("/home/news/", "")
      );
      setNews(data);
      form.setFieldsValue({
        ...data,
        newsDate: moment(data?.createdDate),
      });
    } catch (error) {
      CatchError(error);
    }
  };
  const updateNews = async (val: any) => {
    if (fileList.length > 0) {
      try {
        const { data } = await UpdateNewsConfig(
          location.pathname.replaceAll("/home/news/", ""),
          {
            ...val,
            newsDate: val?.newsDate.format("YYYY-MM-DD"),
          }
        );

        let images = new FormData();
        fileList.forEach((item: any) => {
          images.append("files", item);
        });

        await CreateImageConfig(
          location.pathname.replaceAll("/home/news/", ""),
          images
        );

        message.success(data?.message);

        form.resetFields();
        setOpen(false);
        NewsID();
      } catch (error) {
        // CatchError(error);
      }
    } else {
      message.error("Hamma maydonlarni to'ldiring");
    }
  };
  const closeModal = () => {
    // form.resetFields();
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
  const deleteNews = async () => {
    try {
      const { data } = await DelNewsIdConfig(
        location.pathname.replaceAll("/home/news/", "")
      );
      message.success(data?.message);
      navigate("/home/news");
    } catch (error) {
      CatchError(error);
    }
  };
  const makePrimary = async (type: boolean) => {
    try {
      await PrimaryConfig(news?.id, type);
      NewsID();
      message.success("Muvofaqqiyatli yangilandi");
    } catch (error) {
      CatchError(error);
    }
  };
  const handleCancel = () => setPreviewVisible(false);
  function handleImageUploadBefore(files: any, info: any, uploadHandler: any) {
    // uploadHandler is a function
    let final = new FormData();
    final.append("file", files[0]);

    ImageConfig(final)
      .then((res) => res.data)
      .then((data) => {
        let res = {
          result: [
            {
              url: data?.object?.fileUrl,
              name: data?.object?.fileName,
              size: 1,
            },
          ],
        };
        uploadHandler(res);
      });

    return undefined;
  }

  useEffect(() => {
    NewsID();
    i18n.changeLanguage(localStorage.getItem("lang") ?? "RU");
  }, []);

  return (
    <>
      <div className="adminblogpage">
        <div
          className="flex"
          style={{
            padding: 8,
            borderRadius: 8,
            marginBottom: 16,
            background: "white",
          }}
        >
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate("/home/news/")}
          >
            Orqaga
          </Button>

          {news?.isPublic ? (
            <Button onClick={() => makePrimary(false)} danger>
              Asosiydan o'chirish
            </Button>
          ) : (
            <Button onClick={() => makePrimary(true)}>Asosiy qilish</Button>
          )}

          <Button
            type="primary"
            onClick={() => {
              setOpen(true);
            }}
          >
            Yangilikni tahrirlash
          </Button>
        </div>

        {news?.createdDate ? (
          <div className="blogpage container">
            <h2 className="section_title">{GiveTrans(news)}</h2>

            <div
              dangerouslySetInnerHTML={{
                __html: GiveTrans(news, "false"),
              }}
            />

            <p style={{ textAlign: "end", marginBottom: 36 }}>
              {moment(news?.createdDate).format("DD.MM.YYYY")}
            </p>
          </div>
        ) : (
          <div className="blogpage container">
            <div style={{ marginBottom: 24 }}>
              <Skeleton.Input />
            </div>
            <div style={{ marginBottom: 24 }} className="image">
              <Skeleton.Node active={true}>
                <LoadingOutlined style={{ fontSize: 28, color: "#bfbfbf" }} />
              </Skeleton.Node>
            </div>

            <div style={{ marginBottom: 24 }}>
              <Skeleton active />
            </div>
            <div style={{ marginBottom: 24 }}>
              <Skeleton active />
            </div>
            <div style={{ marginBottom: 24 }}>
              <Skeleton active />
            </div>
          </div>
        )}
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
          layout="vertical"
          autoComplete="off"
          onFinish={updateNews}
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
            <SunEditor
              height="400"
              setOptions={options}
              setContents={news?.textUZ}
              onImageUploadBefore={handleImageUploadBefore}
            />
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
            <SunEditor
              height="400"
              setOptions={options}
              setContents={news?.textRU}
              onImageUploadBefore={handleImageUploadBefore}
            />
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
            <SunEditor
              height="400"
              setOptions={options}
              setContents={news?.textEN}
              onImageUploadBefore={handleImageUploadBefore}
            />
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
              <Button onClick={deleteNews} danger style={{ marginRight: 16 }}>
                O'chirish
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
    </>
  );
}

export default NewsID;
