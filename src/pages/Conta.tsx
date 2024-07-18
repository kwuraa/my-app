import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { AppContext } from "../components/AppContext";

interface userData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const Conta = () => {
  const [userData, setUserData] = useState<null | userData>();
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AppContext);
  console.log("retorno da pagina conta", isLoggedIn);

  !isLoggedIn && navigate("/");

  useEffect(() => {
    const getData = async () => {
      const data: any | userData = await api;
      setUserData(data);
    };

    getData();
  });

  const atualData = new Date();

  if (userData && id !== userData.id) {
    navigate("/");
  }
  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {userData === undefined || userData === null ? (
          <Center>
            <Spinner size="xl" color="white" />
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={`Bem Vindo(a) ${userData?.name}`}
              content={`${atualData.getDay()}/${atualData.getMonth()}/${atualData.getFullYear()} ${atualData.getHours()}:${atualData.getMinutes()}`}
            />
            <CardInfo mainContent="Saldo" content={`R$ ${userData.balance}`} />
          </>
        )}
      </SimpleGrid>
    </Center>
  );
};

export default Conta;
