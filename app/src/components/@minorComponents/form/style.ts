// Dependencies
import styled from "styled-components";

export const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  div {
    display: flex;
    justify-content: space-between;
    font-family: var(--font-family-secondary);
    font-size: 16px;
  }

  div h4 {
    font-weight: 700;
    margin: 0;
  }

  div span {
    font-weight: 700;
    color: #fa4642;
    margin: 0;
  }

  input {
    margin-top: 5px;
    width: 100%;
    box-sizing: border-box;
    font-family: var(--font-family-secondary);
    font-size: 15px;
    font-weight: 400;
    padding: 12px;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    outline: 0;
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .passwordEye {
    position: absolute;
    top: 18px;
    right: 15px;
    font-size: 20px;
    cursor: pointer;
    color: #178241;
  }
`;
