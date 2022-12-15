import { graphql } from "gatsby";
import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  LinkedinIcon,
} from "react-share";

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

type dataType = {
  data: { shoe: shoeType };
};

type shoeType = {
  category: string;
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
  const url = `https://gilded-creponne-eb2b3e.netlify.app/${category}/${pathName}`;

  const SeoData = {
    title: name,
    description: info.info,
    image: images[0].url,
    url,
  };

  console.log(SeoData);

  return (
    <Layout>
      <Seo {...SeoData} />
      <Container>
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
            <p>
              P {price.toString()[0]},{price.toString().slice(1)}
            </p>
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
              return <span key={i}>{size}</span>;
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
    }
  }
`;

export default Item;
