import {
  Button,
  Heading,
  Input,
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ChakraProvider,
} from "@chakra-ui/react";
import { login } from "../services/login";
import { useState } from "react";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  return (
    <ChakraProvider>
      <Flex paddingTop="3rem" justifyContent="center">
        <Card borderRadius="25px" width="35rem" height="20rem" align="center">
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
          </CardFooter>
        </Card>
      </Flex>
    </ChakraProvider>
  );
};

export default Home;
