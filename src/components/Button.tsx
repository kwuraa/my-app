import { Button } from "@chakra-ui/react";

interface IBotao {
  title: string;
  event: () => void;
}

export const Btn = ({ title, event }: IBotao) => {
  return (
    <Button onClick={event} colorScheme="purple" size="lg" width="100%">
      {title}
    </Button>
  );
};
