import { ChakraProvider } from "@chakra-ui/react";
import { CardIndex } from "./components/Card";

// import { login } from "./services/login";
import { Header } from "./components/header/Header";

function App() {
  return (
    <ChakraProvider>
      <Header title={"DIO. Bank"} />
      <CardIndex />
    </ChakraProvider>
  );
}

export default App;
