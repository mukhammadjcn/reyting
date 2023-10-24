import React from "react";
import { Button, DatePicker, Segmented } from "antd";
import { useSearchParams } from "react-router-dom";
import { givePages, titles } from "src/static";
import { EditOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

function Tables() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  const quater = searchParams.get("quater") || 1;
  const year = searchParams.get("year") || new Date().getFullYear();
  const handleMakeParams = (key: any, value: any) => {
    if (value) {
      if (searchParams.has(key)) searchParams.set(key, value);
      else searchParams.append(key, value);
    } else searchParams.delete(key);
    setSearchParams(searchParams);
  };

  return (
    <div className="tables">
      <div className="flex">
        <h2 className="tables__title">{titles[`tab${String(page)}`]}</h2>
        <div className="flex">
          <DatePicker
            picker="year"
            style={{ marginRight: 16 }}
            onChange={(val) => handleMakeParams("year", val?.get("year"))}
            disabledDate={(val) => val?.get("year") < new Date().getFullYear()}
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

      <div className="tables__cards">
        {givePages[`page${page}`]?.cardType !== "big"
          ? givePages[`page${page}`]?.cards?.map((card: any) => (
              <div className="card" key={card?.title}>
                <div className="card__header">
                  <h2>{card?.title}</h2>
                  <Button icon={<EditOutlined />} />
                </div>
                <div className="card__body">
                  {card?.values?.map((section: any) => (
                    <div className="flex" key={section?.title}>
                      <h3>{section?.title}</h3>
                      <b>{section?.count} та</b>
                    </div>
                  ))}
                </div>
              </div>
            ))
          : givePages[`page${page}`]?.cards?.map((card: any) => (
              <div className="card card__big" key={card?.title}>
                <div className="card__header">
                  <h2>{card?.title}</h2>
                  <Button icon={<EditOutlined />} />
                </div>
                <div className="card__body">
                  {card?.values?.map((section: any) => (
                    <div className="flex" key={section?.title}>
                      <h3>{section?.title}</h3>
                      <b>{section?.count} та</b>
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
