import { Carousel } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CalendarSvg } from "../svg";

function HomeNews() {
  const { t } = useTranslation();
  return (
    <>
      <div className="home-news-content">
        <Link to={"/blog/news1"} onClick={() => window.scrollTo(0, 0)}>
          <div className="home-news-content-left">
            <img src={require("src/assets/images/new2.png")} />
            <div className="home-news-content-box">
              <div className="home-news-content-box-wrap">
                <div className="home-news-content-box-header">
                  {t("home.news1")}
                </div>
                <div className="home-news-content-box-footer">
                  <CalendarSvg /> 31.08.2022
                </div>
              </div>
            </div>
          </div>
        </Link>

        <div className="home-news-content-right">
          <Link to={"/blog/news2"} onClick={() => window.scrollTo(0, 0)}>
            <div className="home-news-content-right-card">
              <img src={require("src/assets/images/new1.png")} />
              <div className="home-news-content-box">
                <div className="home-news-content-box-wrap">
                  <div className="home-news-content-box-header">
                    {t("news2.title")}
                  </div>
                  <div className="home-news-content-box-footer">
                    <CalendarSvg /> 04.09.2022
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to={"/blog/news3"} onClick={() => window.scrollTo(0, 0)}>
            <div className="home-news-content-right-card">
              <img src={require("src/assets/images/new.png")} />
              <div className="home-news-content-box">
                <div className="home-news-content-box-wrap">
                  <div className="home-news-content-box-header">
                    {t("news3.title")}
                  </div>
                  <div className="home-news-content-box-footer">
                    <CalendarSvg /> 20.08.2022
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="home-news-carousel">
        <Carousel dotPosition="top">
          <Link to={"/blog/news1"} onClick={() => window.scrollTo(0, 0)}>
            <div className="home-news-content-right-card">
              <img src={require("src/assets/images/new2.png")} />
              <div className="home-news-content-box">
                <div className="home-news-content-box-wrap">
                  <div className="home-news-content-box-header">
                    {t("home.news1")}
                  </div>
                  <div className="home-news-content-box-footer">
                    <CalendarSvg /> 31.08.2022
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/blog/news2"} onClick={() => window.scrollTo(0, 0)}>
            <div className="home-news-content-right-card">
              <img src={require("src/assets/images/new1.png")} />
              <div className="home-news-content-box">
                <div className="home-news-content-box-wrap">
                  <div className="home-news-content-box-header">
                    {t("home.news2")}
                  </div>
                  <div className="home-news-content-box-footer">
                    <CalendarSvg /> 04.09.2022
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/blog/news3"} onClick={() => window.scrollTo(0, 0)}>
            <div className="home-news-content-right-card">
              <img src={require("src/assets/images/new.png")} />
              <div className="home-news-content-box">
                <div className="home-news-content-box-wrap">
                  <div className="home-news-content-box-header">
                    {t("home.news3")}
                  </div>
                  <div className="home-news-content-box-footer">
                    <CalendarSvg /> 20.08.2022
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Carousel>
      </div>
    </>
  );
}

export default HomeNews;
