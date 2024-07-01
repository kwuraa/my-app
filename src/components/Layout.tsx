import { Box } from "@chakra-ui/react";
import { Header } from "./header/Header";

export const Layout = ({ children }: any) => {
  return (
    <Box backgroundColor="#1e192d" minHeight="100vh">
      <Header title={"Dio.Bank"} />
      {children}
    </Box>
  );
};
