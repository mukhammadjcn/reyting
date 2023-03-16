import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import {
  FacebookSVG,
  InstagramSvg,
  MailSVG,
  PhoneSVG,
  TelegramSVG,
} from "../svg";

function Footer() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="footer__nav">
          <div className="footer__info">
            <Link to={"/"} className="logo">
              <img src={require("../../assets/images/logo.png")} alt="" />
              <span>{t("ministr")}</span>
            </Link>
            <div className="flex">
              <a
                href="https://www.instagram.com/aicouncil_uz/"
                target={"_blank"}
                className="social"
              >
                <InstagramSvg />
              </a>
              <a
                href="https://t.me/aicouncil_uz"
                target={"_blank"}
                className="social"
              >
                <TelegramSVG />
              </a>
              <a
                href="https://www.facebook.com/aicouncil.uz/"
                target={"_blank"}
                className="social"
              >
                <FacebookSVG />
              </a>
              <a
                href="mailto:aicouncil@edu.uz"
                target={"_blank"}
                className="social"
              >
                <MailSVG />
              </a>
            </div>
          </div>
          <div className="footer__contact">
            <h4>{t("nav.about")}</h4>
            <a
              href="#member"
              className="contact"
              onClick={() => navigate("/about")}
            >
              <span>{t("footer.about.work")}</span>
            </a>
            <a
              href="#group"
              className="contact"
              onClick={() => navigate("/about")}
            >
              <span>{t("footer.about.group")}</span>
            </a>
            <a
              href="#azo"
              className="contact"
              onClick={() => navigate("/about")}
            >
              <span>{t("footer.about.partner")}</span>
            </a>
            <a
              href="#doc"
              className="contact"
              onClick={() => navigate("/about")}
            >
              <span>{t("footer.about.documents")}</span>
            </a>
          </div>

          <div className="footer__contact">
            <h4>{t("nav.projects")}</h4>
            <Link to={"/development"} className="contact">
              <span>{t("footer.project.catalog")}</span>
            </Link>
            <Link to={"/development"} className="contact">
              <span>{t("footer.project.list")}</span>
            </Link>
          </div>

          <div className="footer__contact">
            <h4>{t("nav.blog")}</h4>
            <Link to={"/blog"} className="contact">
              <span>{t("footer.blog.news")}</span>
            </Link>
            <Link to={"/blog"} className="contact">
              <span>{t("footer.blog.state")}</span>
            </Link>
            <Link to={"/blog"} className="contact">
              <span>{t("footer.blog.anons")}</span>
            </Link>
          </div>
        </div>
        <p>
          <a
            href="https://t.me/elektron_talim_markazi"
            target={"_blank"}
            style={{ color: "white" }}
          >
            {t("home.made")}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
