import { Button, Table, Tabs, TabsProps } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { GetOffersConfig } from "src/server/config/Urls";
import { IOffer } from "src/types/index";
import { CatchError } from "src/utils/index";

function Offers() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [total, setTotal] = useState(0);
  const currentp = searchParams.get("page");
  const currentTab = searchParams.get("status");
  const [current, setCurrent] = useState(currentTab ? currentTab : "Yangi");
  const [currentpage, setCurrentPage] = useState(currentp ? currentp : 1);
  const [offers, setOffers] = useState<IOffer[]>([]);
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
      //   render: (_, item) => (
      //     <Link to={`/home/offers/${item.id}`}>{item.fullName}</Link>
      //   ),
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
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      align: "center",
      width: 400,
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
    </div>
  );
}

export default Offers;
