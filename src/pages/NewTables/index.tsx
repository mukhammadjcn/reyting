import React, { useEffect, useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Segmented,
  Select,
  Spin,
  Table,
  Tabs,
  Upload,
  message,
} from "antd";
import { useSearchParams } from "react-router-dom";
import { titles } from "src/static";
import axios from "axios";
import { headers, headersMultipart } from "src/server/Host";
import { CopyOutlined, InboxOutlined } from "@ant-design/icons";
import {
  BooleanFiels,
  DateFormat,
  DatesFields,
  GiveBooleanRender,
  GiveBooleanValue,
  NotRequiredFiels,
  TextAreaFiels,
} from "src/utils/index";
import dayjs from "dayjs";
import { TabsData } from "./const";
import { EditOutlined } from "@ant-design/icons";
import EmptyText from "./components/EmptyText";
import { FileSVG } from "src/components/svg";

function NewTables() {
  const [form] = Form.useForm();
  const [formFile] = Form.useForm();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const quater = searchParams.get("quater") || 1;
  const year = searchParams.get("year") || new Date().getFullYear();
  const tabs = TabsData?.[Number(page)];
  const tab = searchParams.get("tab") || tabs?.[0]?.url;
  const currentTab = tabs?.find((item: any) => item?.url == tab);

  const [column, setColumn] = useState<any>([]);

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

  const GiveColumn = async () => {
    let cols = [];
    await currentTab?.values?.map((item: any) => {
      cols.push({
        key: item?.url,
        title: item?.title,
        dataIndex: item?.url,
        render: (val: any) =>
          DatesFields?.includes(item?.url) ? (
            dayjs(val).format(DateFormat)
          ) : BooleanFiels?.includes(item?.url) ? (
            GiveBooleanValue(val, item?.url)
          ) : String(val)?.includes(
              "https://akt.edu.uz/api/public/download"
            ) ? (
            <a href={val} target="_blank">
              <Button
                type="dashed"
                icon={<FileSVG />}
                className="filelink"
                style={{ display: "flex", alignItems: "center", gap: 8 }}
              >
                File ni ko'rish
              </Button>
            </a>
          ) : String(val)?.includes("https:") ? (
            <a href={val} target="_blank">
              Havolaga o'tish
            </a>
          ) : (
            val
          ),

        width: 400,
      });
    });
    cols.push({
      key: "createdDate",
      title: "Ma'lumot kiritilgan vaqti",
      dataIndex: "createdDate",
      width: 100,
      align: "center",
      render: (val: any) => dayjs(val).format(DateFormat),
    });
    cols.push({
      key: "action",
      title: "Amallar",
      render: (_: any, render: any) => (
        <Button
          icon={<EditOutlined />}
          onClick={() => {
            let newEditObj: any = {};
            for (const property in render) {
              if (DatesFields.includes(property)) {
                newEditObj[property] = dayjs(render[property]);
              } else {
                newEditObj[property] = render[property];
              }
            }
            setOpenEditModal(true);
            setEditData(newEditObj);
            form.setFieldsValue(newEditObj);
          }}
        />
      ),
      width: 60,
      align: "center",
    });
    setColumn(cols);
  };
  const GetData = async () => {
    setLoading(true);
    axios
      .get(`https://akt.edu.uz/api/${tab}?size=30&quarterId=${quater}`, {
        headers,
      })
      .then((res) =>
        setData(
          res.data?.content?.reduce(
            (all: any, cur: any) => [...all, { ...cur, key: cur?.id }],
            []
          )
        )
      )
      // .catch((error) => {
      //   if (error?.response?.status === 401) {
      //     localStorage.clear();
      //     window.location.href = "/";
      //   }
      // })
      .finally(async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading(false);
      });
  };
  const SubmitData = async (val: any) => {
    setLoadingForm(true);
    if (editData?.id === 0) {
      axios
        .post(
          `https://akt.edu.uz/api/${tab}`,
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
          `https://akt.edu.uz/api/${tab}/${editData?.id}`,
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
  const DeleteFunc = () => {
    setLoadingForm(true);
    axios
      .delete(`https://akt.edu.uz/api/${tab}/${editData?.id}`, {
        headers,
      })
      .then(() => {
        message.success(`Muvaffaqiyatli o'chirildi !`);
        GetData();
      });
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
      .post(`https://akt.edu.uz/api/public/uploadFile?key=file`, formData, {
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
    GiveColumn();
  }, [searchParams]);

  return (
    <div className="tables">
      <div className="flex">
        <h2 className="tables__title">{titles[`tab${String(page)}`]}</h2>
        <div className="flex">
          <Select
            style={{ marginRight: 16 }}
            value={String(year)}
            onChange={(val) => handleMakeParams("year", val)}
            options={[
              {
                value: "2023",
                label: "2023",
              },
            ]}
          />
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

      {/* {loading ? (
        <div className="loading">
          <Spin tip="Yuklanmoqda" size="large"></Spin>
        </div>
      ) : (
        <></>
      )} */}

      <div className="tables__tabs">
        {/* Tabs */}
        <Tabs
          type="card"
          activeKey={tab}
          items={tabs?.map((item: any, index: number) => ({
            key: item?.url,
            label: `${page}.${index + 1}`,
          }))}
          onChange={(val) => {
            setData([]);
            handleMakeParams("tab", val);
            handleMakeParams("quater", 1);
          }}
        />

        {/* Title and actions */}
        <div
          className="flex"
          style={{ alignItems: "center", margin: "16px 0", gap: 24 }}
        >
          <h3>{currentTab?.title}</h3>
          <Button
            type="primary"
            onClick={() => {
              setEditData({ id: 0 });
              setOpenEditModal(true);
            }}
          >
            + Qoshish
          </Button>
        </div>

        {/* Table */}
        <Table
          columns={column}
          loading={loading}
          dataSource={data}
          scroll={{ x: 500 }}
          locale={{
            emptyText: <EmptyText />,
          }}
        />
      </div>

      {/* Edit, Create Modal */}
      <Modal
        centered
        width={600}
        footer={null}
        open={openEditModal}
        title={editData?.title}
        onCancel={() => {
          form.resetFields();
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
            {currentTab?.values?.map((field: any) => (
              <Form.Item
                key={field?.url}
                name={field?.url}
                label={field?.title}
                rules={[
                  {
                    required: !NotRequiredFiels.includes(field?.url),
                    message: `${field?.title} !`,
                  },
                ]}
              >
                {/* <Input /> */}
                {DatesFields.includes(field?.url) ? (
                  <DatePicker
                    allowClear={false}
                    format={DateFormat}
                    style={{ width: "100%" }}
                    placeholder="Sanani tanlang !"
                  />
                ) : BooleanFiels.includes(field?.url) ? (
                  GiveBooleanRender(field?.url)
                ) : TextAreaFiels.includes(field?.url) ? (
                  <Input.TextArea rows={5} />
                ) : (
                  <Input />
                )}
              </Form.Item>
            ))}

            <div
              className="flex"
              style={{ justifyContent: "flex-end", gap: 16 }}
            >
              <Button
                icon={<CopyOutlined />}
                onClick={() => setOpenFileModal(true)}
              >
                Fayl yuklab havola yaratish
              </Button>

              {editData?.id !== 0 && (
                <Button danger onClick={DeleteFunc}>
                  Ma'lumotni o'chirish
                </Button>
              )}

              <Form.Item style={{ marginBottom: 0 }}>
                <Button type="primary" htmlType="submit">
                  {editData?.id === 0 ? "Yuborish" : "Tahrirlash"}
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Spin>
      </Modal>

      {/* Upload and make url btn */}
      <Modal
        centered
        width={600}
        footer={null}
        open={openFileModal}
        title={"Fayl yuklab havola yaratish"}
        onCancel={() => {
          setFileLink("");
          formFile.resetFields();
          setOpenFileModal(false);
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

export default NewTables;
