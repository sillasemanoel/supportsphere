// Dependencies
import { useState } from "react";
// Components
import PresentationComponent from "../../components/auth/presentation/presentation"; /*ok*/
import LoginComponent from "../../components/auth/login/login";
import RegisterComponent from "../../components/auth/register/register";
import ButtonComponent from "../../components/@minorComponents/button/button";
// Style
import { AuthStyle } from "./style";

export default function Auth() {
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  const toggleView = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  return (
    <AuthStyle>
      <div className="singUp">
        <PresentationComponent />
        {isLoginVisible ? (
          <LoginComponent>
            <ButtonComponent
              buttonFontColor="#040202"
              buttonFontColorHover="#fff"
              buttonBackground="#fff"
              buttonBackgroundHover="#040202"
              buttonBorderPx="1px"
              buttonBorderColor="#bebebe"
              buttonBorderColorHover="#040202"
              buttonOnClick={toggleView}
              buttonName="Cadastre-se"
            />
          </LoginComponent>
        ) : (
          <RegisterComponent>
            <ButtonComponent
              buttonFontColor="#040202"
              buttonFontColorHover="#fff"
              buttonBackground="#fff"
              buttonBackgroundHover="#040202"
              buttonBorderPx="1px"
              buttonBorderColor="#bebebe"
              buttonBorderColorHover="#040202"
              buttonOnClick={toggleView}
              buttonName="Fazer login"
            />
          </RegisterComponent>
        )}
      </div>
    </AuthStyle>
  );
}
