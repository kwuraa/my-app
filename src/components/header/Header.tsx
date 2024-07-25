import { Box, Button, Center, Flex, Spacer, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
}

export const Header = ({ title }: Props) => {
  const {isLoggedIn ,setIsLoggedIn} = useContext(AppContext);
  const navigate = useNavigate()

  const logout = () => {
    setIsLoggedIn(false)
    navigate("/")
  }

  return (
    <Flex bg="#151515" padding="25px" boxShadow="2xl">
     <Box >
        <Center>
          <Text paddingTop="10px" color="#782cb3" fontSize="35px" as="b">
          {title}
          </Text>
        </Center>
      </Box>
      {
        isLoggedIn && (
          <>
          <Spacer/>
          <Button onClick={() => logout()}>Sair</Button>
          </>
        )
      }
    </Flex> 
  );
};
