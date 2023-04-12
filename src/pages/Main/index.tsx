import { Alert, Button, Carousel, Checkbox, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import Header from "src/components/home/Header";
import Footer from "src/components/home/Footer";
import { RightSVG } from "src/components/svg";
import HomeNews from "src/components/home/News";
import Partners from "src/components/home/Partners";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { CatchError } from "src/utils/index";
import {
  CreateOfferConfig,
  GetNewsConfig,
  GetPublicNewsConfig,
} from "src/server/config/Urls";
import { INews } from "types/index";

const Home: React.FC = () => {
  const [form] = Form.useForm();
  const [work, setWork] = useState(2);
  const { t, i18n } = useTranslation();
  const [news, setNews] = useState<INews[]>([]);
  const [publicNews, setPublicNews] = useState<INews[]>([]);

  const submitOffer = async (val: any) => {
    try {
      const { data } = await CreateOfferConfig(val);
      message.success(data?.message);
      form.resetFields();
    } catch (error) {
      CatchError(error);
    }
  };

  const GetNews = async () => {
    const { data } = await GetNewsConfig();
    setNews(data.content);
  };
  const GetPublicNews = async () => {
    const { data } = await GetPublicNewsConfig();
    setPublicNews(data.content);
  };
  const GiveTrans = (news: INews, title = "title") => {
    const lang = localStorage.getItem("lang") ?? "RU";
    if (title == "title") {
      return lang == "RU"
        ? news.titleRU
        : lang == "EN"
        ? news.titleEN
        : news.titleUZ;
    } else if (title == "anons") {
      return lang == "RU"
        ? news.anonsRU
        : lang == "EN"
        ? news.anonsEN
        : news.anonsUZ;
    }
  };

  useEffect(() => {
    GetNews();
    GetPublicNews();
    i18n.changeLanguage(localStorage.getItem("lang") ?? "RU");
  }, []);

  return (
    <>
      <Alert
        banner
        type="info"
        message={
          <Marquee pauseOnHover gradient={false}>
            {t("test")}
          </Marquee>
        }
      />
      <Header />
      <div className="home">
        <div className="container">
          <h1 className="title">{t("home.title")}</h1>

          <Carousel
            autoplay
            autoplaySpeed={3000}
            dotPosition="bottom"
            className="topcaraousel"
          >
            {publicNews.map((news) => (
              <div className="home__card" key={news.id}>
                <div>
                  <h2>{GiveTrans(news)}</h2>
                  <p>{GiveTrans(news, "anons")}</p>
                  <Link to={`/blog/${news.id}`}>
                    <button>
                      <span>{t("home.more")}</span>
                      <RightSVG />
                    </button>
                  </Link>
                </div>
                <img src={news?.documentResponses[0]?.fileUrl} alt="" />
              </div>
            ))}
          </Carousel>
          <div className="home__mission">
            <h2 className="section_title">{t("home.mission")}</h2>
            <p>{t("home.mission_title")}</p>
          </div>
        </div>

        <div className="home__directions">
          <div className="container">
            <h2>{t("home.work_title").toLocaleUpperCase()}</h2>
            <div className="flex">
              <div className="home__directions-left">
                <div
                  onClick={() => setWork(2)}
                  style={
                    work == 2
                      ? {
                          borderColor: "#FF9500",
                          filter:
                            "drop-shadow(0px 13px 43px rgba(0, 0, 0, 0.12))",
                        }
                      : {}
                  }
                >
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="28"
                      cy="28"
                      r="28"
                      fill="#FF9500"
                      fillOpacity="0.15"
                    />
                    <path
                      d="M36.3041 22.1499L36.7941 21.0899L37.8541 20.5999C38.2441 20.4199 38.2441 19.8699 37.8541 19.6899L36.7941 19.1999L36.3041 18.1499C36.1241 17.7599 35.5741 17.7599 35.3941 18.1499L34.9041 19.2099L33.8541 19.6999C33.4641 19.8799 33.4641 20.4299 33.8541 20.6099L34.9141 21.0999L35.4041 22.1499C35.5741 22.5399 36.1341 22.5399 36.3041 22.1499Z"
                      fill="#FF9500"
                    />
                    <path
                      d="M24.8041 22.1499L25.2941 21.0899L26.3541 20.5999C26.7441 20.4199 26.7441 19.8699 26.3541 19.6899L25.2941 19.2099L24.8041 18.1499C24.6341 17.7599 24.0741 17.7599 23.9041 18.1499L23.4141 19.2099L22.3541 19.6999C21.9641 19.8799 21.9641 20.4299 22.3541 20.6099L23.4141 21.0999L23.9041 22.1499C24.0741 22.5399 24.6341 22.5399 24.8041 22.1499Z"
                      fill="#FF9500"
                    />
                    <path
                      d="M35.4041 29.6499L34.9141 30.7099L33.8541 31.1999C33.4641 31.3799 33.4641 31.9299 33.8541 32.1099L34.9141 32.5999L35.4041 33.6599C35.5841 34.0499 36.1341 34.0499 36.3141 33.6599L36.8041 32.5999L37.8541 32.0999C38.2441 31.9199 38.2441 31.3699 37.8541 31.1899L36.7941 30.6999L36.3041 29.6399C36.1341 29.2599 35.5741 29.2599 35.4041 29.6499Z"
                      fill="#FF9500"
                    />
                    <path
                      d="M33.5641 25.2699L30.7341 22.4399C30.3441 22.0499 29.7141 22.0499 29.3241 22.4399L18.1441 33.6099C17.7541 33.9999 17.7541 34.6299 18.1441 35.0199L20.9741 37.8499C21.3641 38.2399 21.9941 38.2399 22.3841 37.8499L33.5541 26.6799C33.9541 26.2999 33.9541 25.6599 33.5641 25.2699ZM30.0641 27.3599L28.6541 25.9499L30.0341 24.5699L31.4441 25.9799L30.0641 27.3599Z"
                      fill="#FF9500"
                    />
                  </svg>
                  <span>{t("home.work2")}</span>
                </div>
                <div
                  onClick={() => setWork(3)}
                  style={
                    work == 3
                      ? {
                          borderColor: "#5856D6",
                          filter:
                            "drop-shadow(0px 13px 43px rgba(0, 0, 0, 0.12))",
                        }
                      : {}
                  }
                >
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="28"
                      cy="28"
                      r="28"
                      fill="#5856D6"
                      fillOpacity="0.15"
                    />
                    <path
                      d="M20.4544 29.1764V31.9864C20.4544 32.7164 20.8544 33.3964 21.4944 33.7464L26.4944 36.4764C27.0944 36.8064 27.8144 36.8064 28.4144 36.4764L33.4144 33.7464C34.0544 33.3964 34.4544 32.7164 34.4544 31.9864V29.1764L28.4144 32.4764C27.8144 32.8064 27.0944 32.8064 26.4944 32.4764L20.4544 29.1764ZM26.4944 19.5164L18.0644 24.1164C17.3744 24.4964 17.3744 25.4964 18.0644 25.8764L26.4944 30.4764C27.0944 30.8064 27.8144 30.8064 28.4144 30.4764L36.4544 26.0864V31.9964C36.4544 32.5464 36.9044 32.9964 37.4544 32.9964C38.0044 32.9964 38.4544 32.5464 38.4544 31.9964V25.5864C38.4544 25.2164 38.2544 24.8864 37.9344 24.7064L28.4144 19.5164C27.8144 19.1964 27.0944 19.1964 26.4944 19.5164Z"
                      fill="#5856D6"
                    />
                  </svg>
                  <span>{t("home.work3")}</span>
                </div>
                <div
                  onClick={() => setWork(4)}
                  style={
                    work == 4
                      ? {
                          borderColor: "#34C759",
                          filter:
                            "drop-shadow(0px 13px 43px rgba(0, 0, 0, 0.12))",
                        }
                      : {}
                  }
                >
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="28"
                      cy="28"
                      r="28"
                      fill="#34C759"
                      fillOpacity="0.15"
                    />
                    <path
                      d="M30.6559 20.98L25.6559 19.23C25.2359 19.08 24.7759 19.08 24.3559 19.22L20.3659 20.56C19.5559 20.84 19.0059 21.6 19.0059 22.46V34.31C19.0059 35.72 20.4159 36.68 21.7259 36.17L24.6559 35.03C24.8759 34.94 25.1259 34.94 25.3459 35.02L30.3459 36.77C30.7659 36.92 31.2259 36.92 31.6459 36.78L35.6359 35.44C36.4459 35.17 36.9959 34.4 36.9959 33.54V21.69C36.9959 20.28 35.5859 19.32 34.2759 19.83L31.3459 20.97C31.1259 21.05 30.8859 21.06 30.6559 20.98ZM31.0059 34.89L25.0059 32.78V21.11L31.0059 23.22V34.89Z"
                      fill="#34C759"
                    />
                  </svg>
                  <span>{t("home.work4")}</span>
                </div>
                <div
                  onClick={() => setWork(5)}
                  style={
                    work == 5
                      ? {
                          borderColor: "#3395ff",
                          filter:
                            "drop-shadow(0px 13px 43px rgba(0, 0, 0, 0.12))",
                        }
                      : {}
                  }
                >
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.15"
                      cx="28"
                      cy="28"
                      r="28"
                      fill="#007AFF"
                    />
                    <path
                      d="M35.5006 28C35.5006 27.77 35.4906 27.55 35.4706 27.32L37.3306 25.91C37.7306 25.61 37.8406 25.05 37.5906 24.61L35.7206 21.38C35.4706 20.94 34.9306 20.76 34.4706 20.96L32.3206 21.87C31.9506 21.61 31.5606 21.38 31.1506 21.19L30.8606 18.88C30.8006 18.38 30.3706 18 29.8706 18H26.1406C25.6306 18 25.2006 18.38 25.1406 18.88L24.8506 21.19C24.4406 21.38 24.0506 21.61 23.6806 21.87L21.5306 20.96C21.0706 20.76 20.5306 20.94 20.2806 21.38L18.4106 24.62C18.1606 25.06 18.2706 25.61 18.6706 25.92L20.5306 27.33C20.5106 27.55 20.5006 27.77 20.5006 28C20.5006 28.23 20.5106 28.45 20.5306 28.68L18.6706 30.09C18.2706 30.39 18.1606 30.95 18.4106 31.39L20.2806 34.62C20.5306 35.06 21.0706 35.24 21.5306 35.04L23.6806 34.13C24.0506 34.39 24.4406 34.62 24.8506 34.81L25.1406 37.12C25.2006 37.62 25.6306 38 26.1306 38H29.8606C30.3606 38 30.7906 37.62 30.8506 37.12L31.1406 34.81C31.5506 34.62 31.9406 34.39 32.3106 34.13L34.4606 35.04C34.9206 35.24 35.4606 35.06 35.7106 34.62L37.5806 31.39C37.8306 30.95 37.7206 30.4 37.3206 30.09L35.4606 28.68C35.4906 28.45 35.5006 28.23 35.5006 28ZM28.0406 31.5C26.1106 31.5 24.5406 29.93 24.5406 28C24.5406 26.07 26.1106 24.5 28.0406 24.5C29.9706 24.5 31.5406 26.07 31.5406 28C31.5406 29.93 29.9706 31.5 28.0406 31.5Z"
                      fill="#007AFF"
                    />
                  </svg>
                  <span>{t("home.work1")}</span>
                </div>
              </div>
              <div className="home__directions-right">
                {work == 5 ? (
                  <>
                    <h2>{t("home.work1")}</h2>
                    <p>{t("home.work1_info")}</p>
                    {/* <Button
                      style={{ placeSelf: "end" }}
                      type="primary"
                      download={true}
                      href={require("src/assets/AI_Council_ПОЛОЖЕНИЕ_уз_анг_рус.pdf")}
                    >
                      {t("home.download")}
                    </Button> */}
                  </>
                ) : work == 2 ? (
                  <>
                    <h2 style={{ color: "#FF9500" }}>{t("home.work2")}</h2>
                    <p>{t("home.work2_info")}</p>
                  </>
                ) : work == 3 ? (
                  <>
                    <h2 style={{ color: "#5856D6" }}>{t("home.work3")}</h2>
                    <p>{t("home.work3_info")}</p>
                  </>
                ) : (
                  <>
                    <h2 style={{ color: "#34C759" }}>{t("home.work4")}</h2>
                    <p>{t("home.work4_info")}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="home-news">
          <div className="container">
            <h2 className="section_title">{t("home.blog")}</h2>
            <HomeNews news={news} />
          </div>
        </div>

        <Partners />

        <div className="container">
          <div className="home__ministr">
            <h2 className="section_title">{t("nav.about")}</h2>

            <div>
              <p>
                {t("home.about_info")}
                <br />
                <br />
                {t("home.about_info2")}
              </p>

              <div className="flex">
                <div>
                  <h3>{t("home.about_name")}</h3>
                  <h4>{t("home.about_work")}</h4>
                </div>
                <img src={require("src/assets/images/ministr.png")} alt="" />
              </div>
            </div>
          </div>

          <div className="home__email">
            <h2>{t("home.email")}</h2>
            <div>
              <p>{t("home.email_info")}</p>
              <div className="email">
                <input type="text" placeholder={t("home.email_name") || ""} />
                <button>{t("home.email_button")}</button>
              </div>
              <Checkbox style={{ marginTop: 16, color: "#DFDBF7" }}>
                {t("home.email_check")}
              </Checkbox>
            </div>
          </div>
        </div>

        <div className="home__feedback">
          <div className="container">
            <div className="feedback">
              <h2>{t("feedback.title")}</h2>
              <p>{t("feedback.info")}</p>
              <Form
                form={form}
                onFinish={submitOffer}
                layout="vertical"
                autoComplete="off"
              >
                <div className="flex">
                  <div>
                    <Form.Item
                      name="fullName"
                      rules={[
                        { required: true, message: t("feedback.name") ?? "" },
                      ]}
                    >
                      <Input
                        placeholder={t("feedback.name") ?? ""}
                        size="large"
                      />
                    </Form.Item>
                    <Form.Item
                      name="phoneNumber"
                      rules={[
                        {
                          required: true,
                          message: t("feedback.phone") ?? "",
                        },
                      ]}
                    >
                      <Input
                        placeholder={t("feedback.phone") ?? ""}
                        size="large"
                      />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: t("feedback.email") ?? "",
                        },
                        {
                          type: "email",
                          message: t("feedback.email") ?? "",
                        },
                      ]}
                    >
                      <Input
                        placeholder={t("feedback.email") ?? ""}
                        size="large"
                      />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item
                      name="text"
                      rules={[
                        {
                          required: true,
                          message: t("feedback.text") ?? "",
                        },
                      ]}
                    >
                      <Input.TextArea
                        rows={6}
                        placeholder={t("feedback.text") ?? ""}
                        size="large"
                      />
                    </Form.Item>
                  </div>
                </div>
                <Form.Item style={{ marginBottom: 0 }}>
                  <Button
                    size="large"
                    type="primary"
                    htmlType="submit"
                    style={{ float: "right" }}
                  >
                    {t("feedback.send")}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
