import { Modal } from "antd";
import {
  Tab1SVG,
  Tab2SVG,
  Tab3SVG,
  Tab4SVG,
  Tab5SVG,
  Tab6SVG,
  Tab7SVG,
} from "src/assets/icons";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { role } from "src/server/Host";

function Sidebar() {
  const url = useLocation();

  console.log(url);

  return (
    <div className="sidebar">
      <Link to={"/"} className="adminlogo">
        <img src={require("../../assets/images/logo.png")} alt="logo" />
        <span>Reyting.edu.uz</span>
      </Link>

      <ul className="sidebar__tabs">
        {[
          {
            key: 1,
            logo: <Tab1SVG />,
            title: "АКТ инфратузилмаси ҳолати",
          },
          {
            key: 2,
            logo: <Tab2SVG />,
            title: "ОТМ ахборот тизимлари, ахборот ресурслари ҳолати",
          },
          {
            key: 3,
            logo: <Tab3SVG />,
            title: "ОТМ даги АКТ соҳасидаги инсон капитали ҳолати",
          },
          {
            key: 4,
            logo: <Tab4SVG />,
            title: "Расмий веб-сайтнинг мавжудлиги ва ундан фойдалана олиш",
          },
          {
            key: 5,
            logo: <Tab5SVG />,
            title: "Ахборот хавфсизлигини таъминлашдаги меъёрий тадбирлар",
          },
          {
            key: 6,
            logo: <Tab6SVG />,
            title: "Ташкилий ишлар",
          },
          {
            key: 7,
            logo: <Tab7SVG />,
            title: "Қўллаб қувватлаш ва ёрдам",
          },
        ].map((tab) => (
          <div
            className={`sidebar__tab ${
              url.search.includes(`key=${tab.key}`) && "sidebar__tab-active"
            }`}
          >
            {tab.logo}
            <h2>{tab.title}</h2>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
