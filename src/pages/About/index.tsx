import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import Footer from "src/components/home/Footer";
import Header from "src/components/home/Header";
import Partners from "src/components/home/Partners";
import SliderMulti from "src/components/slider/SliderMulti";
import { GetMemberConfig } from "src/server/config/Urls";
import { CatchError } from "src/utils/index";
import { IMember } from "src/types/index";

function About() {
  const { t, i18n } = useTranslation();
  const [members, setMembers] = useState<IMember[]>([]);

  const settings = {
    dots: true,
    speed: 500,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  const GetMembers = async () => {
    try {
      const { data } = await GetMemberConfig();
      setMembers(data);
    } catch (error) {
      CatchError(error);
    }
  };

  useEffect(() => {
    GetMembers();
    i18n.changeLanguage(localStorage.getItem("lang") ?? "RU");
  }, []);
  return (
    <>
      <Header />
      <div className="aboutpage ">
        <div className="container">
          <h2 className="section_title" id="member">
            {t("nav.about2")}
          </h2>

          <SliderMulti members={members} />

          <h2 className="section_title" id="group">
            {t("about.work_group")}
          </h2>
          <p className="aboutpage__info">{t("about.work_info")}</p>

          <div className="aboutpage__box">
            <div className="aboutpage__item">
              <div className="left">
                <h2>{t("about.work1.title")}</h2>
                <h3>{t("about.work1.info")}</h3>
                <span>{t("about.work1.group")}</span>
                <p>{t("about.work1.team")}</p>
              </div>
              <div className="right">
                <img src={require("src/assets/images/user.png")} alt="" />
                <h4>{t("about.work1.label")}</h4>
                <p>{t("about.work1.name")}</p>
              </div>
            </div>
            <div className="aboutpage__item">
              <div className="left">
                <h2>{t("about.work2.title")}</h2>
                <h3>{t("about.work2.info")}</h3>
                <span>{t("about.work2.group")}</span>
                <p>{t("about.work2.team")}</p>
              </div>
              <div className="right">
                <img src={require("src/assets/images/user4.png")} alt="" />
                <h4>{t("about.work2.label")}</h4>
                <p>{t("about.work2.name")}</p>
              </div>
            </div>
            <div className="aboutpage__item">
              <div className="left">
                <h2>{t("about.work3.title")}</h2>
                <h3>{t("about.work3.info")}</h3>
                <span>{t("about.work3.group")}</span>
                <p>{t("about.work3.team")}</p>
              </div>
              <div className="right">
                <img src={require("src/assets/images/user.png")} alt="" />
                <h4>{t("about.work3.label")}</h4>
                <p>{t("about.work3.name")}</p>
              </div>
            </div>
            <div className="aboutpage__item">
              <div className="left">
                <h2>{t("about.work4.title")}</h2>
                <h3>{t("about.work4.info")}</h3>
                <span>{t("about.work4.group")}</span>
                <p>{t("about.work4.team")}</p>
              </div>
              <div className="right">
                <img src={require("src/assets/images/user5.jpg")} alt="" />
                <h4>{t("about.work4.label")}</h4>
                <p>{t("about.work4.name")}</p>
              </div>
            </div>
          </div>
        </div>

        <div id="azo">
          <Partners />
        </div>

        {/* <div className="container">
          <div className="documents" id="doc">
            <h2 className="section_title">{t("about.documents")}</h2>
            <div className="documents_box">
              <div className="documents_item">
                <img src={require("src/assets/images/doc1.png")} alt="" />
                <a href="https://lex.uz/docs/5031048" target="_blank">
                  {t("about.document1.name")}
                </a>
                <p>{t("about.document1.info")}</p>
              </div>
              <div className="documents_item">
                <img src={require("src/assets/images/doc2.png")} alt="" />
                <a href="https://lex.uz/docs/6102468" target="_blank">
                  {t("about.document2.name")}
                </a>
                <p>{t("about.document2.info")}</p>
              </div>
              <div className="documents_item">
                <img src={require("src/assets/images/doc3.png")} alt="" />
                <a href="https://lex.uz/docs/5297051" target="_blank">
                  {t("about.document3.name")}
                </a>
                <p>{t("about.document3.info")}</p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="container">
          <div className="documents" id="doc">
            <h2 className="section_title">{t("about.documents")}</h2>
            <Slider {...settings} className="user-slider">
              <div className="documents_item">
                <img src={require("src/assets/images/doc1.png")} alt="" />
                <a href="https://lex.uz/docs/5031048" target="_blank">
                  {t("about.document1.name")}
                </a>
                <p>{t("about.document1.info")}</p>
              </div>
              <div className="documents_item">
                <img src={require("src/assets/images/doc2.png")} alt="" />
                <a href="https://lex.uz/docs/6102468" target="_blank">
                  {t("about.document2.name")}
                </a>
                <p>{t("about.document2.info")}</p>
              </div>
              <div className="documents_item">
                <img src={require("src/assets/images/doc3.png")} alt="" />
                <a href="https://lex.uz/docs/5297051" target="_blank">
                  {t("about.document3.name")}
                </a>
                <p>{t("about.document3.info")}</p>
              </div>
              <div className="documents_item">
                <img src={require("src/assets/images/doc4.jpg")} alt="" />
                <a
                  href={require("src/assets/ПОЛОЖЕНИЕ_О_КОНСУЛЬТАТИВНОГО_СОВЕТА.pdf")}
                  target="_blank"
                  download={true}
                >
                  {t("about.document4.name")}
                </a>
                {/* <p>{t("about.document3.info")}</p> */}
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
