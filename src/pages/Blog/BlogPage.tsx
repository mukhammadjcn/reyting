import { Breadcrumb } from "antd";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import Footer from "src/components/home/Footer";
import Header from "src/components/home/Header";

function BlogPage() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  console.log();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("lang") ?? "RU");
  }, []);
  return (
    <>
      <Header />

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

        {location.pathname.replaceAll("/blog/", "") == "news1" && (
          <>
            <h2 className="section_title">{t("news.title")}</h2>

            <img src={require("src/assets/images/new2.png")} alt="" />

            <p>{t("news.p1")}</p>
            <p>{t("news.p2")}</p>
            <p>{t("news.p3")}</p>
          </>
        )}
        {location.pathname.replaceAll("/blog/", "") == "news2" && (
          <>
            <h2 className="section_title">{t("news2.title")}</h2>
            <img src={require("src/assets/images/new1.png")} alt="" />
            <p>{t("news2.p1")}</p>
            <p>{t("news2.p2")}</p>
            <p>{t("news2.p3")}</p>
            <p>{t("news2.p4")}</p>
          </>
        )}
        {location.pathname.replaceAll("/blog/", "") == "news3" && (
          <>
            <h2 className="section_title">{t("news3.title")}</h2>

            <img src={require("src/assets/images/new.png")} alt="" />

            <p>{t("news3.p1")}</p>
            <p>{t("news3.p2")}</p>
            <p>{t("news3.p3")}</p>
          </>
        )}
        {location.pathname.replaceAll("/blog/", "") == "news4" && (
          <>
            <h2 className="section_title">{t("news4.title")}</h2>

            <img src={require("src/assets/images/new4.png")} alt="" />

            <p>{t("news4.p1")}</p>
            <p>{t("news4.p2")}</p>
            <p>{t("news4.p3")}</p>
            <p>{t("news4.p4")}</p>
          </>
        )}
        {location.pathname.replaceAll("/blog/", "") == "news5" && (
          <>
            <h2 className="section_title">{t("news5.title")}</h2>

            <img src={require("src/assets/images/3news.jpg")} alt="" />

            <p>{t("news5.p1")}</p>
            <p>{t("news5.p2")}</p>
            <p>{t("news5.p3")}</p>
            <p>{t("news5.p4")}</p>
          </>
        )}
        {location.pathname.replaceAll("/blog/", "") == "news6" && (
          <>
            <h2 className="section_title">{t("news6.title")}</h2>

            <img src={require("src/assets/images/new6.png")} alt="" />

            <p>{t("news6.p1")}</p>
            <p>{t("news6.p2")}</p>
            <p>{t("news6.p3")}</p>
          </>
        )}

        <div className="flex">
          {/* <span>#новости</span> */}
          <span style={{ placeSelf: "end" }}>webroject.media</span>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BlogPage;
