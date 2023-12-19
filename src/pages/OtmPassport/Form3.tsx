import { Button, DatePicker, Form, Input, message } from "antd";
import dayjs from "dayjs";
import axios from "axios";
import { headers } from "src/server/Host";
import React, { useEffect, useState } from "react";
import UploadFileInput from "src/pages/NewTables/components/UploadFileInput";
import moment from "moment";

function Form3({
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
        passportIssuedDate: dayjs(data?.passportIssuedDate),
      };
      form.setFieldsValue(final);
      setFileLink(final?.orderFile);
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
      <h2 className="title">Prorektor</h2>
      <Form.Item
        className="half"
        label="Pasport berilgan sana"
        name="passportIssuedDate"
        rules={[
          {
            required: true,
            message: `Ma'lumotni kiriting !`,
          },
        ]}
      >
        <DatePicker
          size="large"
          allowClear={false}
          disabled={edit}
          style={{ width: "100%" }}
          placeholder="Sanani belgilang"
          disabledDate={(current) =>
            current && current > moment().startOf("day").add(1, "day")
          }
        />
      </Form.Item>
      <Form.Item
        className="half"
        label="JSHSHIR"
        name="pnfl"
        rules={[
          {
            max: 14,
            min: 14,
            required: true,
            message: `Ma'lumotni kiriting !`,
          },
        ]}
      >
        <Input size="large" type="number" disabled={edit} />
      </Form.Item>
      <Form.Item
        className="col3"
        label="Familiya"
        name="firstName"
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
        className="col3"
        label="Ismi"
        name="lastName"
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
        className="col3"
        label="Otasining ismi"
        name="fatherName"
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
        label="Lavozimi"
        name="rank"
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
        label="Pochta"
        name="email"
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
        label="Telefon raqam"
        name="phone"
        rules={[
          {
            required: true,
            message: `Ma'lumotni kiriting !`,
          },
        ]}
      >
        <Input size="large" type="number" disabled={edit} />
      </Form.Item>
      <Form.Item
        className="half"
        label="Faks"
        name="fax"
        rules={[
          {
            required: true,
            message: `Ma'lumotni kiriting !`,
          },
        ]}
      >
        <Input size="large" type="number" disabled={edit} />
      </Form.Item>
      <Form.Item
        className="half"
        label="Lavozimga tayinlangan buyruq fayli"
        name="orderFile"
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
            form.setFieldValue("orderFile", link);
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

export default Form3;
