import { Breadcrumb, Skeleton } from "antd";
import { INews } from "types/index";
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MainContext } from "src/hooks/index";
import Footer from "src/components/home/Footer";
import Header from "src/components/home/Header";
import { CalendarSvg } from "src/components/svg";
import PaginationFilter from "src/components/home/PaginationFilter";
import { LoadingOutlined } from "@ant-design/icons";

function BLog() {
  const { t } = useTranslation();
  const { news, total } = useContext(MainContext);
  const [loading, setLoading] = useState(true);

  const GiveTrans = (news: INews, title = "title") => {
    const lang = localStorage.getItem("lang") ?? "RU";
    if (title == "title") {
      return lang == "RU"
        ? news.titleRU
        : lang == "EN"
        ? news.titleEN
        : news.titleUZ;
    } else if (title == "anons") {
      return lang == "RU"
        ? news.anonsRU
        : lang == "EN"
        ? news.anonsEN
        : news.anonsUZ;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Header />
      <div className="blog container">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={"/"}>{t("nav.home")}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{t("nav.blog")}</Breadcrumb.Item>
        </Breadcrumb>

        <h2 className="section_title">{t("home.blog")}</h2>

        <div className="blog__news">
          {news?.map((news) => (
            <Link
              key={news.id}
              className="blog__new"
              to={`/blog/${news.id}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className={`left ${!loading ? "disableload" : ""}`}>
                <img src={news.documentResponses[0]?.fileUrl} alt="" />
                <div className="flex">
                  <CalendarSvg />
                  <span>{new Date(news.createdDate).toLocaleDateString()}</span>
                </div>
                <div className="hashteg">#{t("newsTitle")}</div>

                <div className="wrap">
                  <LoadingOutlined />
                </div>
              </div>
              <div className="right">
                <h2>{GiveTrans(news)}</h2>
                <p>{GiveTrans(news, "anons")}</p>
              </div>
            </Link>
          ))}
        </div>

        <div
          className="flex"
          style={{ justifyContent: "center", marginBottom: 24 }}
        >
          <PaginationFilter total={total} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BLog;
