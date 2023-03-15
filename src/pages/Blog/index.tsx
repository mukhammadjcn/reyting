import { Breadcrumb } from "antd";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Footer from "src/components/home/Footer";
import Header from "src/components/home/Header";
import { CalendarSvg } from "src/components/svg";

function BLog() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
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
          <Link
            to="/blog/news1"
            className="blog__new"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="left">
              <img src={require("src/assets/images/new2.png")} alt="" />
              <div className="flex">
                <CalendarSvg />
                <span>27.02.2023</span>
              </div>
              <div className="hashteg">#{t("newsTitle")}</div>
            </div>
            <div className="right">
              <h2>{t("home.news1")}</h2>
              <p>{t("home.news1_info")}</p>
              {/* <a href="#">mininnavation.uz</a> */}
            </div>
          </Link>
          <Link
            to="/blog/news2"
            className="blog__new"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="left">
              <img src={require("src/assets/images/new1.png")} alt="" />
              <div className="flex">
                <CalendarSvg />
                <span>24.02.2023</span>
              </div>
              <div className="hashteg">#{t("newsTitle")}</div>
            </div>
            <div className="right">
              <h2>{t("news2.title")}</h2>
              <p>{t("news2.p1")}</p>
            </div>
          </Link>
          <Link
            to="/blog/news3"
            className="blog__new"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="left">
              <img src={require("src/assets/images/new.png")} alt="" />
              <div className="flex">
                <CalendarSvg />
                <span>16.02.2023</span>
              </div>
              <div className="hashteg">#{t("newsTitle")}</div>
            </div>
            <div className="right">
              <h2>{t("news3.title")}</h2>
              <p>{t("news3.p1")}</p>
            </div>
          </Link>
          <Link
            to="/blog/news4"
            className="blog__new"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="left">
              <img src={require("src/assets/images/new4.png")} alt="" />
              <div className="flex">
                <CalendarSvg />
                <span>18.01.2023</span>
              </div>
              <div className="hashteg">#{t("newsTitle")}</div>
            </div>
            <div className="right">
              <h2>{t("news4.title")}</h2>
              <p>{t("news4.p1")}</p>
            </div>
          </Link>
          <Link
            to="/blog/news5"
            className="blog__new"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="left">
              <img src={require("src/assets/images/new5.png")} alt="" />
              <div className="flex">
                <CalendarSvg />
                <span>20.10.2022</span>
              </div>
              <div className="hashteg">#{t("newsTitle")}</div>
            </div>
            <div className="right">
              <h2>{t("news5.title")}</h2>
              <p>{t("news5.p1")}</p>
            </div>
          </Link>
          <Link
            to="/blog/news6"
            className="blog__new"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="left">
              <img src={require("src/assets/images/new6.png")} alt="" />
              <div className="flex">
                <CalendarSvg />
                <span>18.10.2022</span>
              </div>
              <div className="hashteg">#{t("newsTitle")}</div>
            </div>
            <div className="right">
              <h2>{t("news6.title")}</h2>
              <p>{t("news6.p1")}</p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BLog;
