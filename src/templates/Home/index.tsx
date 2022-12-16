import React from "react";
import styled from "styled-components";

import Layout from "../../layout";
import Seo from "../../components/seo";

import ShoeBg from "../../assets/images/shoe-bg.webp";
import InstagramIcon from "../../assets/images/instagram (1).webp";
import FacebookIcon from "../../assets/images/facebook (1).webp";
import GithubIcon from "../../assets/images/github.webp";

const StyledMain = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 1.5rem;
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
      width: 100%;
      rotate: -25deg;

      @media (max-width: 500px) {
        object-fit: cover;
        rotate: none;
      }
    }
  }

  @media (max-width: 500px) {
    flex-direction: column-reverse;
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
      </StyledMain>
    </Layout>
  );
}

export default Home;
