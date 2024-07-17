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
import { useState } from "react";
import { login } from "../services/login";

// import { Btn } from "./Button";

// interface ICard {
//   event: () => void;
// }

// export const CardIndex = ({ event }: ICard) => {

export const CardIndex = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Box display="flex" paddingTop="3rem" justifyContent="center">
      <Card borderRadius="25px" width="35rem" height="20rem" align="center">
        <CardHeader marginTop="10px">
          <Flex justifyContent="center">
            <Heading size="xl"> Faça Login</Heading>
          </Flex>
          {/* <Flex justifyContent="center">
            {userData === null ||
              (userData === undefined ? (
                <h1>Loading...</h1>
              ) : (
                <h1>Informações Carregadas</h1>
              ))}
          </Flex> */}
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
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </CardBody>
        <CardFooter marginBottom="10px">
          <Button
            onClick={() => login(email, password)}
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
