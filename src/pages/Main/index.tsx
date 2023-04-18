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
      // message.success(data?.message);
      localStorage.getItem("lang") == "RU"
        ? message.success(
            "Ваше сообщение успешно сохранено, мы ответим вам в ближайшее время"
          )
        : localStorage.getItem("lang") == "EN"
        ? message.success(
            "Your message has been successfully saved, we will reply to you as soon as possible."
          )
        : message.success(
            "Xabaringiz muvaffaqiyatli saqlandi, biz sizga imkon qadar tezroq javob beramiz."
          );
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
            dotPosition="top"
            autoplaySpeed={3000}
            className="topcaraousel"
          >
            {publicNews.map((news) => (
              // <div className="home__card" key={news.id}>
              //   <div>
              //     <h2>{GiveTrans(news)}</h2>
              //     <p>{GiveTrans(news, "anons")}</p>
              //     <Link to={`/blog/${news.id}`}>
              //       <button>
              //         <span>{t("home.more")}</span>
              //         <RightSVG />
              //       </button>
              //     </Link>
              //   </div>
              //   <img src={news?.documentResponses[0]?.fileUrl} alt="" />
              // </div>
              <div className="home__card2" key={news.id}>
                <div className="wrap">
                  <img
                    loading="eager"
                    alt="Caraosel imgaes"
                    src={news?.documentResponses[0]?.fileUrl}
                  />
                </div>
                <div className="home__card2-content">
                  <h2>{GiveTrans(news)} </h2>
                  <Link to={`/blog/${news.id}`}>
                    <button>
                      <span>{t("home.more")}</span>
                      <RightSVG />
                    </button>
                  </Link>
                </div>
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
                      d="M26.8242 30.575L25.7992 29.3C25.6992 29.2166 25.5826 29.15 25.4492 29.1C25.3159 29.05 25.1909 29.025 25.0742 29.025H18.0492C17.7992 28.5416 17.6367 28.0833 17.5617 27.65C17.4867 27.2166 17.4492 26.7666 17.4492 26.3C17.4492 24.65 18.0034 23.2625 19.1117 22.1375C20.2201 21.0125 21.5909 20.45 23.2242 20.45C24.1576 20.45 25.0284 20.6541 25.8367 21.0625C26.6451 21.4708 27.3576 22.0666 27.9742 22.85C28.6742 22.0333 29.4117 21.4291 30.1867 21.0375C30.9617 20.6458 31.8076 20.45 32.7242 20.45C34.3742 20.45 35.7576 21.0125 36.8742 22.1375C37.9909 23.2625 38.5492 24.65 38.5492 26.3C38.5492 26.7666 38.5117 27.2166 38.4367 27.65C38.3617 28.0833 38.2076 28.5416 37.9742 29.025H31.4492L29.6992 27.15C29.5826 27.0666 29.4492 26.9833 29.2992 26.9C29.1492 26.8166 28.9826 26.775 28.7992 26.775C28.5992 26.775 28.4159 26.8375 28.2492 26.9625C28.0826 27.0875 27.9576 27.2333 27.8742 27.4L26.8242 30.575ZM27.9742 40.075L26.5742 38.825C24.6409 37.0583 23.0742 35.5541 21.8742 34.3125C20.6742 33.0708 19.7409 31.95 19.0742 30.95H24.6242L26.2992 32.8C26.3826 32.9333 26.5076 33.0333 26.6742 33.1C26.8409 33.1666 27.0326 33.2 27.2492 33.2C27.4492 33.2 27.6284 33.1416 27.7867 33.025C27.9451 32.9083 28.0742 32.7583 28.1742 32.575L29.2492 29.4L30.2992 30.675C30.4159 30.775 30.5451 30.8458 30.6867 30.8875C30.8284 30.9291 30.9742 30.95 31.1242 30.95H36.9492C36.2659 31.95 35.3201 33.0708 34.1117 34.3125C32.9034 35.5541 31.3326 37.0583 29.3992 38.825L27.9742 40.075Z"
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
