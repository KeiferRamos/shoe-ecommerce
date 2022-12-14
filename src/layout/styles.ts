import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 100px 15% 0 15%;
  height: 100vh;

  @media (min-width: 1100px) {
    display: grid;
    grid-template-rows: 100px auto 50px;
  }
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  .close-chat {
    right: -400px;

    @media (max-width: 500px) {
      right: -100%;
    }
  }

  .open-chat {
    right: 0;
  }

  #arrow-up {
    width: 40px;
    background: rgba(0, 0, 0, 0.3);
    padding: 10px;
    border-radius: 3px;
    position: fixed;
    bottom: 20px;
    right: 20px;
  }

  @media (max-width: 800px) {
    padding: 50px 20px;
  }

  .side-modal {
    width: 400px;
    position: fixed;
    top: 0;
    background: #181d1f;
    height: 100%;
    transition: all 0.5s;
    color: #bebebe;
    padding: 20px;
    z-index: 99990000;
    overflow: scroll;

    ::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 500px) {
      width: 100%;
    }

    #close {
      width: 40px;
      height: 40px;
      position: absolute;
      right: 20px;
    }

    form {
      display: grid;
      gap: 10px;
      margin: 30px 0;

      input,
      textarea {
        background: #f5f9f9;
        color: #181d1f;
      }

      input {
        height: 50px;
        padding: 10px;
        border-radius: 3px;
      }

      textarea {
        height: 250px;
        padding: 10px;
        border-radius: 3px;

        @media (max-width: 360px) {
          height: 150px;
        }
      }

      button {
        height: 40px;
        border: none;
        border-radius: 3px;
        background-color: transparent;
        color: #bebebe;
        border: 1px solid;
        cursor: pointer;
      }
    }
  }

  .popup-modal {
    h3 {
      font-family: "Poppins";
    }

    position: relative;

    background: #fff;
    border-radius: 4px;
    max-width: 800px;
    padding: 20px;
    overflow: scroll;

    @media (max-width: 360px) {
      height: 100%;
    }

    ul {
      list-style: disc;
      padding: 0 20px;
      margin-top: 10px;
    }

    img {
      width: 40px;
      position: absolute;
      top: 10px;
      right: 10px;

      @media (max-width: 360px) {
        position: fixed;
      }
    }
  }
`;
