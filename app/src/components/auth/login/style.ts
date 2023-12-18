// Dependencies
import styled from "styled-components";

export const LoginStyle = styled.div`
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

  label {
    margin-top: 12px;
    padding-top: 5px;
    padding-left: 30px;
    width: 150px;
    display: block;
    position: relative;
    font-family: var(--font-family-secondary);
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
  }

  label input {
    display: none;
  }

  label span {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background-color: #f0f0f0;
    border-radius: 2px;
  }

  label:hover input ~ span {
    background-color: #e7e7e7;
  }

  label input:checked ~ span {
    background: #e972a8;
  }

  label span:after {
    content: "";
    position: absolute;
    display: none;
    top: 2px;
    left: 6px;
    width: 5px;
    height: 10px;
    border: solid #fff;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  label input:checked ~ span:after {
    display: block;
  }
`;
