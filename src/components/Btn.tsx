import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface IDButton {
  onClick: MouseEventHandler;
}

export const Btn = ({ onClick }: IDButton) => {
  return (
    <Button onClick={onClick} colorScheme="purple" size="lg" width="100%">
      Entrar
    </Button>
  );
};

export default Btn;
