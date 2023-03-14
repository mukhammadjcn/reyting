import { Button, Form, Input, message, Modal, Upload, UploadFile } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GetNewsIdConfig, UpdateNewsConfig } from "src/server/config/Urls";
import { CatchError } from "src/utils/index";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import ReactQuill from "react-quill";

function NewsID() {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState<any>();
  const [form] = Form.useForm();
  const [news, setNews] = useState([]);
  const [open, setOpen] = useState(false);
  const [textUZ, setTextUZ] = useState<string>("");
  const [textRU, setTextRU] = useState<string>("");
  const [textEN, setTextEN] = useState<string>("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const NewsID = async () => {
    try {
      const { data } = await GetNewsIdConfig(
        location.pathname.replaceAll("/home/news/", "")
      );
      setData(data);
    } catch (error) {
      CatchError(error);
    }
  };
  const submitNews = async (val: any) => {
    if (textEN && textRU && textUZ && fileList) {
      try {
        const { data } = await UpdateNewsConfig(
          location.pathname.replaceAll("/home/news/", ""),
          {
            ...val,
            textEN,
            textRU,
            textUZ,
          }
        );
        message.success(data?.message);

        let images = new FormData();
        fileList.forEach((item: any) => {
          images.append("files", item);
        });

        form.resetFields();
        setTextEN("");
        setTextRU("");
        setTextUZ("");
        setOpen(false);
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
    NewsID();
  }, []);

  return (
    <>
      <div className="blogpage">
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
          <Button type="primary" onClick={() => setOpen(true)}>
            Yangilikni tahrirlash
          </Button>
        </div>

        <h2 className="section_title">{data?.titleUZ}</h2>
        <img
          src={
            data?.documentResponses[0]?.fileUrl ?? "https://picsum.photos/200"
          }
          alt=""
        />
        <div dangerouslySetInnerHTML={{ __html: data?.textUZ }}></div>
      </div>

      <Modal title="" open={open} footer={null} onCancel={closeModal}>
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
            <ReactQuill
              value={textUZ}
              theme="snow"
              onChange={setTextUZ}
              modules={{
                toolbar: [
                  [{ header: "1" }],
                  [{ size: [] }],
                  ["bold", "italic", "underline", "blockquote"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["link"],
                  ["clean"],
                ],
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <p style={{ marginBottom: 8 }}>Yangilikni ruscha matni</p>
            <ReactQuill
              value={textRU}
              theme="snow"
              onChange={setTextRU}
              modules={{
                toolbar: [
                  [{ header: "1" }],
                  [{ size: [] }],
                  ["bold", "italic", "underline", "blockquote"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["link"],
                  ["clean"],
                ],
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <p style={{ marginBottom: 8 }}>Yangilikni inglizcha matni</p>
            <ReactQuill
              value={textEN}
              theme="snow"
              onChange={setTextEN}
              modules={{
                toolbar: [
                  [{ header: "1" }],
                  [{ size: [] }],
                  ["bold", "italic", "underline", "blockquote"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["link"],
                  ["clean"],
                ],
              }}
            />
          </div>

          <Upload
            maxCount={1}
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
              <Button onClick={closeModal}>Bekor qilish</Button>
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
