import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "gatsby";

const StyledSlider = styled(Slider)`
  margin-bottom: 50px;
  margin-top: 10px;
  width: 100%;

  a {
    border: 1px solid #3f444d;
    height: 100%;
    background: #f8f8f8;
    padding: 10px;
    color: #bebebe;
    font-weight: bold;
  }

  h4 {
    margin-bottom: 5px;
  }

  img {
    width: 100%;
    object-fit: contain;
    height: 220px;
  }

  span {
    background: #3f444d;
    padding: 4px 12px;
    border-radius: 2px;
  }

  .slick-arrow {
    position: absolute;
    top: -25px;
  }

  .slick-next {
    right: 0;
  }

  .slick-prev {
    left: auto;
    right: 30px !important;
  }
`;

function SliderContainer({ similar }) {
  const isBrowser = typeof window !== "undefined";

  const [screenWidth, setScreenWidth] = useState(
    isBrowser ? window.innerWidth : 0
  );
  const [slides, setSlides] = useState(5);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    function getScreenWidth() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", getScreenWidth);
    return () => window.removeEventListener("resize", getScreenWidth);
  }, []);

  useEffect(() => {
    if (screenWidth <= 1500) {
      setSlides(4);
    }
    if (screenWidth <= 1200) {
      setSlides(3);
    }
    if (screenWidth <= 500) {
      setSlides(2);
    }
    if (screenWidth <= 360) {
      setSlides(1);
    }
    if (screenWidth > 1500) {
      setSlides(5);
    }
  }, [screenWidth]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
  };

  return (
    <StyledSlider {...settings}>
      {similar.map(({ image, name, category }) => {
        const pathName = name.toLowerCase().replace(/ /g, "-");
        return (
          <Link to={`/${category}/${pathName}`}>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <span>{category}</span>
          </Link>
        );
      })}
    </StyledSlider>
  );
}

export default SliderContainer;
