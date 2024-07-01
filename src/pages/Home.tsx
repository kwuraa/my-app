import { ChakraProvider } from "@chakra-ui/react";
import { CardIndex } from "../components/Card";

const Home = () => {
  return (
    <ChakraProvider>
      <CardIndex />
    </ChakraProvider>
  );
};

export default Home;
