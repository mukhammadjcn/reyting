import { Button, DatePicker, Form, Input, message } from "antd";
import dayjs from "dayjs";
import axios from "axios";
import { headers } from "src/server/Host";
import React, { useEffect, useState } from "react";
import UploadFileInput from "src/pages/NewTables/components/UploadFileInput";

function Form1({
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
        rectorPassportIssuedDate: dayjs(data?.rectorPassportIssuedDate),
      };
      form.setFieldsValue(final);
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
      <h2 className="title">OTM haqida</h2>
      <Form.Item
        className="half"
        label="OTM nomi"
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
        label="OTM turi"
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
        label="INNSI"
        name="inn"
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
        label="Veb sayt"
        name="website"
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
        label="Elektron pochta"
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
        label="Telefon raqami"
        name="phone"
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
        label="Faks"
        name="fax"
        rules={[
          {
            required: true,
            message: `Ma'lumotni kiriting !`,
          },
        ]}
      >
        <Input size="large" disabled={edit} />
      </Form.Item>

      <h2 className="title">OTM rahbari</h2>
      <Form.Item
        className="half"
        label="Pasport berilgan sana"
        name="rectorPassportIssuedDate"
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
        />
      </Form.Item>
      <Form.Item
        className="half"
        label="JSHIR"
        name="rectorPnfl"
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
        label="Familya"
        name="rectorLastName"
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
        name="rectorFirstName"
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
        name="rectorFatherName"
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
        label="Telefon raqam"
        name="rectorPhone"
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
        label="Elektron pochta"
        name="rectorEmail"
        rules={[
          {
            required: true,
            message: `Ma'lumotni kiriting !`,
          },
        ]}
      >
        <Input size="large" disabled={edit} />
      </Form.Item>

      <h2 className="title">Yuridik manzil</h2>
      <Form.Item
        className="half"
        label="Viloyat"
        name="region"
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
        label="Tuman"
        name="district"
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
        label="Ko‘cha "
        name="street"
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
        label="Uy"
        name="homeNumber"
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
        label="Pochta"
        name="postcode"
        rules={[
          {
            required: true,
            message: `Ma'lumotni kiriting !`,
          },
        ]}
      >
        <Input size="large" disabled={edit} />
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

export default Form1;
