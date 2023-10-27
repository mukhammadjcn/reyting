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
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

function Sidebar() {
  const url = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const sidebarUrls = [
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
    // {
    //   key: 4,
    //   logo: <Tab4SVG />,
    //   title: "Расмий веб-сайтнинг мавжудлиги ва ундан фойдалана олиш",
    // },
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
        <span>Reyting.edu.uz</span>
      </Link>

      <ul className="sidebar__tabs">
        {sidebarUrls.map((tab) => (
          <Link
            to={tab.key < 7 ? `/home?page=${tab.key}&quater=1` : "/gone"}
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
