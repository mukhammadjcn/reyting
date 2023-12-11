import { Button, Form, Radio } from "antd";
import React, { useState } from "react";
import { NotRequiredFiels } from "src/utils/index";
import UploadFileInput from "./UploadFileInput";

function SSLForm({ form, SubmitData, editData, DeleteFunc }: any) {
  const [isSSl, setSSl] = useState(
    form.getFieldValue("existSSLCertificate") || false
  );
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={SubmitData}
      className="customForm"
      style={{ marginTop: 24 }}
      onChange={() => setSSl(form.getFieldValue("existSSLCertificate"))}
    >
      <Form.Item
        name={`existSSLCertificate`}
        label={`Rasmiy veb-sayt uchun SSL sertifikatining mavjudligi (mavjud, mavjud emas)`}
        rules={[
          {
            required: !NotRequiredFiels.includes(`existSSLCertificate`),
            message: `Ma'lumotni kiriting !`,
          },
        ]}
      >
        <Radio.Group buttonStyle="solid" size="large">
          <Radio.Button value={true}>Mavjud</Radio.Button>
          <Radio.Button value={false}>Mavjud emas</Radio.Button>
        </Radio.Group>
      </Form.Item>

      {isSSl && (
        <Form.Item
          name={`sslCertificatePhoto`}
          label={`Isbotlovchi rasmini yuklash`}
          rules={[
            {
              required: !NotRequiredFiels.includes(`existSSLCertificate`),
              message: `Ma'lumotni kiriting !`,
            },
          ]}
        >
          <UploadFileInput
            defaultLink={form.getFieldValue(`sslCertificatePhoto`) || ""}
            setLink={(link: string) => {
              form.setFieldValue(`sslCertificatePhoto`, link);
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

export default SSLForm;
