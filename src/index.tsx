import "./118n";
import App from "./App";
import "./styles/App.scss";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import ReactDOM from "react-dom/client";
import AntConfigProvider from "./provider/antConfig";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <AntConfigProvider>
    <App />
  </AntConfigProvider>
);
