import React, { useEffect } from "react";
import Footer from "src/components/home/Footer";
import Header from "src/components/home/Header";
import NoData from "src/components/animation/Lotties";
import { useTranslation } from "react-i18next";

function Depelopment() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("lang") ?? "RU");
  }, []);

  return (
    <>
      <Header />
      <div className="development">
        <div className="container">
          <h1>{t("development.title")}</h1>

          <h3>{t("development.info")}</h3>
          <ul>
            <li>{t("development.name1")}</li>
          </ul>
        </div>
        {/* <NoData title={t("development") ?? ""} type="dev" /> */}
      </div>
      <Footer />
    </>
  );
}

export default Depelopment;
