import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  Modal,
  Segmented,
  Spin,
  Upload,
  message,
} from "antd";
import { useSearchParams } from "react-router-dom";
import { titles } from "src/static";
import { GetPage1, GetPage2, GetPage3, GetPage5, GetPage6 } from "./apis";
import CardItem from "./components/CardItem";
import axios from "axios";
import { headers, headersMultipart } from "src/server/Host";
import { CopyOutlined, InboxOutlined } from "@ant-design/icons";

function Tables() {
  const [form] = Form.useForm();
  const [formFile] = Form.useForm();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const quater = searchParams.get("quater") || 1;
  const year = searchParams.get("year") || new Date().getFullYear();

  const [data, setData] = useState<any>();
  const [editData, setEditData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [fileLink, setFileLink] = useState<string>("");
  const [loadingFrom, setLoadingForm] = useState<boolean>(false);
  const [loadingFile, setLoadingFile] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [openFileModal, setOpenFileModal] = useState<boolean>(false);

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e[0];
    }
    return e?.fileList[0];
  };
  const handleMakeParams = (key: any, value: any) => {
    if (value) {
      if (searchParams.has(key)) searchParams.set(key, value);
      else searchParams.append(key, value);
    } else searchParams.delete(key);
    setSearchParams(searchParams);
  };

  const GetData = async () => {
    setLoading(true);
    +page === 1 && setData(await GetPage1(`&quarterId=${quater}`));
    +page === 2 && setData(await GetPage2(`&quarterId=${quater}`));
    +page === 3 && setData(await GetPage3(`&quarterId=${quater}`));
    +page === 5 && setData(await GetPage5(`&quarterId=${quater}`));
    +page === 6 && setData(await GetPage6(`&quarterId=${quater}`));
    setLoading(false);
  };
  const SubmitData = async (val: any) => {
    setLoadingForm(true);
    if (editData?.id === 0) {
      axios
        .post(
          `https://akt.e-edu.uz/api/${editData?.url}`,
          { ...val, quarterId: quater },
          {
            headers,
          }
        )
        .then((res) => {
          message.success(res.data?.message);
          GetData();
        })
        .catch((error) => message.error(error?.response?.data?.message));
    } else {
      axios
        .put(
          `https://akt.e-edu.uz/api/${editData?.url}/${editData?.id}`,
          { ...val, quarterId: quater },
          {
            headers,
          }
        )
        .then((res) => {
          message.success(res.data?.message);
          GetData();
        })
        .catch((error) => message.error(error?.response?.data?.message));
    }
    form.resetFields();
    setLoadingForm(false);
    setOpenEditModal(false);
  };
  const CreateResource = async (val: any) => {
    const { file } = val;
    let formData = new FormData();
    formData.append("file", file?.originFileObj);

    // Send file to api
    setLoadingFile(true);

    axios
      .post(`https://akt.e-edu.uz/api/public/uploadFile?key=file`, formData, {
        headers: headersMultipart,
      })
      .then((res) => {
        setFileLink(res.data?.url);
      })
      .catch((error) => message.error(error?.response?.data?.message));

    setLoadingFile(false);
  };

  useEffect(() => {
    GetData();
  }, [searchParams]);

  return (
    <div className="tables">
      <div className="flex">
        <h2 className="tables__title">{titles[`tab${String(page)}`]}</h2>
        <div className="flex">
          <Segmented
            options={[
              {
                label: "1-chorak",
                value: 1,
              },
              {
                label: "2-chorak",
                value: 2,
              },
            ]}
            value={+quater}
            onChange={(val) => handleMakeParams("quater", val)}
          />
        </div>
      </div>

      {loading ? (
        <div className="loading">
          <Spin tip="Yuklanmoqda" size="large"></Spin>
        </div>
      ) : (
        <div className="tables__cards">
          {data?.cards?.map((card: any) => (
            <CardItem
              card={card}
              key={card?.url}
              cardType={data?.cardType}
              setEditCard={(val: string) => {
                // Find edit data
                const editData = data?.cards?.find(
                  (item: any) => item?.url === val
                );

                // EDit obj
                const editObj = editData?.values?.reduce(
                  (acc: Object, cur: any) => ({
                    ...acc,
                    [cur.url]: cur.count !== "Mavjud emas" ? cur.count : "",
                  }),
                  {}
                );

                // setdata
                setOpenEditModal(true);
                setEditData(editData);
                form.setFieldsValue(editObj);
              }}
            />
          ))}
        </div>
      )}

      <Modal
        centered
        width={600}
        footer={null}
        open={openEditModal}
        title={editData?.title}
        onCancel={() => {
          setLoadingForm(false);
          setOpenEditModal(false);
        }}
      >
        <Spin spinning={loadingFrom}>
          <Form
            form={form}
            layout="vertical"
            style={{ marginTop: 24 }}
            onFinish={SubmitData}
          >
            {editData?.values?.map((field: any) => (
              <Form.Item
                key={field?.url}
                name={field?.url}
                label={field?.title}
                rules={[{ required: true, message: `${field?.title} !` }]}
              >
                <Input />
              </Form.Item>
            ))}

            <div
              className="flex"
              style={{ justifyContent: "flex-end", gap: 16 }}
            >
              <Form.Item style={{ marginBottom: 0 }}>
                <Button
                  icon={<CopyOutlined />}
                  onClick={() => setOpenFileModal(true)}
                >
                  Fayl yuborib havola yaratish
                </Button>
              </Form.Item>
              <Form.Item style={{ marginBottom: 0 }}>
                <Button type="primary" htmlType="submit">
                  Yuborish
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Spin>
      </Modal>

      <Modal
        centered
        width={600}
        footer={null}
        open={openFileModal}
        title={"Fayl yuklab havola yaratish"}
        onCancel={() => {
          setOpenFileModal(false);
          formFile.resetFields();
          setFileLink("");
        }}
      >
        <Spin spinning={loadingFile}>
          <Form
            form={formFile}
            layout="vertical"
            style={{ marginTop: 32 }}
            onFinish={CreateResource}
          >
            <Form.Item
              noStyle
              name="file"
              valuePropName="file"
              rules={[
                {
                  required: true,
                  message: "Faylni yuklang !",
                },
              ]}
              getValueFromEvent={normFile}
            >
              <Upload.Dragger
                maxCount={1}
                multiple={false}
                beforeUpload={() => false}
                accept={"application/*"}
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Faylni bu yerga tashlang yoki shu yerga bosing )
                </p>
              </Upload.Dragger>
            </Form.Item>

            {fileLink && (
              <div style={{ marginTop: 24 }}>
                <h3>
                  Havola linkini ustiga bosing va vaqtincha saqlab oling !
                </h3>
                <a
                  onClick={() => {
                    navigator.clipboard.writeText(fileLink);
                    message.success("Muvofaqqiyatli nusxa olindi");
                  }}
                >
                  {fileLink}
                </a>
              </div>
            )}

            <Form.Item
              style={{ marginBottom: 0, marginTop: 36, textAlign: "end" }}
            >
              {fileLink ? (
                <Button
                  onClick={() => {
                    setOpenFileModal(false);
                    formFile.resetFields();
                    setFileLink("");
                  }}
                >
                  Modalni yopish
                </Button>
              ) : (
                <Button type="primary" htmlType="submit">
                  Yuborish
                </Button>
              )}
            </Form.Item>
          </Form>
        </Spin>
      </Modal>
    </div>
  );
}

export default Tables;
