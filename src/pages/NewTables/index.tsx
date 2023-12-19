import React, { useEffect, useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Segmented,
  Select,
  Spin,
  Table,
  Tabs,
  message,
} from "antd";
import { useSearchParams } from "react-router-dom";
import { titles } from "src/static";
import axios from "axios";
import { headers } from "src/server/Host";
import {
  BooleanFiels,
  DateFormat,
  DatesFields,
  DisabledFiels,
  FileFiels,
  GiveBooleanRender,
  GiveBooleanValue,
  HemisList,
  NotRequiredFiels,
  NumberFiels,
  TextAreaFiels,
} from "src/utils/index";
import dayjs from "dayjs";
import { TabsData } from "./const";
import { EditOutlined } from "@ant-design/icons";
import EmptyText from "./components/EmptyText";
import { FileSVG } from "src/components/svg";
import UploadFileInput from "./components/UploadFileInput";
import moment from "moment";
import SSLForm from "./components/SSLForm";
import VideoForm from "./components/VideoForm";

function NewTables() {
  const [form] = Form.useForm();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const quater = searchParams.get("quater") || 1;
  const year = searchParams.get("year") || new Date().getFullYear();
  const tabs = TabsData?.[Number(page)];
  const tab = searchParams.get("tab") || tabs?.[0]?.url;
  const currentTab = tabs?.find((item: any) => item?.url == tab);

  const [column, setColumn] = useState<any>([]);

  const [data, setData] = useState<any>();
  const [dataHemis, setDataHemis] = useState<any>();
  const [editData, setEditData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingFrom, setLoadingForm] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);

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
                Faylni ko'rish
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

    // Get tabs data from api
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

      // If tab includes hemis data
      .then(() => {
        if (HemisList?.includes(tab)) {
          axios
            .get(
              `https://akt.edu.uz/api/public/getStudentAndTeacherCountByUniversity`,
              {
                headers,
              }
            )
            .then((res) => {
              setDataHemis(res.data);
              form.setFieldValue(
                "hemisTotalTeacherCount",
                res.data?.teacherCount
              );
              form.setFieldValue(
                "hemisTotalStudentCount",
                res.data?.studentCount
              );
            });
        }
      })
      .catch((error) => {
        if (error?.response?.status === 401) {
          localStorage.clear();
          window.location.href = "/";
        }
      })
      .finally(async () => {
        await new Promise((resolve) => setTimeout(resolve, 300));
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
              form.setFieldValue(
                "hemisTotalTeacherCount",
                dataHemis?.teacherCount
              );
              form.setFieldValue(
                "hemisTotalStudentCount",
                dataHemis?.studentCount
              );
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
        width={840}
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
          {tab === `websiteSSLCertificate` ? (
            <SSLForm
              form={form}
              SubmitData={SubmitData}
              editData={editData}
              DeleteFunc={DeleteFunc}
            />
          ) : tab === `videoSurveillanceSystem` ? (
            <VideoForm
              form={form}
              SubmitData={SubmitData}
              editData={editData}
              DeleteFunc={DeleteFunc}
            />
          ) : (
            <Form
              form={form}
              layout="vertical"
              onFinish={SubmitData}
              className="customForm"
              style={{ marginTop: 24 }}
            >
              {currentTab?.values?.map((field: any) => (
                <Form.Item
                  key={field?.url}
                  name={field?.url}
                  label={field?.title}
                  rules={[
                    {
                      required: !NotRequiredFiels.includes(field?.url),
                      message: `Ma'lumotni kiriting !`,
                    },
                  ]}
                >
                  {DatesFields.includes(field?.url) ? (
                    <DatePicker
                      size="large"
                      allowClear={false}
                      format={DateFormat}
                      style={{ width: "100%" }}
                      placeholder="Sanani tanlang !"
                      disabledDate={(current) =>
                        current &&
                        current > moment().startOf("day").add(1, "day")
                      }
                    />
                  ) : BooleanFiels.includes(field?.url) ? (
                    GiveBooleanRender(field?.url)
                  ) : TextAreaFiels.includes(field?.url) ? (
                    <Input.TextArea size="large" rows={3} />
                  ) : FileFiels.includes(field?.url) ? (
                    <UploadFileInput
                      defaultLink={form.getFieldValue(field?.url) || ""}
                      setLink={(link: string) => {
                        form.setFieldValue(field?.url, link);
                        form.validateFields();
                      }}
                    />
                  ) : NumberFiels.includes(field?.url) ? (
                    <InputNumber
                      min={1}
                      size="large"
                      type="number"
                      style={{ width: "100%" }}
                      disabled={DisabledFiels?.includes(field?.url)}
                    />
                  ) : (
                    <Input min={1} size="large" />
                  )}
                </Form.Item>
              ))}

              <div
                className="flex"
                style={{ justifyContent: "flex-end", gap: 16 }}
              >
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
          )}
        </Spin>
      </Modal>
    </div>
  );
}

export default NewTables;
