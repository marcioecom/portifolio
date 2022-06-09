import { Box, Container, Link, Text, useColorModeValue } from "@chakra-ui/react";

function Footer() {
  return (
    <Box as="footer" w="100%" p={8} bg={useColorModeValue('gray.100', 'gray.900')} mt={32}>
      <Container maxW="container.lg">
        <Text textAlign={"center"}>
          Feito por <Link color="blue.500" href="http://github.com/marcioecom">Márcio Júnior</Link> com NextJs, ReactJs, Typescript, Golang e ❤️
        </Text>
      </Container>
    </Box>
  )
}

export default Footer;
