import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import NoPage from "../assets/images/no-page.webp";
import Seo from "../components/seo";

const StyledError = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  color: #bebebe;
  text-align: center;

  img {
    width: 150px;
  }

  p {
    margin-bottom: 10px;
  }

  a {
    padding: 10px 15px;
    border: none;
    font-family: "Poppins";
    border-radius: 3px;
    text-transform: uppercase;
    font-weight: bolder;
    background-color: #3f444d;
    color: #fff;
    letter-spacing: 1px;
    font-size: 11px;
  }
`;

function ErrorPage() {
  const SeoData = {
    title: "Page Not Found",
  };
  return (
    <StyledError>
      <Seo {...SeoData} />
      <div>
        <img src={NoPage} alt="page not found" />
        <p>Page Not Found!</p>
        <Link to="/">Go Back Home</Link>
      </div>
    </StyledError>
  );
}

export default ErrorPage;
