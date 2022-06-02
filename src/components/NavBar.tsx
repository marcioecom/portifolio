import { ReactNode } from "react";
import { Box, Container, Flex, HStack, IconButton, Link, Stack, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import SwitchTheme from "./SwitchTheme";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const Links = ['Sobre', 'Skills', 'Projetos', 'Contato'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      py={5}
      position="fixed"
      w="100%"
      zIndex={1}
      backdropFilter="blur(10px)"
      bg={useColorModeValue("rgba(244, 247, 254, 0.2)", "rgba(26, 32, 44, 0.2)")}
    >
      <Container maxW="container.lg">
        <Flex align={"center"} justify={"space-between"}>
          <Text>Logo</Text>

          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
            <SwitchTheme />
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} pt={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <SwitchTheme />
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Flex>
  )
}

export default NavBar
