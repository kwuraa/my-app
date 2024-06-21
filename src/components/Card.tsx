import {
  Button,
  Heading,
  Input,
  Box,
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../api";
import { login } from "../services/login";

// import { Btn } from "./Button";

// interface ICard {
//   event: () => void;
// }

// export const CardIndex = ({ event }: ICard) => {

interface userData {
  email: string;
  password: string;
  name: string;
}

export const CardIndex = () => {
  const [email, setEmail] = useState<string>("");
  const [userData, setUserData] = useState<null | userData>();

  useEffect(() => {
    const getData = async () => {
      const data: any | userData = await api;
      setUserData(data);
    };

    getData();
  });

  console.log(userData);

  return (
    <Box
      backgroundColor="#1e192d"
      minHeight="88.3vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Card
        borderRadius="25px"
        minWidth="550px"
        minHeight="380px"
        align="center"
      >
        <CardHeader marginTop="10px">
          <Flex justifyContent="center">
            <Heading size="xl"> Faça Login</Heading>
          </Flex>
          <Flex justifyContent="center">
            {userData === null ||
              (userData === undefined ? (
                <h1>Loading...</h1>
              ) : (
                <h1>Informações Carregadas</h1>
              ))}
          </Flex>
        </CardHeader>
        <CardBody
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          alignItems="center"
          gap=".7rem"
          width="80%"
        >
          <Input
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input placeholder="Password" type="password" />
        </CardBody>
        <CardFooter marginBottom="10px">
          <Button
            onClick={() => login(email)}
            colorScheme="purple"
            size="lg"
            width="100%"
          >
            {"Login"}
          </Button>
          {/* <Btn title={"Login"} event={event} /> */}
        </CardFooter>
      </Card>
    </Box>
  );
};
