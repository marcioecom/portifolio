import { Box, Container, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Simple from '../components/NavBar';
import NextImage from 'next/image';

import Illustration from '../assets/illustration.png'

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Simple />
      <Container pt={4} maxW="container.lg">
        <Flex direction={{ base: "column", md: "row" }} wrap={"wrap"} align="center" justify="space-between">
          <VStack align={"left"} flex={1}>
            <Text fontSize={"xl"}>Web Developer FullStack 👋</Text>
            <Heading size={{ base: "2xl", sm: "3xl" }}>Márcio Júnior</Heading>
            <Text fontSize={"lg"}>I&apos;m a Fullstack developer that loves to create new solutions.</Text>
          </VStack>

          <Flex boxSize={{ base: "xs", sm: "sm", md: "xs", lg: "sm" }}>
            <NextImage src={Illustration} alt="developer illustration" />
          </Flex>
        </Flex>
      </Container>
    </Layout>
  )
}

export default Home
