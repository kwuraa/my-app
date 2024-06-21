import { Box, Center, Text } from "@chakra-ui/react";

interface Props {
  title: string;
}

export const Header = ({ title }: Props) => {
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
