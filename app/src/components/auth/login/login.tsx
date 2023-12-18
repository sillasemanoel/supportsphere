// Dependencies
import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Axios from "axios";
// Components
import FormComponent from "../../@minorComponents/form/form";
import ButtonComponent from "../../@minorComponents/button/button";
// Styles
import { LoginStyle } from "./style";
// Images
import icon from "../../../../public/icon.png";

const schema = z.object({
  email: z
    .string()
    .nonempty("Campo obrigatório")
    .email("Formato de email inválido")
    .toLowerCase(),
  password: z.string().nonempty("Campo obrigatório"),
});

type FormData = z.infer<typeof schema>;

type LoginProps = {
  children: React.ReactNode;
};

export default function Login(props: LoginProps) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(false); // Novo estado para lembrar-me

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleAuthentication = (
    message: string,
    token: string | undefined,
    rememberMe: boolean
  ) => {
    if (message === "Autenticação bem-sucedida" && token) {
      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem("token", token);
      window.location.href = "/home";
    } else {
      setErrorMessage("Verifique seus dados");
    }
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await Axios.post("http://localhost:2724/login", data);
      const { message, token } = response.data;
      handleAuthentication(message, token, rememberMe);
    } catch (error) {
      console.error("Erro no login", error);
      setErrorMessage("Erro no login. Verifique seus dados e tente novamente.");
    }
  };

  return (
    <LoginStyle>
      <img className="icon" src={icon} title="taskSwift" alt="Logo" />
      <h1>Olá! Tudo bem? </h1>
      <span>Insira as informações abaixo, por favor.</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormComponent
              title="E-mail"
              error={errors.email?.message}
              field={field}
              inputType="text"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div>
              <FormComponent
                title="Senha"
                error={
                  errors.password?.message || (errorMessage && errorMessage)
                }
                field={field}
                inputType="password"
              />
            </div>
          )}
        />
        <label>
          Mantenha-me logado
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <span></span>
        </label>
        <ButtonComponent
          buttonFontColor="#040202"
          buttonFontColorHover="#fff"
          buttonBackground="#fff"
          buttonBackgroundHover="#040202"
          buttonBorderPx="1px"
          buttonBorderColor="#bebebe"
          buttonBorderColorHover="#040202"
          buttonType="submit"
          buttonName="Entrar"
        />
      </form>
      {props.children}
    </LoginStyle>
  );
}
