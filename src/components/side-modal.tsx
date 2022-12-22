import React from "react";
import styled from "styled-components";
import CloseIcon from "../assets/images/close.webp";
import PhoneIcon from "../assets/images/phone.webp";
import EmailIcon from "../assets/images/mail.webp";
import WebIcon from "../assets/images/whatsapp.webp";
import LocationIcon from "../assets/images/location.webp";
import Modal from "./modal-container";

const ContactList = styled.ul`
  margin-top: 25px;

  li {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
  }

  font-size: 13px;
  h3 {
    font-weight: lighter;
    font-size: 16px;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

function SideModal({ openChat, closeChat }) {
  return (
    <Modal
      closeModal={closeChat}
      className={`side-modal ${openChat ? "open-chat" : "close-chat"}`}
    >
      <img id="close" src={CloseIcon} alt="X" onClick={() => closeChat()} />
      <h2>Contact Us</h2>
      <form action="https://formspree.io/f/xrgdnjzd" method="POST">
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="fullName" placeholder="Full Name" />
        <textarea name="message" placeholder="Enquiry here..."></textarea>
        <button type="submit">SUBMIT</button>
      </form>
      <h3>Message us at:</h3>
      <p>
        Locavore salvia keffiyeh, post-ironic pour-over kale chips bicycle
        rights green juice lyft thundercats hella messenger bag.
      </p>
      <ContactList>
        <li>
          <img src={PhoneIcon} alt="phone icon" />
          <div>
            <h3>Hotline</h3>
            <p>(89) 123-4567</p>
          </div>
        </li>
        <li>
          <img src={EmailIcon} alt="email icon" />
          <div>
            <h3>Email</h3>
            <p>johndoe@gmail.com</p>
          </div>
        </li>
        <li>
          <img src={WebIcon} alt="web icon" />
          <div>
            <h3>Whatsapp</h3>
            <p>+63987654321</p>
          </div>
        </li>
        <li>
          <img src={LocationIcon} alt="location icon" />
          <div>
            <h3>office location</h3>
            <p>NCR, Phillippines</p>
          </div>
        </li>
      </ContactList>
    </Modal>
  );
}

export default SideModal;
