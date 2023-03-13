import { Button, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CreateNewsConfig } from "src/server/config/Urls";
import { CatchError } from "src/utils/index";

function AddNews() {
  const [form] = Form.useForm();
  const [textUZ, setTextUZ] = useState<string>("");
  const [textRU, setTextRU] = useState<string>("");
  const [textEN, setTextEN] = useState<string>("");

  const submitNews = async (val: any) => {
    if (textEN && textRU && textUZ) {
      try {
        const { data } = await CreateNewsConfig({
          ...val,
          textEN,
          textRU,
          textUZ,
        });
        message.success(data?.message);

        form.resetFields();
        setTextEN("");
        setTextRU("");
        setTextUZ("");
      } catch (error) {
        CatchError(error);
      }
    } else {
      message.error("Matnlarni to'ldiring");
    }
  };

  return (
    <div>
      {/* Yangilik nomi */}
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
          <h3 style={{ marginBottom: 8 }}>Yangilikni o'zbekcha matni</h3>
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
          <h3 style={{ marginBottom: 8 }}>Yangilikni ruscha matni</h3>
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
          <h3 style={{ marginBottom: 8 }}>Yangilikni inglizcha matni</h3>
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddNews;
