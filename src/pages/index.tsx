import { Box, Container, Flex, Heading, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next'
import NextImage from 'next/image';

import Layout from '../components/Layout'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import Illustration from '../assets/illustration.png'
import JsImg from '../assets/js.svg'
import NodeImg from '../assets/node.svg'
import TsImg from '../assets/ts.svg'
import ReactImg from '../assets/react.svg'
import MysqlImg from '../assets/mysql.svg'
import PostgresImg from '../assets/postgres.svg'
import MongodbImg from '../assets/mongodb.svg'
import GolangImg from '../assets/golang.svg'

const skills = [
  { id: "1", name: "Javascript", src: JsImg },
  { id: "2", name: "Typescript", src: TsImg },
  { id: "3", name: "Nodejs", src: NodeImg },
  { id: "4", name: "ReactJs", src: ReactImg },
  { id: "5", name: "MySQL", src: MysqlImg },
  { id: "6", name: "Postgres", src: PostgresImg },
  { id: "7", name: "MongoDB", src: MongodbImg },
  { id: "8", name: "Golang", src: GolangImg },
]

const Home: NextPage = () => {
  const skillTextColor = useColorModeValue("gray.600", "gray.200")

  return (
    <Layout title="Home">
      <NavBar />
      <Container pt={{ base: 32, md: 36 }} maxW="container.lg">
        <Flex direction={{ base: "column", md: "row" }} wrap={"wrap"} align="center" justify="space-between">
          <VStack align={"left"} flex={1}>
            <Text fontSize={"xl"}>Web Developer FullStack 👋</Text>
            <Heading bgClip='text' bgGradient="linear(to-l, #01BAEF,#20BF55)" size={{ base: "2xl", sm: "3xl" }}>Márcio Júnior</Heading>
            <Text fontSize={"lg"} maxW={"lg"} pr={4} pb={4}>
            I&apos;am a Fullstack Javascript/Typescript Developer with proficiency on the
            React/Node Stack. I&apos;m always looking to stay updated using all there are
            of new libs and frameworks.
            </Text>
          </VStack>

          <Flex boxSize={{ base: "xs", sm: "sm", md: "xs", lg: "sm" }}>
            <NextImage src={Illustration} alt="developer illustration" />
          </Flex>
        </Flex>

        <Box mt={32}>
          <Heading size={"2xl"} textAlign="center" bgClip='text' bgGradient="linear(to-l, #01BAEF,#20BF55)">
            Skills
          </Heading>

          <Flex justify="space-between" mt={{ base: 4, md: 10 }} wrap={"wrap"}>
            { skills.map((skill) => (
              <VStack key={skill.id} align="center" m={4}>
                <Text color={skillTextColor} fontSize={"lg"}>{skill.name}</Text>

                <Box boxSize={"100px"}>
                  <NextImage src={skill.src} alt={`logo ${skill.name}`}  />
                </Box>
              </VStack>
            ))}
          </Flex>
        </Box>
      </Container>
    </Layout>
  )
}

export default Home
