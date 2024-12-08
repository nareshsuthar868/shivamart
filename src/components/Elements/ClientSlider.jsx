import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets
import img1 from "../../assets/img-v1/without-bg/20180309_170920-removebg-preview.png";
import img2 from "../../assets/img-v1/without-bg/IMG-20180406-WA0014-removebg-preview.png";
import img3 from "../../assets/img-v1/without-bg/IMG-20170612-WA0018-removebg-preview.png";
import img4 from "../../assets/img-v1/without-bg/IMG_20231012_100116-removebg-preview.png";
import img5 from "../../assets/img-v1/without-bg/IMG_20240911_085241-removebg-preview.png";
import img6 from "../../assets/img-v1/without-bg/IMG_20210731_184544-removebg-preview.png";

export default function ClientSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={img1} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={img2} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={img3} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={img4} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={img5} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={img6} alt="client logo" />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  width: 100%;
  height: auto;
  padding: 10%;
`;