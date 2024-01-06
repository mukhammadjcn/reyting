import { Button, Form, Input, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { headers } from "src/server/Host";

function Form5({
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

  const getHemisData = () => {
    if (edit || isModal) {
      axios
        .get(
          `https://akt.edu.uz/api/public/getStudentAndTeacherCountByUniversity`,
          { headers }
        )
        .then((res) => {
          form.setFieldValue(`hemisTeacherCount`, res.data?.teacherCount);
          form.setFieldValue(`hemisStudentCount`, res.data?.studentCount);
        });
    }
  };
  useEffect(() => getHemisData, [edit]);

  const submitData = (val: any) => {
    axios.post(url, val, { headers }).then(() => {
      getData();
      setOpenModal(false);
    });
  };
  useEffect(() => {
    !isModal && form.setFieldsValue(data);
    !edit && form.setFieldsValue(data);
  }, [edit]);

  useEffect(() => {
    if (!edit && !isModal) {
      form.validateFields().then((Formdata) =>
        axios.put(url, Formdata, { headers }).then(() => {
          setEdit(false);
          setData([{ ...Formdata, id: data?.id }]);
          message.success(`Muvofaqqiyatli yangilandi`);
        })
      );
    }
  }, [countEdit]);

  useEffect(() => isModal && getHemisData(), []);

  return (
    <Form
      form={form}
      onFinish={submitData}
      layout="vertical"
      className={`passport__form ${isModal ? "passport__form-modal" : ""}`}
    >
      <h2 className="title">Xonalar soni</h2>

      <Form.Item
        className="half"
        label="Professor-o'qituvchi va xodimlarning umumiy soni"
        name="teacherCount"
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
        label="Professor-o'qituvchi va xodimlarning umumiy soni (HEMIS)"
        name="hemisTeacherCount"
        rules={[
          {
            required: true,
            message: `Ma'lumotni kiriting !`,
          },
        ]}
      >
        <Input size="large" type="number" disabled />
      </Form.Item>

      <Form.Item
        className="half"
        label="Talabalarning umumiy soni"
        name="studentCount"
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
        label="Talabalarning umumiy soni (HEMIS)"
        name="hemisStudentCount"
        rules={[
          {
            required: true,
            message: `Ma'lumotni kiriting !`,
          },
        ]}
      >
        <Input size="large" type="number" disabled />
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

export default Form5;
