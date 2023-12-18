// Dependencies
import styled from "styled-components";

export const PresentationStyle = styled.div`
  background-position: 50% center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 50%;
  height: 100%;
  border-radius: 5px;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;

  .ghostPresentation {
    width: 350px;
    height: 350px;
    padding: 30px 40px;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.4) 35%,
      rgba(0, 0, 0, 0.4) 100%
    );
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .ghostPresentation ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0 18px;
  }

  .ghostPresentation ul li {
    display: flex;
  }

  .ghostPresentation ul li span {
    margin: 0;
    font-size: 56px;
    color: #fff;
  }

  .arrowPresentation {
    position: relative;
    top: 4px;
    font-size: 50px !important;
  }

  .ghostPresentation div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .ghostPresentation div span {
    font-family: var(--font-family-secondary);
    font-size: 16px;
    font-weight: 600;
    color: #fff;
  }

  @media (max-width: 1450px) {
    display: none !important;
  }
`;
