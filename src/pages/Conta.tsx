import { Center, SimpleGrid } from "@chakra-ui/react";
import CardInfo from "../components/CardInfo";

const Conta = () => {
  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        <CardInfo text="Informações de Acesso" />
        <CardInfo text="Informações da Conta" />
      </SimpleGrid>
    </Center>
  );
};

export default Conta;
