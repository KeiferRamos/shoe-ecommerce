import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  padding-top: 50px;
  color: #bebebe;
  gap: 10px;
  position: relative;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    height: fit-content;
    padding-top: 10px;
  }

  header {
    width: 100%;
    text-transform: capitalize;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;

    h2 {
      margin-right: auto;
      @media (max-width: 500px) {
        font-size: 17px;
      }
    }

    @media (max-width: 1100px) {
      h2 {
        width: calc(100% - 40px);
      }
    }

    .filter {
      width: 20px;
      height: 20px;
      display: none;

      @media (max-width: 1100px) {
        display: block;
      }
    }
  }

  .open-filter {
    height: auto;
  }
`;

export const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1100px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;

    span {
      flex: auto;
      padding: 10px 15px !important;
      font-size: 13px;
    }
  }

  span {
    color: #000;
    background: #fff;
    padding: 15px;
    border-radius: 3px;
    text-transform: capitalize;
    cursor: pointer;
    height: fit-content;
  }

  .selected {
    background: #282d35;
    color: #bebebe;
    border: 1px solid;
  }
`;

export const StyledList = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, auto));
  gap: 10px;
  position: relative;
  min-height: 650px;
  padding-bottom: 20px;

  @media (min-width: 1100px) {
    align-items: start;
  }

  @media (max-width: 1150px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, auto));
    min-height: auto;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, auto));
  }

  a {
    padding: 10px;
    background: #f5f9f9;
    cursor: pointer;

    h4 {
      margin-top: 10px;
    }
  }
`;

export const StyledPrice = styled.div`
  width: 100%;
  margin-top: 20px;

  p {
    border-bottom: 1px solid;
    padding-bottom: 5px;
    margin-bottom: 10px;
  }

  ul {
    li {
      margin-top: 5px;
      cursor: pointer;

      span {
        margin-right: 5px;
      }

      :last-child {
        padding-bottom: 5px;
        margin-bottom: 5px;
        border-bottom: 1px solid;
      }
    }
  }
`;

export const StyledGender = styled.div`
  display: flex;
  flex-wrap: wrap;

  p {
    width: 100%;
    margin-bottom: 5px;
  }

  a {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 5px;
    text-transform: capitalize;
    font-size: 18px;

    input {
      width: 15px;
      height: 15px;
    }
  }
`;

export const SearchTab = styled.div`
  position: relative;
  height: 40px;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 300px;

  input {
    height: 100%;
    width: 100%;
    font-family: inherit;
    padding: 0 5px;
    outline: none;
  }

  img {
    width: 15px;
    position: absolute;
    right: 10px;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const FilterContainer = styled.div`
  transition: all 0.7s;

  @media (max-width: 1100px) {
    height: 0;
    overflow: hidden;
  }
`;

export const EmptyContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent !important;
  border-radius: 5px;
  text-align: center;

  img {
    width: 100px;
  }

  @media (max-width: 360px) {
    top: 0;
    transform: translate(-50%, 0);
  }
`;
