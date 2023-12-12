import { Button, DatePicker, Form, Input, message } from "antd";
import dayjs from "dayjs";
import axios from "axios";
import { headers } from "src/server/Host";
import React, { useEffect, useState } from "react";
import UploadFileInput from "src/pages/NewTables/components/UploadFileInput";

function Form2({
  isModal,
  setOpenModal,
  data,
  setData,
  edit,
  setEdit,
  countEdit,
  url,
  getData,
}: any) {
  const [form] = Form.useForm();
  const [fileLink, setFileLink] = useState("");

  const submitData = (val: any) => {
    axios.post(url, val, { headers }).then(() => {
      getData();
      setOpenModal(false);
    });
  };
  useEffect(() => {
    if (!isModal) {
      let final = {
        ...data,
        date: dayjs(data?.date),
      };
      form.setFieldsValue(final);
      setFileLink(final?.file);
    }
  }, [edit]);

  useEffect(() => {
    if (!edit && !isModal) {
      form.validateFields().then((Formdata) =>
        axios.put(url + `/${data?.id}`, Formdata, { headers }).then(() => {
          setEdit(false);
          setData([{ ...Formdata, id: data?.id }]);
          message.success(`Muvofaqqiyatli yangilandi`);
        })
      );
    }
  }, [countEdit]);

  return (
    <Form
      form={form}
      onFinish={submitData}
      layout="vertical"
      className={`passport__form ${isModal ? "passport__form-modal" : ""}`}
    >
      <h2 className="title">Hujjat haqida</h2>
      <Form.Item
        className="half"
        label="Hujjat raqami"
        name="number"
        rules={[
          {
            required: true,
            message: `Ma'lumotni kiriting !`,
          },
        ]}
      >
        <Input size="large" disabled={edit} />
      </Form.Item>
      <Form.Item
        className="half"
        label="Hujjat sanasi"
        name="date"
        rules={[
          {
            required: true,
            message: `Ma'lumotni kiriting !`,
          },
        ]}
      >
        <DatePicker
          allowClear={false}
          disabled={edit}
          style={{ width: "100%" }}
          placeholder="Sanani belgilang"
        />
      </Form.Item>
      <Form.Item
        className="half"
        label="Hujjat turi"
        name="type"
        rules={[
          {
            required: true,
            message: `Ma'lumotni kiriting !`,
          },
        ]}
      >
        <Input size="large" disabled={edit} />
      </Form.Item>
      <Form.Item
        className="half"
        label="Qabul qilgan organ"
        name="organization"
        rules={[
          {
            required: true,
            message: `Ma'lumotni kiriting !`,
          },
        ]}
      >
        <Input size="large" disabled={edit} />
      </Form.Item>
      <Form.Item
        className="half"
        label="Hujjat nomi"
        name="name"
        rules={[
          {
            required: true,
            message: `Ma'lumotni kiriting !`,
          },
        ]}
      >
        <Input size="large" disabled={edit} />
      </Form.Item>
      <Form.Item
        className="half"
        label="Hujjat fayli"
        name="file"
        rules={[
          {
            required: true,
            message: `Ma'lumotni kiriting !`,
          },
        ]}
      >
        <UploadFileInput
          disabled={edit}
          defaultLink={fileLink}
          setLink={(link: string) => {
            form.setFieldValue("file", link);
            form.validateFields();
          }}
        />
      </Form.Item>

      <div className="flex" style={{ justifyContent: "end", width: "100%" }}>
        {isModal && (
          <Form.Item style={{ marginBottom: 0 }}>
            <Button type="primary" htmlType="submit">
              Ma’lumotlarni saqlash
            </Button>
          </Form.Item>
        )}
      </div>
    </Form>
  );
}

export default Form2;
