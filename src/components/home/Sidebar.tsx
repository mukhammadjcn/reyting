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
import { Link, useSearchParams } from "react-router-dom";

function Sidebar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 0;

  const sidebarUrls = [
    {
      key: 0,
      logo: <Tab4SVG />,
      title: "OTM pasporti",
      url: "/home/info",
    },
    {
      key: 1,
      logo: <Tab1SVG />,
      title: "AKT infratuzilmasi holati",
    },
    {
      key: 2,
      logo: <Tab2SVG />,
      title: "OTM axborot tizimlari, axborot resurslari holati",
    },
    {
      key: 3,
      logo: <Tab3SVG />,
      title: "OTM dagi AKT sohasidagi inson kapitali holati",
    },
    // {
    //   key: 4,
    //   logo: <Tab4SVG />,
    //   title: "Расмий веб-сайтнинг мавжудлиги ва ундан фойдалана олиш",
    // },
    {
      key: 5,
      logo: <Tab5SVG />,
      title: "Axborot xavfsizligini ta'minlashda meyoriy tadbirlar",
    },
    {
      key: 6,
      logo: <Tab6SVG />,
      title: "Tashkiliy ishlar",
    },
    // {
    //   key: 7,
    //   logo: <Tab7SVG />,
    //   title: "Қўллаб қувватлаш ва ёрдам",
    // },
  ];

  return (
    <div className="sidebar">
      <Link to={"/"} className="adminlogo">
        <img src={require("../../assets/images/logo.png")} alt="logo" />
        <span>Akt.edu.uz</span>
      </Link>

      <ul className="sidebar__tabs">
        {sidebarUrls.map((tab) => (
          <Link
            to={tab?.url ? tab?.url : `/home?page=${tab.key}&quater=1`}
            key={tab.key}
            className={`sidebar__tab sidebar__${tab.key} ${
              page == tab.key
                ? `sidebar__tab-active sidebar__tab-active-${tab.key}`
                : ""
            }`}
          >
            {tab.logo}
            <h2>{tab.title}</h2>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
