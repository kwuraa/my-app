import {
  Heading,
  Input,
  Box,
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { Btn } from "./Button";
import { api } from "../services/api";

interface ICard {
  event: () => void;
}

export const CardIndex = ({ event }: ICard) => {
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
        </CardHeader>
        <CardBody
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          alignItems="center"
          gap=".7rem"
          width="80%"
        >
          <Input placeholder="E-mail" type="email" />
          <Input placeholder="Password" type="password" />
        </CardBody>
        <CardFooter marginBottom="10px">
          <Btn title={"Login"} event={event} />
        </CardFooter>
      </Card>
    </Box>
  );
};
