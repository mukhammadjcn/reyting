import { message } from "antd";
import React, { useEffect } from "react";
import { CatchError } from "src/utils/index";
import { ACCESS, ROLE, setLocal } from "src/server/Host";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SignInOneIDAdminConfig } from "src/server/config/Urls";
import "src/styles/status.scss";

const Status: React.FC = () => {
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useSearchParams();

  const NavigateHome = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    const code = searchParam.get("code");
    if (code) {
      try {
        const { data } = await SignInOneIDAdminConfig(code);

        // SET ROLE
        setLocal(ROLE, data?.object?.role);

        // SET TOKEN
        setLocal(ACCESS, data?.object?.jwtToken);

        window.location.href = "/home/addnews";
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
