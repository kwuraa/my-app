import {
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
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Btn } from "../components/Button";


const Home = () => {
  const [email, setEmail] = useState<string>("");
  const {setIsLoggedIn} = useContext(AppContext)
  const navigate = useNavigate()

  const validadeUser = async(email: string)  => {
    const loggedIn = await login(email)

    if(!loggedIn){
      return alert("E-mail invalido")
    }

    setIsLoggedIn(true)
    navigate('/conta/28')
  }

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
            <Btn
              onClick={() => validadeUser(email)}
            >
            </Btn>
          </CardFooter>
        </Card>
      </Flex>
    </ChakraProvider>
  );
};

export default Home;
