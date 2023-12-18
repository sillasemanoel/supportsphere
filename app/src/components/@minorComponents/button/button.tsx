// Dependencies
import { useState } from "react";
// Styles
import { ColoredButtonStyle } from "./style";

type ButtonProps = {
  buttonFontColor: string;
  buttonFontColorHover?: string;
  buttonBackground: string;
  buttonBackgroundHover?: string;
  buttonBorderPx?: string;
  buttonBorderColor?: string;
  buttonBorderColorHover?: string;
  buttonOnClick?: () => void;
  buttonType?: "button" | "submit" | "reset";
  buttonName: string;
};

export default function ButtonComponent(props: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    color: isHovered
      ? `${props.buttonFontColorHover}`
      : `${props.buttonFontColor}`,
    background: isHovered
      ? `${props.buttonBackgroundHover}`
      : `${props.buttonBackground}`,
    border: isHovered
      ? `${props.buttonBorderPx} solid ${props.buttonBorderColorHover}`
      : `${props.buttonBorderPx} solid ${props.buttonBorderColor}`,
  };

  return (
    <ColoredButtonStyle>
      <button
        style={buttonStyle}
        type={props.buttonType}
        onClick={props.buttonOnClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {props.buttonName}
      </button>
    </ColoredButtonStyle>
  );
}
