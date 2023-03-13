import App from "./App";
import { ConfigProvider } from "antd";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#444BD3",
      },
    }}
  >
    <App />
  </ConfigProvider>
);
