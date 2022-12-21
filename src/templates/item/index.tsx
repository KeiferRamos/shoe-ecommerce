import { graphql } from "gatsby";
import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import "../../assets/styles/slick-theme.css";
import Popup from "../../components/popup-modal";
import Seo from "../../components/seo";
import Layout from "../../layout";

import {
  StyledImages,
  StyledDetails,
  StyledSizes,
  StyledColor,
  Container,
  Addbtn,
  FullScreenContainer,
  StyledInfo,
} from "./style";

import sizes from "../../data/sizes";

import CloseIcon from "../../assets/images/close.webp";
import { convertNum } from "../../utils/convert-to-price";
import SliderContainer from "../../components/slider";

type dataType = {
  data: { shoe: shoeType };
};

type shoeType = {
  category: "women" | "men" | "kids";
  colors: {
    raw: string;
  };
  images: {
    gatsbyImageData: any;
    url: string;
  }[];
  name: string;
  price: number;
  link: string;
  info: {
    info: string;
  };
  benifits: any;
  details: any;
  availableSizes: string;
  similar: {
    image: string;
    name: string;
    category: "women" | "men" | "kids";
  }[];
};

function Item({
  data: {
    shoe: {
      name,
      price,
      colors,
      images,
      link,
      info,
      benifits,
      details,
      category,
      availableSizes: available,
      similar,
    },
  },
}: dataType) {
  const parsedColor = JSON.parse(colors.raw);
  const colorString = parsedColor.content[0].content[0].value;

  const [showDetails, setShowDetails] = useState(false);
  const [fullScreen, setFullScreen] = useState({
    isFullscreen: false,
    selected: {},
  });
  const pathName = name.toLowerCase().replace(/ /g, "-");
  const url = `https://shoe-master.netlify.app/${category}/${pathName}/`;

  const SeoData = {
    title: name,
    description: info.info,
    image: images[0].url,
    url,
  };

  return (
    <Layout>
      <Container>
        <Seo {...SeoData} />
        {fullScreen.isFullscreen ? (
          <FullScreenContainer>
            <img
              id="close-btn"
              src={CloseIcon}
              onClick={() =>
                setFullScreen({ isFullscreen: false, selected: {} })
              }
            />
            <GatsbyImage image={getImage(fullScreen.selected)!} alt="" />
          </FullScreenContainer>
        ) : null}
        <section>
          <StyledImages>
            {images.map((image, i) => {
              return (
                <div
                  key={i}
                  onClick={() =>
                    setFullScreen({ isFullscreen: true, selected: image })
                  }
                >
                  <GatsbyImage image={getImage(image)!} alt="shoe image" />
                </div>
              );
            })}
          </StyledImages>
        </section>
        <section>
          <StyledDetails>
            <h2>{name}</h2>
            <p>P {convertNum(price)}</p>
            <div>
              <FacebookShareButton url={url}>
                <FacebookIcon />
              </FacebookShareButton>
              <WhatsappShareButton url={url}>
                <WhatsappIcon />
              </WhatsappShareButton>
              <TwitterShareButton url={url}>
                <TwitterIcon />
              </TwitterShareButton>
            </div>
          </StyledDetails>
          <StyledSizes>
            {sizes.map((size, i) => {
              return (
                <span
                  className={
                    !available.split(",").includes(size) ? "not-available" : ""
                  }
                  key={i}
                >
                  US {size}
                </span>
              );
            })}
          </StyledSizes>
          <StyledColor>
            {colorString.split(",").map((backgroundColor, i) => {
              return <div key={i} style={{ backgroundColor }}></div>;
            })}
          </StyledColor>
          <a href={link} target="_blank">
            <Addbtn>Add to Bag</Addbtn>
          </a>
          <StyledInfo>
            <h2>Lorem ipsum dolor sit amet.</h2>
            {info.info.split("\n\n").map((text, i) => {
              return <p key={i}>{text}</p>;
            })}
            <button id="product-details" onClick={() => setShowDetails(true)}>
              Product Details
            </button>
          </StyledInfo>
        </section>
        {showDetails ? (
          <Popup
            closeModal={() => setShowDetails(false)}
            benifits={benifits}
            details={details}
          />
        ) : null}
      </Container>
      <h2 style={{ color: "#bebebe", marginTop: "65px" }}>
        You Might Also Like
      </h2>
      <SliderContainer similar={similar} />
    </Layout>
  );
}

export const getData = graphql`
  query MyQuery($name: String) {
    shoe: contentfulShoe(name: { eq: $name }) {
      category
      name
      colors {
        raw
      }
      images {
        url
        gatsbyImageData(
          placeholder: DOMINANT_COLOR
          layout: CONSTRAINED
          formats: WEBP
        )
      }
      price
      link
      info {
        info
      }
      benifits {
        raw
      }
      details {
        raw
      }
      availableSizes
      similar: relatedProduct {
        image
        name
        category
      }
    }
  }
`;

export default Item;
