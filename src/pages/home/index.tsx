import { Button, Modal } from "antd";
import Sidebar from "src/components/home/Sidebar";
import { UserOutlined } from "@ant-design/icons";
import "src/styles/home.scss";
import Tables from "src/pages/Tables";

const App = () => {
  const fullName = localStorage.getItem("fullname")?.split("_").join(" ");
  const univerName = localStorage.getItem("univer")?.split("_").join(" ");
  const Logout = async () => {
    Modal.confirm({
      centered: true,
      title: "Тизимдан чиқмоқчимисз ?",
      okText: "Чиқиш",
      cancelText: "Бекор қилиш",
      onOk() {
        localStorage.clear();
        window.location.href = "/";
      },
    });
  };

  return (
    <div className="home">
      <Sidebar />

      <div className="home__body">
        <div className="home__header">
          <h2>{univerName}</h2>
          <Button type="primary" onClick={Logout} icon={<UserOutlined />}>
            {fullName}
          </Button>
        </div>
        <div className="home__content">
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default App;
