import React, { useState, useEffect } from "react";
import "../assets/styles/styles.css";
import Navbar from "../components/navbar";
import ArrowUp from "../assets/images/up-arrow.webp";
import Footer from "../components/footer";
import { MainContainer } from "./styles";

function Wrapper({ children }) {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const mainContainer = document.getElementById("main-content")!;
    function getScrollHeight() {
      setScrollHeight(mainContainer.scrollTop);
    }

    mainContainer.addEventListener("scroll", getScrollHeight);
    return () => mainContainer.removeEventListener("scroll", getScrollHeight);
  }, []);

  const scrollBack = () => {
    const mainContainer = document.getElementById("main-content")!;
    mainContainer.scrollTo(0, 0);
  };

  return (
    <MainContainer id="main-content">
      <Navbar />
      {children}
      {scrollHeight >= 200 ? (
        <img onClick={() => scrollBack()} src={ArrowUp} id="arrow-up" />
      ) : null}
      <Footer />
    </MainContainer>
  );
}

export default Wrapper;
