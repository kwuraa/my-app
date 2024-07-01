import { Box } from "@chakra-ui/react";

interface ICardInfo {
  text: string;
}

const CardInfo = ({ text }: ICardInfo) => {
  return (
    <Box bgColor="white" minHeight="120px" padding={8}>
      {text}
    </Box>
  );
};

export default CardInfo;
