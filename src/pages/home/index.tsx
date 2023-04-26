import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Dropdown, Layout, Menu, MenuProps, Modal } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FileProtectOutlined,
  FileTextOutlined,
  LogoutOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import "src/styles/home.scss";
import { role } from "src/server/Host";
import { ENLANGSVG, RULANGSVG, UZLANGSVG } from "src/components/svg";
import { useTranslation } from "react-i18next";

const App = () => {
  const url = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  const SidebarMenu = [
    // {
    //   key: "addnews",
    //   icon: <ContainerOutlined />,
    //   label: "Yangiliklar qo'shish",
    //   onClick: () => navigate("/home/addnews"),
    //   // children: [
    //   //   {
    //   //     key: "created",
    //   //     icon: <FileSearchOutlined />,
    //   //     label: "Yangi arizalar",
    //   //     onClick: () => navigate("/home/created"),
    //   //   },
    //   //   {
    //   //     key: "applied",
    //   //     icon: <FileSyncOutlined />,
    //   //     label: "Qabul qilingan arizalar",
    //   //     onClick: () => navigate("/home/applied"),
    //   //   },
    //   //   {
    //   //     key: "rejected",
    //   //     icon: <FileExcelOutlined />,
    //   //     label: "Rad etilgan arizalar",
    //   //     onClick: () => navigate("/home/rejected"),
    //   //   },
    //   //   {
    //   //     key: "confirmed",
    //   //     icon: <FileProtectOutlined />,
    //   //     label: "Shartnomalar",
    //   //     onClick: () => navigate("/home/confirmed"),
    //   //   },
    //   //   {
    //   //     key: "askingdelete",
    //   //     icon: <DeleteOutlined />,
    //   //     label: "Bekor qilishga so'rov",
    //   //     onClick: () => navigate("/home/askingdelete"),
    //   //   },
    //   // ],
    // },
    {
      key: "news",
      icon: <FileTextOutlined />,
      label: "Yangiliklar",
      onClick: () => navigate("/home/news"),
    },
    {
      key: "members",
      icon: <SearchOutlined />,
      label: "A'zolar",
      onClick: () => navigate("/home/members"),
    },
    {
      key: "offers",
      label: "Murojatlar",
      icon: <FileProtectOutlined />,
      onClick: () => navigate("/home/offers?status=Yangi"),
    },
  ];
  const LogoutMenu = [
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Tizimdan chiqish",
      onClick: () => Logout(),
    },
  ];
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

  const redirect = () => {
    if (url.pathname === "/home" || url.pathname === "/home/") {
      window.location.href = "/home/news";
    }
  };

  const Logout = async () => {
    role !== "ministry" &&
      Modal.confirm({
        centered: true,
        title: "Tizimdan chiqmoqchimisz ?",
        okText: "Chiqish",
        cancelText: "Bekor qilish",
        onOk() {
          localStorage.clear();
          window.location.href = "/login";
        },
      });
  };

  useEffect(() => {
    redirect();
  }, []);

  return (
    <Layout className="home">
      <Sider
        width={256}
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="home__sidebar"
      >
        <Link to={"/"} className="adminlogo">
          <img src={require("../../assets/images/logo.png")} alt="logo" />
          {!collapsed && <span>AI.edu.uz</span>}
        </Link>
        <Menu
          theme="dark"
          mode="inline"
          items={SidebarMenu}
          defaultOpenKeys={["applications"]}
          defaultSelectedKeys={[url.pathname.split("/")[2]]}
        />
        <Menu
          theme="dark"
          mode="inline"
          selectable={false}
          items={LogoutMenu}
          className="logout_menu"
        />
      </Sider>
      <Layout className="home__body">
        <Header className="home__header">
          {/* Collapse button */}
          {collapsed ? (
            <MenuUnfoldOutlined
              className="trigger"
              style={{ fontSize: 20 }}
              onClick={() => setCollapsed(!collapsed)}
            />
          ) : (
            <MenuFoldOutlined
              className="trigger"
              style={{ fontSize: 20 }}
              onClick={() => setCollapsed(!collapsed)}
            />
          )}

          <h2>Ai.edu.uz</h2>
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
        </Header>
        <Content className="home__content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
