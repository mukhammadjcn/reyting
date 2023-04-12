import { LoginSVG } from "src/assets/icons";
import { Link } from "react-router-dom";
import "src/styles/login.scss";

const Login = () => {
  return (
    <div className="login_section">
      <div className="login_left">
        <div className="login_left_wrap">
          <Link to={"/login"} className="adminlogo">
            <img src={require("src/assets/images/logo.png")} alt="logo" />
            <span>ai.edu.uz</span>
          </Link>

          <div className="login_left_content">
            <p>
              AI.EDU.UZ tizimi uchun <span>boshqaruv</span> paneli
            </p>
            {/* <span>
              Kollejlar va texnikumlarda masofadan turib oʻqitish sirtqi va
              kechki taʼlim shakllarida oʻquv jarayonini masofadan turib
              oʻqitish tizimi.
            </span> */}
          </div>
        </div>
        {/* <video
          src={require("src/assets/images/video.mp4")}
          autoPlay
          loop
          playsInline
          muted
        ></video> */}

        <LoginSVG />
      </div>
      <div className="login-admin">
        <div className="login-admin__form">
          <h2>Tizimga kirish</h2>

          <div className="login-admin__oneID">
            <a href="https://ai.edu.uz/api/auth/oneId">
              <div className="login-admin__title">ONE ID orqali kirish</div>
            </a>
            <div className="pulse-css">
              <div className="first-circle"></div>
              <div className="second-circle"></div>
              <div className="third-circle"></div>
            </div>
          </div>

          <p>
            O‘zbekiston Respublikasi qonunchiligi asosida, shaxsingiz
            to‘g’risidagi ma’lumotlarni id.egov.uz tizimidan olinganini ma’lum
            qilamiz
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
