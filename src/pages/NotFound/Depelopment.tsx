import React, { useEffect } from "react";
import Footer from "src/components/home/Footer";
import Header from "src/components/home/Header";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import NoData from "src/components/animation/Lotties";

function Depelopment() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  console.log(location.search);

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("lang") ?? "RU");
  }, []);

  return (
    <>
      <Header />
      <div className="development">
        {location.search.includes("projects") ? (
          <div className="container">
            <h1>{t("development.title")}</h1>
            <h3>{t("development.info")}</h3>
            <ul>
              <li>{t("development.name1")}</li>
            </ul>
          </div>
        ) : location.search.includes("education") ? (
          <div className="container">
            <h1>{t("education.title")}</h1>
            <h3>{t("education.info")}</h3>
            <ul>
              <li>{t("education.name1")}</li>
            </ul>
          </div>
        ) : (
          <NoData title={t("") ?? ""} type="dev" />
        )}
      </div>
      <Footer />
    </>
  );
}

export default Depelopment;
