import { ReactNode } from "react";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

type Props = ButtonProps & {
  children: ReactNode;
}

const Button = ({ children, ...rest }: Props) => {
  return (
    <ChakraButton
      color={"white"}
      bgGradient="linear(to-l, #01BAEF,#20BF55)"
      _hover={{
        bgGradient: 'linear(to-r, teal.500, green.500)',
      }}
      _active={{
        bgGradient: 'linear(to-r, teal.500, green.500)',
      }}
      { ...rest }
    >
      { children }
    </ChakraButton>
  )
}

export default Button;
