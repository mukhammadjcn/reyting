import React from "react";
import Lottie from "react-lottie";
import { devAlert, noDataAlert, optionDone } from "src/assets/lottie";

function NoData({ title = "Arizalar mavjud emas", type = "nodata" }) {
  if (type == "success") {
    return (
      <div className="nodata-anim" style={{ width: "100%" }}>
        {/* <Lottie options={optionDone} height={120} width={120} /> */}
        <h2 style={{ textAlign: "center" }}>{title}</h2>
      </div>
    );
  }
  if (type == "dev") {
    return (
      <div className="nodata-anim" style={{ width: "100%" }}>
        <Lottie options={devAlert} height={500} width={500} />
        <h2 style={{ textAlign: "center", marginBottom: 72 }}>{title}</h2>
      </div>
    );
  }
  return (
    <div className="nodata-anim" style={{ width: "100%" }}>
      <Lottie options={noDataAlert} height={300} width={300} />
      <h2 style={{ textAlign: "center", marginTop: -72 }}>{title}</h2>
    </div>
  );
}

export default NoData;
