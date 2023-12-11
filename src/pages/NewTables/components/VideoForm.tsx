import { Button, Form, Radio } from "antd";
import React, { useState } from "react";
import { NotRequiredFiels } from "src/utils/index";
import UploadFileInput from "./UploadFileInput";
import { useForm } from "antd/es/form/Form";

function VideoForm({ form, SubmitData, editData, DeleteFunc }: any) {
  const [form1] = useForm(form);
  const [isVideo, setVideo] = useState(
    form.getFieldValue("videoSurveillanceSystemState") || 1
  );
  return (
    <Form
      form={form1}
      layout="vertical"
      onFinish={SubmitData}
      className="customForm"
      style={{ marginTop: 24 }}
      onChange={() =>
        setVideo(form.getFieldValue("videoSurveillanceSystemState"))
      }
    >
      <Form.Item
        style={{ flexBasis: "100%" }}
        name={`videoSurveillanceSystemState`}
        label={`Rasmiy veb-sayt uchun SSL sertifikatining mavjudligi (mavjud, mavjud emas)`}
        rules={[
          {
            required: !NotRequiredFiels.includes(
              `videoSurveillanceSystemState`
            ),
            message: `Ma'lumotni kiriting !`,
          },
        ]}
      >
        <Radio.Group buttonStyle="solid" size="large">
          <Radio.Button value={"1"}>Mavjud va ishlaydi</Radio.Button>
          <Radio.Button value={"2"}>Mavjud lekin ishlamaydi</Radio.Button>
          <Radio.Button value={"3"}>Mavjud emas</Radio.Button>
        </Radio.Group>
      </Form.Item>

      {isVideo !== "3" && (
        <Form.Item
          name={`proofPhoto`}
          label={`Isbotlovchi rasmini yuklash`}
          rules={[
            {
              required: !NotRequiredFiels.includes(
                `videoSurveillanceSystemState`
              ),
              message: `Ma'lumotni kiriting !`,
            },
          ]}
        >
          <UploadFileInput
            defaultLink={form.getFieldValue(`proofPhoto`) || ""}
            setLink={(link: string) => {
              form.setFieldValue(`proofPhoto`, link);
              form.validateFields();
            }}
          />
        </Form.Item>
      )}

      <div className="flex" style={{ justifyContent: "flex-end", gap: 16 }}>
        {editData?.id !== 0 && (
          <Button danger onClick={DeleteFunc}>
            Ma'lumotni o'chirish
          </Button>
        )}

        <Form.Item style={{ marginBottom: 0 }}>
          <Button type="primary" htmlType="submit">
            {editData?.id === 0 ? "Saqlash" : "Tahrirlash"}
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}

export default VideoForm;
