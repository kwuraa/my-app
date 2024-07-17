import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import { useEffect, useState } from "react";
import { api } from "../api";

interface userData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const Conta = () => {
  const [userData, setUserData] = useState<null | userData>();

  useEffect(() => {
    const getData = async () => {
      const data: any | userData = await api;
      setUserData(data);
    };

    getData();
  });

  const atualData = new Date();

  const { id } = useParams();
  const navigate = useNavigate();

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
