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
    {
      key: "applications",
      icon: <ContainerOutlined />,
      label: "Arizalar",
      // children: [
      //   {
      //     key: "created",
      //     icon: <FileSearchOutlined />,
      //     label: "Yangi arizalar",
      //     onClick: () => navigate("/home/created"),
      //   },
      //   {
      //     key: "applied",
      //     icon: <FileSyncOutlined />,
      //     label: "Qabul qilingan arizalar",
      //     onClick: () => navigate("/home/applied"),
      //   },
      //   {
      //     key: "rejected",
      //     icon: <FileExcelOutlined />,
      //     label: "Rad etilgan arizalar",
      //     onClick: () => navigate("/home/rejected"),
      //   },
      //   {
      //     key: "confirmed",
      //     icon: <FileProtectOutlined />,
      //     label: "Shartnomalar",
      //     onClick: () => navigate("/home/confirmed"),
      //   },
      //   {
      //     key: "askingdelete",
      //     icon: <DeleteOutlined />,
      //     label: "Bekor qilishga so'rov",
      //     onClick: () => navigate("/home/askingdelete"),
      //   },
      // ],
    },
    // {
    //   key: "directions",
    //   icon: <FileTextOutlined />,
    //   label: "Yo'nalishlar",
    //   // onClick: () => navigate("/home/directions"),
    // },
    // {
    //   key: "search",
    //   icon: <SearchOutlined />,
    //   label: "Qidiruv",
    //   // onClick: () => navigate("/home/search"),
    // },
    // {
    //   key: "settings",
    //   icon: <SettingOutlined />,
    //   label: "Sozlamalar",
    //   // onClick: () => navigate("/home/settings"),
    // },
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
      window.location.href = "/home/addnews";
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
              height={24}
              color="#ffffff"
              style={{ background: "white" }}
              className="trigger"
              onClick={() => setCollapsed(!collapsed)}
            />
          ) : (
            <MenuFoldOutlined
              className="trigger"
              onClick={() => setCollapsed(!collapsed)}
            />
          )}

          <h2>{data?.name}</h2>
          <h4 onClick={Logout} style={{ cursor: "pointer" }}>
            {data?.get_admin?.first_name} {data?.get_admin?.last_name}
          </h4>
        </Header>
        <Content className="home__content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
