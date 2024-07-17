import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ContaInfo = () => {
  return (
    <>
      <Text fontSize="3xl" fontWeight="bold">
        Informaçoes da conta
      </Text>
      <Link to="/conta/28">
        <Text fontSize="xl">Conta</Text>
      </Link>
    </>
  );
};

export default ContaInfo;
