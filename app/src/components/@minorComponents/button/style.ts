// Dependencies
import styled from "styled-components";

export const ColoredButtonStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  button {
    margin-top: 20px;
    width: 100%;
    padding: 18px;
    border-radius: 6px;
    font-family: var(--font-family-secondary);
    font-size: 16px;
    font-weight: 700;
    outline: none;
    cursor: pointer;
  }

  img {
    width: 60px;
    position: relative;
    top: 25px;
    right: 5px;
    cursor: pointer;
  }
`;
