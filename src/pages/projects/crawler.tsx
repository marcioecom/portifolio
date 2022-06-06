import {
  Badge,
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi"
import Layout from "../../components/Layout";

type Job = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  offers: string;
  interested: string;
  seenAt: Date;
  timeLeft: number;
  publishedAt: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

const Crawler: NextPage = () => {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>();

  useEffect(() => {
    fetch("https://api.marciojrdev.com/v1/jobs")
      .then((res) => res.json())
      .then((data) => setTimeout(() => setJobs(data), 500));
  }, [])

  return (
    <Layout title="Crawler">
      <Flex
        py={5}
        position="fixed"
        w="100%"
        zIndex={1}
        backdropFilter="blur(10px)"
        bg={useColorModeValue("rgba(244, 247, 254, 0.2)", "rgba(26, 32, 44, 0.2)")}
      >
        <Container maxW="container.lg">
          <IconButton onClick={() => router.back()} icon={<FiArrowLeft size={24} />} aria-label="back-to-previous-page"/>
        </Container>
      </Flex>

      <Container pt={{ base: 20, md: 24 }} maxW="container.lg">
        <Heading textAlign={"center"}>Crawler</Heading>
        <Text textAlign={"center"}>Freelas retirados do site 99Freelas</Text>
        <Text textAlign={"center"}>
          A cada 1 hora o crawler busca novos jobs e atualiza os dados mostrados nessa página.
        </Text>
        <Divider mt={8} />

        { jobs ? jobs.map((job) => (
          <Box key={job.id} marginY={8}>
            <Heading size={"md"}>{job.title}</Heading>
            <Text>Propostas: {job.offers} | Interessados: {job.interested}</Text>
            <Text marginY={2} fontSize={"md"}>{job.description.substring(0, 250)}...</Text>
            <HStack>
              { job.tags.map((tag) => (
                <Badge key={tag} colorScheme='blue'>{tag}</Badge>
              ))}
            </HStack>
          </Box>
        )) : (
          <Stack marginY={8}>
            <Skeleton height='30px' w={"sm"} />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
          </Stack>
        ) }
      </Container>
    </Layout>
  );
}

export default Crawler;
