import React, { useEffect, useState } from "react";
import { Button, DatePicker, Segmented } from "antd";
import { useSearchParams } from "react-router-dom";
import { titles } from "src/static";
import { EditOutlined } from "@ant-design/icons";
import { GetPage1, GetPage2, GetPage3, GetPage6 } from "./apis";

function Tables() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const quater = searchParams.get("quater") || 1;
  const year = searchParams.get("year") || new Date().getFullYear();
  const [data, setData] = useState<any>();
  const handleMakeParams = (key: any, value: any) => {
    if (value) {
      if (searchParams.has(key)) searchParams.set(key, value);
      else searchParams.append(key, value);
    } else searchParams.delete(key);
    setSearchParams(searchParams);
  };

  const GetData = async () => {
    +page === 1 && setData(await GetPage1());
    +page === 2 && setData(await GetPage2());
    +page === 3 && setData(await GetPage3());
    +page === 6 && setData(await GetPage6());
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

      <div className="tables__cards">
        {data?.cardType !== "big"
          ? data?.cards?.map((card: any) => (
              <div className="card" key={card?.title}>
                <div className="card__header">
                  <h2>{card?.title}</h2>
                  <Button icon={<EditOutlined />} />
                </div>
                <div className="card__body">
                  {card?.values?.map((section: any) => (
                    <div className="flex" key={section?.title}>
                      <h3>{section?.title}</h3>
                      <b>
                        {section?.count}{" "}
                        {typeof section?.count === "number" && "та"}
                      </b>
                    </div>
                  ))}
                </div>
              </div>
            ))
          : data?.cards?.map((card: any) => (
              <div className="card card__big" key={card?.title}>
                <div className="card__header">
                  <h2>{card?.title}</h2>
                  <Button icon={<EditOutlined />} />
                </div>
                <div className="card__body">
                  {card?.values?.map((section: any) => (
                    <div className="flex" key={section?.title}>
                      <h3>{section?.title}</h3>
                      <b>{section?.count}</b>
                    </div>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Tables;
