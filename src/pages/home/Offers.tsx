import {
  Button,
  Form,
  Input,
  message,
  Modal,
  Table,
  Tabs,
  TabsProps,
} from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  DelOfferIdConfig,
  GetOffersConfig,
  SendOffersConfig,
} from "src/server/config/Urls";
import { IOffer } from "src/types/index";
import { CatchError } from "src/utils/index";
import { SettingOutlined } from "@ant-design/icons";

function Offers() {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [total, setTotal] = useState(0);
  const currentp = searchParams.get("page");
  const currentTab = searchParams.get("status");
  const [current, setCurrent] = useState(currentTab ? currentTab : "Yangi");
  const [currentpage, setCurrentPage] = useState(currentp ? currentp : 1);
  const [offers, setOffers] = useState<IOffer[]>([]);
  const [currentOffer, setCurrentOffer] = useState<IOffer[]>([]);
  const [loading, setLoading] = useState(false);

  const items: TabsProps["items"] = [
    {
      key: "Yangi",
      label: `Yangi murojatlar`,
    },
    {
      key: "Javob berildi",
      label: `Javob berilgan murojatlar`,
    },
  ];
  const columns: ColumnsType<IOffer> = [
    {
      title: "Ismi",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Telefon raqami",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      align: "center",
      width: 400,
    },
    {
      title: "Elektron pochta",
      dataIndex: "email",
      key: "email",
      align: "center",
      width: 400,
    },
    {
      title: "Amallar",
      key: "actions",
      align: "center",
      width: 100,
      render: (_, item) => (
        <Button
          type="primary"
          icon={<SettingOutlined />}
          onClick={() => openModal(item)}
        />
      ),
    },
  ];

  const handleMakeParams = (key: any, value: any) => {
    if (value) {
      if (searchParams.has(key)) searchParams.set(key, value);
      else searchParams.append(key, value);
    } else searchParams.delete(key);
    setSearchParams(searchParams);
  };
  const setTabs = (val: any) => {
    setCurrent(val);
    handleMakeParams("status", val);
    GetOffers();
    window.scrollTo(0, 0);
  };
  const setPage = (val: any) => {
    setCurrentPage(val.current);
    handleMakeParams("page", val.current);
    GetOffers();
    window.scrollTo(0, 0);
  };
  const urlMaker = () => {
    let url = "&";
    for (let key of searchParams.keys()) {
      let value = searchParams.get(key);
      url = url + `${url.length < 2 ? "" : "&"}${key}=${value}`;
    }
    return url.length > 2 ? url : "";
  };
  const closeModal = () => {
    setCurrentOffer([]);
    form.resetFields();
    setOpen(false);
  };
  const openModal = (item: IOffer) => {
    form.setFieldsValue(item);
    setCurrentOffer([item]);
    setOpen(true);
  };
  const submitOffer = async (val: IOffer) => {
    try {
      const { data } = await SendOffersConfig(
        `?offerId=${val.id}&answer=${val.answer}`
      );
      message.success(data?.message);
      closeModal();
      GetOffers();
    } catch (error) {
      CatchError(error);
    }
  };

  const GetOffers = async () => {
    setLoading(true);
    try {
      const { data } = await GetOffersConfig(urlMaker());

      // Set pagination data
      setTotal(data.totalElements);

      // Set Data
      setOffers(
        data?.content.reduce(
          (prev: any, next: any) => [
            ...prev,
            {
              key: next?.id,
              ...next,
            },
          ],
          []
        )
      );
    } catch (error) {
      CatchError(error);
    }
    setLoading(false);
  };
  const deleteOffer = async () => {
    try {
      const { data } = await DelOfferIdConfig(currentOffer[0]?.id);
      message.success(data?.message);
      closeModal();
      GetOffers();
    } catch (error) {
      CatchError(error);
    }
  };

  useEffect(() => {
    GetOffers();
  }, []);

  return (
    <div>
      <Tabs items={items} activeKey={current} onChange={setTabs} />

      <Table
        columns={columns}
        loading={loading}
        onChange={setPage}
        dataSource={offers}
        pagination={{
          total: total,
          pageSize: 10,
          current: +currentpage,
        }}
      />

      <Modal title="" open={open} footer={null} onCancel={closeModal}>
        <Form
          form={form}
          onFinish={submitOffer}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item label="" name="id" style={{ display: "none" }}>
            <Input.TextArea disabled />
          </Form.Item>

          <Form.Item label="Murojat matni" name="text">
            <Input.TextArea disabled />
          </Form.Item>

          <Form.Item
            label="Murojatga javob bering"
            name="answer"
            rules={[{ required: true, message: "Murojatga javob bering !" }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0, marginTop: 16 }}>
            <div className="flex" style={{ justifyContent: "end" }}>
              {current !== "Yangi" && (
                <Button
                  danger
                  type="primary"
                  onClick={deleteOffer}
                  style={{ marginRight: 16 }}
                >
                  O'chirish
                </Button>
              )}
              <Button onClick={closeModal} style={{ marginRight: 16 }}>
                Bekor qilish
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                disabled={current !== "Yangi"}
              >
                Yuborish
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Offers;
