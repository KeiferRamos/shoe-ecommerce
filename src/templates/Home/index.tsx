import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Layout from "../../layout";
import Seo from "../../components/seo";

import ShoeBg from "../../assets/images/shoe-bg.webp";
import InstagramIcon from "../../assets/images/instagram (1).webp";
import FacebookIcon from "../../assets/images/facebook (1).webp";
import GithubIcon from "../../assets/images/github.webp";

const StyledMain = styled.main`
  width: 100%;
  margin-bottom: 20px;

  section {
    height: 650px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 1.5rem;

    @media (max-width: 500px) {
      flex-direction: column-reverse;
      margin-bottom: 50px;
      height: auto;
    }
  }

  color: #bebebe;

  @media (max-width: 900px) {
    margin-top: 50px;
  }

  header {
    flex: 1;
    @media (max-width: 1100px) {
      flex: auto;
      width: 100%;
    }
  }

  .shoe-logo {
    @media (max-width: 500px) {
      width: 100%;
    }

    img {
      width: calc(100% - 20px);
      padding: 40px;
      rotate: -25deg;

      @media (max-width: 500px) {
        object-fit: cover;
      }
    }
  }

  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }

  .air-jordan {
    header {
      right: 0;
      text-align: end;
    }
  }
`;

const Icons = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;

  li {
    img {
      width: 35px;
      height: 35px;
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 50px;

  a {
    flex: 1;
    overflow: hidden;
    position: relative;

    p {
      position: absolute;
      bottom: 5px;
      left: 10px;
      z-index: 10000000;
      color: #fff;
    }

    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      z-index: 1000;
    }
    .gatsby-image-wrapper {
      flex: 1;
      height: 100%;
      transition: all 0.5s;
    }
  }
`;

const StyledDiv = styled.div`
  margin: 10px 0;
  position: relative;
  cursor: pointer;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  header {
    position: absolute;
    bottom: 0;
    padding: 20px;
    color: #d1cece;
    font-size: 20px;
    z-index: 999;

    @media (max-width: 500px) {
      p {
        font-size: 16px;
      }

      h1 {
        font-size: 20px;
      }
    }
  }

  a {
    font-family: "Poppins";
    letter-spacing: 2px;
    margin-top: 10px;
    padding: 10px 20px;
    border-radius: 3px;
    text-transform: uppercase;
    font-weight: bolder;
    background-color: #282d35;
    color: #bebebe;
    font-size: 11px;
  }

  .gatsby-image-wrapper {
    max-height: 500px;

    img {
      object-position: center;
    }
  }
`;

function Home() {
  const SeoData = {
    title: "Nike Shoe",
    image:
      "https://shoe-master.netlify.app/static/shoe-bg-7f40f9bd7e9e267bf62fe97637105885.webp",
    url: "https://shoe-master.netlify.app",
  };

  return (
    <Layout>
      <Seo {...SeoData} />
      <StyledMain>
        <section>
          <header>
            <h1>Find Your Pace</h1>
            <p>
              Man bun poke echo park, bespoke fixie brunch JOMO distillery
              normcore salvia. Bodega boys cold-pressed lyft sriracha gastropub
              gatekeep ascot.
            </p>
            <Icons>
              <li>
                <img src={InstagramIcon} alt="" />
              </li>
              <li>
                <img src={GithubIcon} alt="" />
              </li>
              <li>
                <img src={FacebookIcon} alt="" />
              </li>
            </Icons>
          </header>
          <div className="shoe-logo">
            <img src={ShoeBg} alt="" />
          </div>
        </section>
        <StyledLinks>
          <Link to="/men">
            <StaticImage
              src="../../assets/images/shoe-bg-4.webp"
              alt="men shoe"
              placeholder="blurred"
            />
            <p>MEN</p>
          </Link>
          <Link to="/women">
            <StaticImage
              src="../../assets/images/shoe-bg-5.webp"
              alt="men shoe"
              placeholder="blurred"
            />
            <p>WOMEN</p>
          </Link>
          <Link to="/kids">
            <StaticImage
              src="../../assets/images/shoe-bg-6.webp"
              alt="men shoe"
              placeholder="blurred"
            />
            <p>KIDS</p>
          </Link>
        </StyledLinks>
        <StyledDiv>
          <StaticImage
            src="../../assets/images/basketball.webp"
            alt="basketball"
          />
          <header>
            <h1>Get the hops and the speed</h1>
            <p>lace up in shoes that enhance what you bring to the court</p>
            <Link to="/all/basketball">Explore</Link>
          </header>
        </StyledDiv>
        <StyledDiv className="air-jordan">
          <StaticImage
            src="../../assets/images/air-jordan.webp"
            alt="basketball"
          />
          <header>
            <h1>Familiar but always fresh</h1>
            <p>
              The iconic Air Jordan 1 is remastered for today's sneakerhead
              culture.
            </p>
            <Link to="/kids/air-jordan-1-retro-high/">Get it now</Link>
          </header>
        </StyledDiv>
      </StyledMain>
    </Layout>
  );
}

export default Home;
