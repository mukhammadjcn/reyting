import { Link, useNavigate } from "react-router-dom";
import { Dropdown, MenuProps } from "antd";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import { ENLANGSVG, OpenNavSVG, RULANGSVG, UZLANGSVG } from "../svg";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [lang, setLang] = useState(localStorage.getItem("lang") ?? "RU");

  const Flags = ({ name }: { name: "UZ" | "RU" | "EN" }) => {
    if (name == "UZ") {
      return (
        <div className="language">
          <UZLANGSVG />
          <span>UZ</span>
          {/* <BottomSVG /> */}
        </div>
      );
    } else if (name == "RU") {
      return (
        <div className="language">
          <RULANGSVG />
          <span>RU</span>
          {/* <BottomSVG /> */}
        </div>
      );
    } else {
      return (
        <div className="language">
          <ENLANGSVG />
          <span>EN</span>
          {/* <BottomSVG /> */}
        </div>
      );
    }
  };
  const items: MenuProps["items"] = [
    {
      label: <Flags name="EN" />,
      key: "EN",
      onClick: () => {
        setLang("EN");
        i18n.changeLanguage("EN");
        localStorage.setItem("lang", "EN");
      },
    },
    {
      label: <Flags name="RU" />,
      key: "RU",
      onClick: () => {
        setLang("RU");
        i18n.changeLanguage("RU");
        localStorage.setItem("lang", "RU");
      },
    },
    {
      label: <Flags name="UZ" />,
      key: "UZ",
      onClick: () => {
        setLang("UZ");
        i18n.changeLanguage("UZ");
        localStorage.setItem("lang", "UZ");
      },
    },
  ];
  const navigateP = () => {
    setOpenNav(false);
    window.document.body.style.overflow = "initial";
  };

  return (
    // Header section
    <div className="header ">
      <div className="container flex">
        {/* Logo side */}
        <Link to={"/"} className="logo">
          <img src={require("src/assets/images/logo.png")} alt="Company logo" />
          <span>{t("ministr")}</span>
        </Link>

        {/* Navbar */}
        <nav className={openNav ? "header__nav header__mobile" : "header__nav"}>
          <Link to={"/about"} onClick={navigateP}>
            {t("nav.about")}
          </Link>
          <Link to={"/development?projects"} onClick={navigateP}>
            {t("nav.projects")}
          </Link>
          <Link to={"/development?education"} onClick={navigateP}>
            {t("nav.edu")}
          </Link>
          <Link
            to={"/blog"}
            onClick={() => {
              navigateP();
              navigate("/blog");
            }}
          >
            {t("nav.blog")}
          </Link>
          <a
            href={"#footer"}
            onClick={() => {
              navigateP();
              navigate("/");
            }}
          >
            {t("nav.contact")}
          </a>
        </nav>

        <div className="flex lang_mob">
          <Dropdown menu={{ items }} trigger={["click"]}>
            <div>
              {lang == "UZ" ? (
                <Flags name="UZ" />
              ) : lang == "RU" ? (
                <Flags name="RU" />
              ) : (
                <Flags name="EN" />
              )}
            </div>
          </Dropdown>

          <button
            className={openNav ? "close" : ""}
            onClick={() => {
              setOpenNav(!openNav);
              if (!openNav) {
                window.document.body.style.overflow = "hidden";
              } else {
                window.document.body.style.overflow = "initial";
              }
            }}
          >
            <OpenNavSVG />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
