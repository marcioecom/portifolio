import { Box, Container, Flex, Heading, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next'
import NextImage from 'next/image';

import Layout from '../components/Layout'
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';

import Illustration from '../assets/illustration.png'
import JsImg from '../assets/js.svg'
import NodeImg from '../assets/node.svg'
import TsImg from '../assets/ts.svg'
import ReactImg from '../assets/react.svg'
import MysqlImg from '../assets/mysql.svg'
import PostgresImg from '../assets/postgres.svg'
import MongodbImg from '../assets/mongodb.svg'
import GolangImg from '../assets/golang.svg'
import JestImg from '../assets/jest.svg'
import NextImg from '../assets/nextjs.svg'
import GitImg from '../assets/git.svg'
import GithubImg from '../assets/github.svg'
import HerokuImg from '../assets/heroku.svg'
import VercelImg from '../assets/vercel.svg'

const skills = [
  { id: "1", name: "Git", src: GitImg },
  { id: "2", name: "Github", src: GithubImg },
  { id: "3", name: "Javascript", src: JsImg },
  { id: "4", name: "Typescript", src: TsImg },
  { id: "5", name: "ReactJs", src: ReactImg },
  { id: "6", name: "NextJs", src: NextImg },
  { id: "7", name: "Nodejs", src: NodeImg },
  { id: "8", name: "Jest", src: JestImg },
  { id: "9", name: "MySQL", src: MysqlImg },
  { id: "10", name: "Postgres", src: PostgresImg },
  { id: "11", name: "MongoDB", src: MongodbImg },
  { id: "12", name: "Golang", src: GolangImg },
  { id: "13", name: "Heroku", src: HerokuImg },
  { id: "14", name: "Vercel", src: VercelImg },
]

const Home: NextPage = () => {
  const skillTextColor = useColorModeValue("gray.600", "gray.200")

  return (
    <Layout title="Home">
      <NavBar />
      <Container pt={{ base: 32, md: 36 }} maxW="container.lg" id="Sobre">
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

        <Box pt={32} id="Skills">
          <Heading size={"2xl"} textAlign="center" bgClip='text' bgGradient="linear(to-l, #01BAEF,#20BF55)">
            Skills
          </Heading>

          <Flex justify="space-evenly" mt={{ base: 4, md: 10 }} wrap={"wrap"}>
            { skills.map((skill) => (
              <VStack key={skill.id} align="center" m={4}>
                <Text color={skillTextColor} fontSize={"lg"}>{skill.name}</Text>

                <Box boxSize={"100px"}>
                  <NextImage src={skill.src} alt={`logo ${skill.name}`} style={{ flex: 1 }} />
                </Box>
              </VStack>
            ))}
          </Flex>
        </Box>

        <Box mt={32} id="Projetos">
          <Heading size={"2xl"} textAlign="center" bgClip='text' bgGradient="linear(to-l, #01BAEF,#20BF55)">
            Projetos
          </Heading>

          <Box mt={{ base: 4, md: 10 }}>
            <Projects />
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default Home
