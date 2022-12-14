import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Modal from "./side-modal";
import { Link } from "gatsby";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #bebebe;
  position: relative;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  a {
    margin-right: auto;

    h1 {
      display: flex;
      flex-wrap: wrap;
      gap: 3px;

      i {
        width: 100%;
      }

      span {
        width: 35px;
        height: 35px;
        border: 2px solid;
        display: grid;
        place-items: center;
      }
    }
  }

  .open-nav {
    height: 240px;
  }

  .toggle-nav {
    position: absolute;
    top: 25px;
    right: 0;
    cursor: pointer;
    display: none;

    @media (max-width: 900px) {
      display: block;
    }
  }

  .active-link {
    position: relative;

    ::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 2px;
      top: 100%;
      left: 0;
      background: #bebebe;
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 20px;
    text-transform: uppercase;
    transition: all 0.4s;

    @media (max-width: 900px) {
      display: grid;
      height: 1px;
      overflow: hidden;
      width: 100%;
      padding-top: 10px;
      gap: 10px;

      a {
        width: 100%;
        border: 1px solid;
        padding: 10px 15px;
      }
    }

    button {
      padding: 10px 15px;
      border: none;
      border-radius: 3px;
      text-transform: uppercase;
      font-weight: bolder;
      background-color: #282d35;
      color: #bebebe;
      font-size: 11px;

      @media (max-width: 900px) {
        padding: 15px;
        border: 1px solid;
      }
    }
  }
`;

function Navbar() {
  const [open, setOpen] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const NavRef = useRef({} as HTMLUListElement);

  const closeChat = () => setOpenChat(false);

  useEffect(() => {
    function closeModalOnClick(e) {
      const toggler = document.getElementById("close-nav");
      if (toggler?.contains(e.target)) {
        return;
      }

      if (NavRef.current && !NavRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("click", (e) => closeModalOnClick(e));
    return () =>
      document.removeEventListener("click", (e) => closeModalOnClick(e));
  }, []);

  return (
    <>
      <StyledNav>
        <Link to="/">
          <h1>
            {Array.from("nike's shoes").map((text, i) => {
              if (text === " ") {
                return <i key={i}></i>;
              }
              return <span key={i}>{text}</span>;
            })}
          </h1>
        </Link>
        <div
          id="close-nav"
          className="toggle-nav"
          onClick={() => setOpen(!open)}
        >
          <StaticImage
            src="../assets/images/menus.webp"
            alt="menu"
            width={40}
            height={40}
          />
        </div>
        <ul ref={NavRef} className={open ? "open-nav" : ""}>
          <Link activeClassName="active-link" to="/men">
            Men
          </Link>
          <Link activeClassName="active-link" to="/women">
            Women
          </Link>
          <Link activeClassName="active-link" to="/kids">
            kids
          </Link>
          <button id="contact-us-btn" onClick={() => setOpenChat(true)}>
            contact us
          </button>
        </ul>
      </StyledNav>
      <Modal openChat={openChat} closeChat={closeChat} />
    </>
  );
}

export default Navbar;
