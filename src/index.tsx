import "./118n";
import App from "./App";
import "./styles/App.scss";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import ReactDOM from "react-dom/client";
import AntConfigProvider from "./provider/antConfig";

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekYear from "dayjs/plugin/weekYear";

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <AntConfigProvider>
    <App />
  </AntConfigProvider>
);
