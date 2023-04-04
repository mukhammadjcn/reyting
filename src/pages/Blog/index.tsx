import { Breadcrumb, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";
import Footer from "src/components/home/Footer";
import Header from "src/components/home/Header";
import { CalendarSvg } from "src/components/svg";
import { GetNewsConfig } from "src/server/config/Urls";
import { INews } from "types/index";

function BLog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t, i18n } = useTranslation();
  const [total, setTotal] = useState(0);
  const current = searchParams.get("page");
  const [currentpage, setCurrentPage] = useState(current ? current : 1);
  const [news, setNews] = useState<INews[]>([]);

  const handleMakeParams = (key: any, value: any) => {
    if (value) {
      if (searchParams.has(key)) searchParams.set(key, value);
      else searchParams.append(key, value);
    } else searchParams.delete(key);
    setSearchParams(searchParams);
  };
  const setPage = (val: any) => {
    setCurrentPage(val);
    handleMakeParams("page", val);
    GetNews();
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

  const GetNews = async () => {
    const { data } = await GetNewsConfig(urlMaker());
    setTotal(data?.totalElements);
    setNews(data.content);
  };
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
                <p>{GiveTrans(news, "anons")}</p>
              </div>
            </Link>
          ))}
        </div>

        <div
          className="flex"
          style={{ justifyContent: "center", marginBottom: 24 }}
        >
          <Pagination
            total={total}
            current={+currentpage}
            onChange={(val) => setPage(val)}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BLog;
