import { Button, Form, Input, message } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { headers } from "src/server/Host";

function Form4({
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
    !isModal && form.setFieldsValue(data);
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
      <h2 className="title">Xonalar soni</h2>

      <Form.Item
        className="col3"
        label="O‘quv binolar soni"
        name="educationBuildingCount"
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
        className="col3"
        label="Yotoqxonalar soni"
        name="dormitoryCount"
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
        className="col3"
        label="Server xonalar soni"
        name="serverRoomsCount"
        rules={[
          {
            required: true,
            message: `Ma'lumotni kiriting !`,
          },
        ]}
      >
        <Input size="large" type="number" disabled={edit} />
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

export default Form4;
