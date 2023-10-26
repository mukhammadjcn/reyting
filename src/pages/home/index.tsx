import { Button, Modal } from "antd";
import Sidebar from "src/components/home/Sidebar";
import { UserOutlined } from "@ant-design/icons";
import "src/styles/home.scss";
import Tables from "src/pages/Tables";

const App = () => {
  const Logout = async () => {
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

  return (
    <div className="home">
      <Sidebar />

      <div className="home__body">
        <div className="home__header">
          <Button type="primary" onClick={Logout} icon={<UserOutlined />}>
            Profile
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
