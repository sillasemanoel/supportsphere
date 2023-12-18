// Dependencies
import { useEffect, useState } from "react";
import Axios from "axios";
// Components
import ButtonComponent from "../../components/@minorComponents/button/button";

interface UserData {
  name: string;
  email: string;
  // Adicione outros campos conforme necessário
}

const Home = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token =
          localStorage.getItem("token") || sessionStorage.getItem("token");

        if (!token) {
          window.location.href = "/";
          return;
        }

        const response = await Axios.get("http://localhost:2724/user-info", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(response.data as UserData);
      } catch (error) {
        console.error("Erro ao buscar informações do usuário:", error);
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        window.location.href = "/";
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h1>Bem-vindo à sua página inicial</h1>
          <p>Nome: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Adicione outros campos conforme necessário */}
          <ButtonComponent
            buttonFontColor="#040202"
            buttonFontColorHover="#fff"
            buttonBackground="#fff"
            buttonBackgroundHover="#040202"
            buttonBorderPx="1px"
            buttonBorderColor="#bebebe"
            buttonBorderColorHover="#040202"
            buttonType="button" // Alterado para tipo de botão "button"
            buttonName="Sair"
            buttonOnClick={handleLogout} // Adicionado o manipulador de eventos
          />
        </div>
      ) : (
        <p>Carregando informações do usuário...</p>
      )}
    </div>
  );
};

export default Home;
