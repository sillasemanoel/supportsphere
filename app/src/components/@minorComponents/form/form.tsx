// Dependencies
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// Styles
import { FormStyle } from "./style";

type FormProps = {
  title: string;
  error?: React.ReactNode;
  field: {
    onChange: (value: React.ChangeEvent<any>) => void;
    onBlur: () => void;
    value: any;
  };
  inputType: string;
};

export default function FormComponent(props: FormProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <FormStyle>
      <div>
        <h4>{props.title}</h4>
        <span>{props.error}</span>
      </div>
      <div style={{ position: "relative" }}>
        <input
          type={isPasswordVisible ? "text" : props.inputType}
          onChange={props.field.onChange}
          onBlur={props.field.onBlur}
          value={props.field.value}
        />
        {props.inputType === "password" && (
          <div className="passwordEye" onClick={togglePasswordVisibility}>
            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
          </div>
        )}
      </div>
    </FormStyle>
  );
}
