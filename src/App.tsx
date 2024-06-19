import styled from "styled-components";
import { ChakraProvider, Input, Box, Flex, Button } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor=" #1e1a2c" padding="25px">
        <Flex justifyContent="Center">
          <Box
            alignContent="center"
            minHeight="40vh"
            backgroundColor="#fff"
            borderRadius="25px"
            padding="15px"
          >
            <Flex justifyContent="center">
              <h1>Faça Login</h1>
            </Flex>
            <Input placeholder="E-mail" margin="15px 0" />
            <Input placeholder="Password" type="password" />
            <Button
              colorScheme="purple"
              size="md"
              width="100%"
              marginTop="25px"
            >
              Login
            </Button>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
