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
            <img
              src={require("src/assets/images/ytit.png")}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="slide">
            <img
              src={require("src/assets/images/smart.png")}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="slide">
            <img
              src={require("src/assets/images/mb.png")}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="slide">
            <img
              src={require("src/assets/images/aab.png")}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="slide">
            <img
              src={require("src/assets/images/aij (2).png")}
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <div className="slide-track slide-track-right">
          <div className="slide">
            <img
              src={require("src/assets/images/ucelll.png")}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="slide">
            <img
              src={require("src/assets/images/uztelecom.png")}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="slide">
            <img
              src={require("src/assets/images/uzinfocom.png")}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="slide">
            <img
              src={require("src/assets/images/tass.png")}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="slide">
            <img
              src={require("src/assets/images/zyplal.png")}
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <div className="slide-track">
          <div className="slide">
            <img
              src={require("src/assets/images/tatu.png")}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="slide">
            <img
              src={require("src/assets/images/amity.png")}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="slide">
            <img
              src={require("src/assets/images/yuridik.png")}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="slide">
            <img
              src={require("src/assets/images/zayed.png")}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="slide">
            <img
              src={require("src/assets/images/raqamli.png")}
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
