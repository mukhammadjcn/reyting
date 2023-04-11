import "./118n";
import App from "./App";
import "./styles/App.scss";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { ConfigProvider } from "antd";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>
);
