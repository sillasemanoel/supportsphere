// Dependencies
import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Axios from "axios";
// Components
import FormComponent from "../../@minorComponents/form/form";
import ButtonComponent from "../../@minorComponents/button/button";
// Styles
import { RegisterStyle } from "./style";
// Images
import icon from "../../../../public/icon.png";

const schema = z.object({
  name: z
    .string()
    .nonempty("Campo obrigatório")
    .regex(/^[A-Za-z]+$/, "Apenas letras")
    .transform((data) => {
      const formattedData = data
        .toLowerCase()
        .replace(/(?:^|\s)\S/g, (char) => char.toUpperCase());
      return formattedData.replace(/\s+/g, " ");
    }),
  email: z
    .string()
    .nonempty("Campo obrigatório")
    .email({ message: "Email inválido" })
    .toLowerCase()
    .refine(async (data) => {
      if (!data) {
        return false;
      }

      try {
        const response = await Axios.get(
          `http://localhost:2724/check-email/${data}`
        );
        return response.data === "available";
      } catch (error) {
        console.error(error);
        return false;
      }
    }, "E-mail já registrado"),
  password: z
    .string()
    .nonempty("Campo obrigatório")
    .min(8, "A senha deve ter de 8 a 18 caracteres ")
    .max(18, "Só é permitido até 18 caracteres"),
});

type FormData = z.infer<typeof schema>;

type RegisterProps = {
  children: React.ReactNode;
};

export default function Register(props: RegisterProps) {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await Axios.post("http://localhost:2724/register", {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      if (response.data === "Usuário cadastrado com sucesso!") {
        setRegistrationSuccess(true);
      } else {
        console.error("Erro no cadastro", response.data);
      }
    } catch (error) {
      console.error("Erro no cadastro", error);
    }
  };

  if (registrationSuccess) {
    return (
      <RegisterStyle>
        <div className="congratulations">
          <span>Usuario cadastrado, agora volte e faça seu login! 🍌</span>
          {props.children}
        </div>
      </RegisterStyle>
    );
  }

  return (
    <RegisterStyle>
      <img className="icon" src={icon} title="taskSwift" alt="Logo" />
      <h1>Cadastre-se</h1>
      <span>Preencha os dados corretamente.</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormComponent
              title="Nome"
              error={errors.name?.message}
              field={field}
              inputType="text"
            />
          )}
        />
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
            <FormComponent
              title="Senha"
              error={errors.password?.message}
              field={field}
              inputType="password"
            />
          )}
        />
        <ButtonComponent
          buttonFontColor="#040202"
          buttonFontColorHover="#fff"
          buttonBackground="#fff"
          buttonBackgroundHover="#040202"
          buttonBorderPx="1px"
          buttonBorderColor="#bebebe"
          buttonBorderColorHover="#040202"
          buttonType="submit"
          buttonName="Cadastrar"
        />
      </form>
      {props.children}
    </RegisterStyle>
  );
}
