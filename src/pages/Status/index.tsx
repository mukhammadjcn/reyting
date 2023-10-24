import { message } from "antd";
import React, { useEffect } from "react";
import { CatchError } from "src/utils/index";
import { ACCESS, ROLE, UNIVERSITY, setLocal } from "src/server/Host";
import { useNavigate, useSearchParams } from "react-router-dom";
import "src/styles/status.scss";

const Status: React.FC = () => {
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useSearchParams();

  const NavigateHome = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    const role = searchParam.get("role");
    const token = searchParam.get("token");
    const univer = searchParam.get("univer");

    if (token && role === "ROLE_OTMADMIN") {
      try {
        // SET ROLE
        setLocal(ROLE, role);

        // SET TOKEN
        setLocal(ACCESS, token);

        // Set univer name
        setLocal(UNIVERSITY, univer);

        window.location.href = "/home?page=1&tab=1_1";
      } catch (error) {
        navigate("/");
        CatchError(error);
      }
    } else {
      navigate("/");
      message.error("Sizning ma'lumotlaringiz bazadan topilmadi !");
    }
  };

  useEffect(() => {
    NavigateHome();
  }, []);

  return (
    <div className="ring">
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default Status;
