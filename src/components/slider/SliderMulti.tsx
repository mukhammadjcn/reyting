import React from "react";
import Slider from "react-slick";
import { IMember } from "types/index";
import { LoadingOutlined } from "@ant-design/icons";

function SliderMulti({ members }: { members: IMember[] }) {
  const settings = {
    dots: true,
    speed: 500,
    infinite: false,
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

  const GiveTrans = (member: IMember, name = true) => {
    const lang = localStorage.getItem("lang") ?? "RU";
    if (name) {
      return lang == "RU"
        ? member.fullNameRU
        : lang == "EN"
        ? member.fullNameEN
        : member.fullName;
    } else {
      return lang == "RU"
        ? member.workPlaceRU
        : lang == "EN"
        ? member.workPlaceEN
        : member.workPlace;
    }
  };

  return (
    <Slider {...settings} className="user-slider">
      {members.length > 0 ? (
        members.map((member) => (
          <div className="user" key={member.id}>
            <img src={member.documentResponses[0].fileUrl} alt="" />
            <h2>{GiveTrans(member)}</h2>
            <p>{GiveTrans(member, false)}</p>
          </div>
        ))
      ) : (
        <LoadingOutlined />
      )}
    </Slider>
  );
}

export default SliderMulti;
