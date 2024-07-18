import { Box, Center, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../AppContext";

interface Props {
  title: string;
}

export const Header = ({ title }: Props) => {
  const context = useContext(AppContext);

  console.log("retorno do header", context);

  return (
    <Box bg="#151515" padding="25px" boxShadow="2xl">
      <Center>
        <Text paddingTop="10px" color="#782cb3" fontSize="35px" as="b">
          {title}
        </Text>
      </Center>
    </Box>
  );
};
