import { Breadcrumb, Skeleton } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import Footer from "src/components/home/Footer";
import Header from "src/components/home/Header";
import { GetNewsIdConfig } from "src/server/config/Urls";
import { INews } from "types/index";
import { LoadingOutlined } from "@ant-design/icons";

function BlogPage() {
  const location = useLocation();
  const { t } = useTranslation();
  const [news, setNews] = useState<any>();

  const GetNews = async () => {
    const { data } = await GetNewsIdConfig(
      location.pathname.replaceAll("/blog/", "")
    );
    setNews(data);
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
    return lang == "RU"
      ? news.textRU
      : lang == "EN"
      ? news.textEN
      : news.textUZ;
  };

  useEffect(() => {
    GetNews();
  }, []);

  return (
    <>
      <Header />

      {news ? (
        <div className="blogpage container">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to={"/"}>{t("nav.home")}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={"/blog"}>{t("nav.blog")}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{t("nav.news")}</Breadcrumb.Item>
          </Breadcrumb>

          <h2 className="section_title">{GiveTrans(news)}</h2>

          {/* <img
            alt=""
            className="blogpage__banner"
            src={news?.documentResponses[0]?.fileUrl}
          /> */}

          <div
            dangerouslySetInnerHTML={{
              __html: GiveTrans(news, "false"),
            }}
          />

          <p style={{ textAlign: "end", marginBottom: 36 }}>
            {moment(news?.createdDate).format("DD.MM.YYYY")}
          </p>
        </div>
      ) : (
        <div className="blogpage container">
          <div style={{ marginBottom: 24 }}>
            <Skeleton.Input />
          </div>
          <div style={{ marginBottom: 24 }} className="image">
            <Skeleton.Node active={true}>
              <LoadingOutlined style={{ fontSize: 28, color: "#bfbfbf" }} />
            </Skeleton.Node>
          </div>

          <div style={{ marginBottom: 24 }}>
            <Skeleton active />
          </div>
          <div style={{ marginBottom: 24 }}>
            <Skeleton active />
          </div>
          <div style={{ marginBottom: 24 }}>
            <Skeleton active />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default BlogPage;
