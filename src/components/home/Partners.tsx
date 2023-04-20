import React from "react";
import { useTranslation } from "react-i18next";

function Partners() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="slider">
        <h2 className="section_title ">{t("home.partners")}</h2>
        <div className="slide-track">
          <a href="https://www.ngmk.uz/ru" target="_blank" className="slide">
            <img src={require("src/assets/images/ytit.png")} alt="" />
          </a>
          <a href="https://www.agmk.uz/oz" className="slide" target="_blank">
            <img src={require("src/assets/images/smart.png")} alt="" />
          </a>
          <a href="https://cbu.uz/uz/" className="slide" target="_blank">
            <img src={require("src/assets/images/mb.png")} alt="" />
          </a>
          <a href="https://aab.uz/uz/" className="slide" target="_blank">
            <img src={require("src/assets/images/aab.png")} alt="" />
          </a>
          <a href="https://ai-journey.ru/" className="slide" target="_blank">
            <img src={require("src/assets/images/aij (2).png")} alt="" />
          </a>
        </div>
        <div className="slide-track slide-track-right">
          <a
            href="https://ucell.uz/uz/subscribers"
            className="slide"
            target="_blank"
          >
            <img src={require("src/assets/images/ucelll.png")} alt="" />
          </a>
          <a href="https://uztelecom.uz/" className="slide" target="_blank">
            <img src={require("src/assets/images/uztelecom.png")} alt="" />
          </a>
          <a href="https://uzinfocom.uz/uz" className="slide" target="_blank">
            <img src={require("src/assets/images/uzinfocom.png")} alt="" />
          </a>
          <a href="https://tassvision.ai/" className="slide" target="_blank">
            <img src={require("src/assets/images/tass.png")} alt="" />
          </a>
          <a href="https://zypl.ai/" className="slide" target="_blank">
            <img src={require("src/assets/images/zyplal.png")} alt="" />
          </a>
        </div>
        <div className="slide-track">
          <a href="https://tuit.uz/" className="slide" target="_blank">
            <img src={require("src/assets/images/tatu.png")} alt="" />
          </a>
          <a href="https://amity.uz/" className="slide" target="_blank">
            <img src={require("src/assets/images/amity.png")} alt="" />
          </a>
          <a href="https://tsul.uz/uz" className="slide" target="_blank">
            <img src={require("src/assets/images/yuridik.png")} alt="" />
          </a>
          <a
            href="https://www.zu.ac.ae/main/en/"
            className="slide"
            target="_blank"
          >
            <img src={require("src/assets/images/zayed.png")} alt="" />
          </a>
          <a href="https://airi.uz/en" className="slide" target="_blank">
            <img src={require("src/assets/images/raqamli.png")} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Partners;
