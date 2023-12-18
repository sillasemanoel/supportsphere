// Dependencies
import styled from "styled-components";

export const AuthStyle = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1450px) {
    .singUp {
      width: 480px !important;
    }
  }

  @media (max-width: 710px) {
    .singUp {
      width: 100% !important;
      height: 100% !important;
    }
  }

  .singUp {
    display: flex;
    width: 1300px;
    height: 650px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
`;
