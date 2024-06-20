import { ChakraProvider } from "@chakra-ui/react";
import { CardIndex } from "./components/Card";

import { login } from "./services/login";
import { Header } from "./components/header/Header";

function App() {
  return (
    <ChakraProvider>
      <Header title={"Bank"} />
      <CardIndex event={login} />
    </ChakraProvider>
  );
}

export default App;
