import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface IBotao {
  onClick: MouseEventHandler;
}

export const Btn = ({ onClick }: IBotao) => {
  return (
    <Button onClick={onClick} colorScheme="purple" size="lg" width="100%">
      Entrar
    </Button>
  );
};
