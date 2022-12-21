import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: 1fr auto;
  margin-top: 50px;
  position: relative;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const StyledImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;

  .gatsby-image-wrapper {
    max-height: 300px;
    background: #f5f9f9;

    img {
      height: 100%;
      cursor: pointer;
      object-fit: contain !important;
    }
  }

  @media (max-width: 1400px) {
    display: flex;
  }

  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const StyledDetails = styled.div`
  color: #fff;
  margin-bottom: 10px;

  svg {
    width: 40px;
    height: 40px;
    margin-top: 10px;
  }
`;

export const StyledSizes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  color: #bebebe;

  .not-available {
    background: #bebebe;
    opacity: 0.2;
    color: #fff;
    cursor: not-allowed !important;
  }

  span {
    padding: 5px 10px;
    border: 1px solid;
    cursor: pointer;
  }
`;

export const StyledColor = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;

  div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid #fff;
  }
`;

export const Addbtn = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  border-radius: 2px;
  max-width: 600px;
  text-transform: uppercase;
  background-color: #282d35;
  color: #bebebe;
  border: 1px solid;
`;

export const FullScreenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  z-index: 99999999;
  display: grid;
  place-items: center;

  #close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 50px;

    @media (max-width: 500px) {
      top: 10px;
      right: 10px;
      width: 40px;
    }
  }

  .gatsby-image-wrapper {
    width: 100%;
    max-width: 880px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const StyledInfo = styled.div`
  max-width: 600px;
  color: #bebebe;
  margin-top: 20px;

  p {
    margin-top: 10px;
  }

  button {
    padding: 10px 25px;
    margin-top: 15px;
    border-radius: 3px;
    background-color: #bebebe;
    color: #000;
  }
`;
