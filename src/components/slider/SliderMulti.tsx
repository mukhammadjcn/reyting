import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

function SliderMulti() {
  const { t } = useTranslation();
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

  return (
    <Slider {...settings} className="user-slider">
      <div className="user">
        <img src={require("src/assets/images/user.png")} alt="" />
        <h2>{t("about.user1.name")}</h2>
        <p>{t("about.user1.work")}</p>
      </div>
      <div className="user">
        <img src={require("src/assets/images/user2.png")} alt="" />
        <h2>{t("about.user2.name")}</h2>
        <p>{t("about.user2.work")}</p>
      </div>
      <div className="user">
        <img src={require("src/assets/images/Б.Махкамов.jpg")} alt="" />
        <h2>{t("about.user3.name")}</h2>
        <p>{t("about.user3.work")}</p>
      </div>
      <div className="user">
        <img src={require("src/assets/images/А.Незнамов.jpg")} alt="" />
        <h2>{t("about.user4.name")}</h2>
        <p>{t("about.user4.work")}</p>
      </div>
      <div className="user">
        <img src={require("src/assets/images/И Вихров.jpg")} alt="" />
        <h2>{t("about.user5.name")}</h2>
        <p>{t("about.user5.work")}</p>
      </div>
      <div className="user">
        <img src={require("src/assets/images/В. Определенов.jpeg")} alt="" />
        <h2>{t("about.user6.name")}</h2>
        <p>{t("about.user6.work")}</p>
      </div>{" "}
      <div className="user">
        <img src={require("src/assets/images/Ф Холиков.jpg")} alt="" />
        <h2>{t("about.user7.name")}</h2>
        <p>{t("about.user7.work")}</p>
      </div>{" "}
      <div className="user">
        <img src={require("src/assets/images/Ш.Умирзаков.jpg")} alt="" />
        <h2>{t("about.user8.name")}</h2>
        <p>{t("about.user8.work")}</p>
      </div>{" "}
      <div className="user">
        <img src={require("src/assets/images/user4.png")} alt="" />
        <h2>{t("about.user9.name")}</h2>
        <p>{t("about.user9.work")}</p>
      </div>{" "}
      <div className="user">
        <img src={require("src/assets/images/А Азими.jpg")} alt="" />
        <h2>{t("about.user10.name")}</h2>
        <p>{t("about.user10.work")}</p>
      </div>
      <div className="user">
        <img src={require("src/assets/images/Шерзод Абдуллаев.jpg")} alt="" />
        <h2>{t("about.user11.name")}</h2>
        <p>{t("about.user11.work")}</p>
      </div>
    </Slider>
  );
}

export default SliderMulti;
