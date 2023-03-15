import React from "react";
import { useTranslation } from "react-i18next";

function Partners() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="slider">
        <h2 className="section_title ">{t("home.partners")}</h2>
        <div className="slide-track">
          <div className="slide">
            <img src={require("src/assets/images/ytit.png")} alt="" />
          </div>
          <div className="slide">
            <img src={require("src/assets/images/smart.png")} alt="" />
          </div>
          <div className="slide">
            <img src={require("src/assets/images/mb.png")} alt="" />
          </div>
          <div className="slide">
            <img src={require("src/assets/images/aab.png")} alt="" />
          </div>
          <div className="slide">
            <img src={require("src/assets/images/aij (2).png")} alt="" />
          </div>
        </div>
        <div className="slide-track slide-track-right">
          <div className="slide">
            <img src={require("src/assets/images/ucelll.png")} alt="" />
          </div>
          <div className="slide">
            <img src={require("src/assets/images/uztelecom.png")} alt="" />
          </div>
          <div className="slide">
            <img src={require("src/assets/images/uzinfocom.png")} alt="" />
          </div>
          <div className="slide">
            <img src={require("src/assets/images/tass.png")} alt="" />
          </div>
          <div className="slide">
            <img src={require("src/assets/images/zyplal.png")} alt="" />
          </div>
        </div>
        <div className="slide-track">
          <div className="slide">
            <img src={require("src/assets/images/tatu.png")} alt="" />
          </div>
          <div className="slide">
            <img src={require("src/assets/images/amity.png")} alt="" />
          </div>
          <div className="slide">
            <img src={require("src/assets/images/yuridik.png")} alt="" />
          </div>
          <div className="slide">
            <img src={require("src/assets/images/zayed.png")} alt="" />
          </div>
          <div className="slide">
            <img src={require("src/assets/images/raqamli.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
