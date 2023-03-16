import { Breadcrumb } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Footer from "src/components/home/Footer";
import Header from "src/components/home/Header";
import { CalendarSvg } from "src/components/svg";
import { GetNewsConfig } from "src/server/config/Urls";
import { INews } from "types/index";

function BLog() {
  const { t, i18n } = useTranslation();
  const [news, setNews] = useState<INews[]>([]);

  const GetNews = async () => {
    const { data } = await GetNewsConfig();
    setNews(data.content);
  };
  const GiveTrans = (news: INews, title = true) => {
    const lang = localStorage.getItem("lang") ?? "RU";
    if (title) {
      return lang == "RU"
        ? news.titleRU
        : lang == "EN"
        ? news.titleEN
        : news.titleUZ;
    }
    return lang == "RU"
      ? `${news.textRU.split(" ").slice(0, 42).join(" ")} ...`
      : lang == "EN"
      ? `${news.textEN.split(" ").slice(0, 42).join(" ")} ...`
      : `${news.textUZ.split(" ").slice(0, 42).join(" ")} ...`;
  };

  useEffect(() => {
    GetNews();
    i18n.changeLanguage(localStorage.getItem("lang") ?? "RU");
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
          {news.map((news) => (
            <Link
              key={news.id}
              className="blog__new"
              to={`/blog/${news.id}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="left">
                <img src={news.documentResponses[0]?.fileUrl} alt="" />
                <div className="flex">
                  <CalendarSvg />
                  <span>{new Date(news.createdDate).toLocaleDateString()}</span>
                </div>
                <div className="hashteg">#{t("newsTitle")}</div>
              </div>
              <div className="right">
                <h2>{GiveTrans(news)}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: GiveTrans(news, false),
                  }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BLog;
