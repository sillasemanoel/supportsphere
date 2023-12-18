// Dependencies
import styled from "styled-components";

export const RegisterStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 70px;

  @media (min-width: 1451px) {
    .icon {
      display: none;
    }
  }

  @media (max-width: 1450px) {
    .icon {
      display: flex !important;
      margin-bottom: 20px;
      width: 70px;
    }
  }

  @media (max-width: 710px) {
    padding: 40px !important;
  }

  .congratulations {
    width: 100%;
    height: 100%;
    flex: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .congratulations span {
    font-size: 26px;
    font-weight: 700;
    color: #000;
    margin-bottom: 10px;
  }

  h1 {
    margin: 0px;
    font-family: var(--font-family-primary);
    font-size: 32px;
    font-weight: 100;
  }

  span {
    margin-top: 5px;
    font-family: var(--font-family-secondary);
    font-size: 16px;
    font-weight: 500;
    color: #6a697d;
  }
`;
