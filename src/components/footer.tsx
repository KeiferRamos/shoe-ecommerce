import { Link } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";

import SideModal from "./side-modal";

import PhoneIcon from "../assets/images/phone.webp";
import EmailIcon from "../assets/images/mail.webp";
import WhatsappIcon from "../assets/images/whatsapp.webp";
import FBIcon from "../assets/images/facebook (1).webp";
import GithubIcon from "../assets/images/github.webp";
import InstaIcon from "../assets/images/instagram (1).webp";
import CopyRightIcon from "../assets/images/protection.webp";
import LocationIcon from "../assets/images/location.webp";

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  color: #bebebe;
  margin: 100px 0 50px 0;
  gap: 30px;

  @media (max-width: 360px) {
    gap: 20px;
  }

  #contact-us-btn {
    padding: 6px 12px;
    border-radius: 3px;
    background-color: #282d35;
    color: #bebebe;
    font-size: 11px;
    border: 1px solid;
  }

  h2 {
    font-family: "Space Mono";
    font-weight: 300;
    border-bottom: 2px solid;
    margin-bottom: 15px;
    padding-bottom: 5px;
  }

  .title {
    width: 500px;

    @media (max-width: 500px) {
      width: 100%;
    }

    p {
      font-family: "Poppins";
    }
  }

  .links {
    display: grid;
    align-items: start;
    height: max-content;
    gap: 10px;

    h2 {
      margin-bottom: 0;
    }
  }

  .contacts {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: start;
    min-width: 200px;
    height: max-content;
    gap: 15px;
    flex: 0.9;

    @media (min-width: 500px) {
      min-width: 250px;
    }

    .social-media {
      width: 100%;
      margin-top: 10px;
    }

    h2 {
      width: 100%;
      margin-bottom: 0;
    }

    div {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
      padding-right: 10px;

      :not([class="social-media"]) {
        gap: 15px;
      }

      h4 {
        font-weight: lighter;
        font-size: 15px;
      }

      p {
        font-size: 12px;
      }
    }
    img {
      height: 35px;
    }
  }

  .credits {
    position: absolute;
    top: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    height: 50px;
    gap: 8px;
    font-size: 13px;

    img {
      width: 20px;
    }
  }
`;

function Footer() {
  const [openChat, setOpenChat] = useState(false);

  const closeChat = () => setOpenChat(false);

  return (
    <StyledFooter>
      <section className="title">
        <h2>Nike's Shoes</h2>
        <p>
          Glossier shabby chic fixie bruh flexitarian celiac. Ramps organic
          prism, health goth craft beer fam pug. Blog direct trade knausgaard
          normcore chia.
        </p>
      </section>
      <section className="links">
        <h2>Links</h2>
        <Link to="/men">MEN</Link>
        <Link to="/women">WOMEN</Link>
        <Link to="/kids">KIDS</Link>
        <Link to="/all">ALL</Link>
        <button id="contact-us-btn" onClick={() => setOpenChat(true)}>
          CONTACT US
        </button>
      </section>
      <section className="contacts">
        <h2>Contacts</h2>
        <div>
          <img src={PhoneIcon} alt="phone icon" />
          <span>
            <h4>Headquarters</h4>
            <p>(89) 123-4567</p>
          </span>
        </div>
        <div>
          <img src={EmailIcon} alt="phone icon" />
          <span>
            <h4>Technical Support</h4>
            <p>johndoe@gmail.com</p>
          </span>
        </div>
        <div>
          <img src={WhatsappIcon} alt="phone icon" />
          <span>
            <h4>Sales Department</h4>
            <p>+63987654321</p>
          </span>
        </div>
        <div>
          <img src={LocationIcon} alt="location icon" />
          <span>
            <h4>office location</h4>
            <p>NCR, Phillippines</p>
          </span>
        </div>
        <div className="social-media">
          <img src={InstaIcon} alt="instagram icon" />
          <img src={GithubIcon} alt="github icon" />
          <img src={FBIcon} alt="facebook icon" />
        </div>
      </section>
      <section className="credits">
        <img src={CopyRightIcon} alt="copyright symbol" />
        <p>{new Date().getFullYear()} Keifer Ramos. All Right Reserve.</p>
      </section>
      <SideModal openChat={openChat} closeChat={closeChat}></SideModal>
    </StyledFooter>
  );
}

export default Footer;
