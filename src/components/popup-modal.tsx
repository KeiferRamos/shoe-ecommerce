import React from "react";
import CloseIcon from "../assets/images/close.webp";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Modal from "./modal-container";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.6);
  padding: 25px;

  @media (max-width: 360px) {
    padding: 0;
  }
`;

const richtextOption = {
  renderNode: {
    [BLOCKS.LIST_ITEM]: (node, children) => {
      return <li>{children}</li>;
    },
  },
};

function Popup({ closeModal, benifits, details }) {
  return (
    <ModalContainer>
      <Modal closeModal={closeModal} className="popup-modal">
        <div>
          <img src={CloseIcon} onClick={() => closeModal()} />
          <h3>Product Details</h3>
          <ul>
            {documentToReactComponents(JSON.parse(details.raw), richtextOption)}
          </ul>
          <br />
          <h3>Benefits</h3>
          <ul>
            {documentToReactComponents(
              JSON.parse(benifits.raw),
              richtextOption
            )}
          </ul>
        </div>
      </Modal>
    </ModalContainer>
  );
}

export default Popup;
