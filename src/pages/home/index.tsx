import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, Modal } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FileSyncOutlined,
  FileSearchOutlined,
  FileProtectOutlined,
  SettingOutlined,
  FileExcelOutlined,
  ContainerOutlined,
  FileTextOutlined,
  LogoutOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import "src/styles/home.scss";
import { role } from "src/server/Host";

const App = () => {
  const url = useLocation();
  const navigate = useNavigate();
  const [data, SetData] = useState<any>();
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
          window.location.href = "/";
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
        <Link to={"/"} className="logo">
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
          <p></p>
        </Header>
        <Content className="home__content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
