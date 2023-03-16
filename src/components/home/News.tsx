import { Carousel } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { INews } from "types/index";
import { CalendarSvg } from "../svg";

function HomeNews({ news }: { news: INews[] }) {
  const { t } = useTranslation();
  const GiveTrans = (news: INews, title = true) => {
    const lang = localStorage.getItem("lang") ?? "RU";
    if (title) {
      return lang == "RU"
        ? news?.titleRU
        : lang == "EN"
        ? news?.titleEN
        : news?.titleUZ;
    }
    return lang == "RU"
      ? `${news?.textRU?.split(" ").slice(0, 30).join(" ")} ...`
      : lang == "EN"
      ? `${news?.textEN?.split(" ").slice(0, 30).join(" ")} ...`
      : `${news?.textUZ?.split(" ").slice(0, 30).join(" ")} ...`;
  };

  return (
    <>
      <div className="home-news-content">
        <Link
          to={`/blog/${news[news.length - 1]?.id}`}
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="home-news-content-left">
            <img src={news[news.length - 1]?.documentResponses[0]?.fileUrl} />
            <div className="home-news-content-box">
              <div className="home-news-content-box-wrap">
                <div className="home-news-content-box-header">
                  {GiveTrans(news[news.length - 1])}
                </div>
                <div className="home-news-content-box-footer">
                  <CalendarSvg />{" "}
                  {new Date(
                    news[news.length - 1]?.createdDate
                  ).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </Link>

        <div className="home-news-content-right">
          <Link
            to={`/blog/${news[news.length - 2]?.id}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="home-news-content-right-card">
              <img src={news[news.length - 2]?.documentResponses[0]?.fileUrl} />
              <div className="home-news-content-box">
                <div className="home-news-content-box-wrap">
                  <div className="home-news-content-box-header">
                    {GiveTrans(news[news.length - 2])}
                  </div>
                  <div className="home-news-content-box-footer">
                    <CalendarSvg />{" "}
                    {new Date(
                      news[news.length - 2]?.createdDate
                    ).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link
            to={`/blog/${news[news.length - 3]?.id}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="home-news-content-right-card">
              <img src={news[news.length - 3]?.documentResponses[0]?.fileUrl} />
              <div className="home-news-content-box">
                <div className="home-news-content-box-wrap">
                  <div className="home-news-content-box-header">
                    {GiveTrans(news[news.length - 3])}
                  </div>
                  <div className="home-news-content-box-footer">
                    <CalendarSvg />{" "}
                    {new Date(
                      news[news.length - 3]?.createdDate
                    ).toLocaleDateString()}
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
