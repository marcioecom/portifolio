import {
  Badge,
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi"
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Pagination from "../../components/Pagination";

type Job = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  offers: string;
  url: string;
  interested: string;
  seenAt: Date;
  timeLeft: number;
  publishedAt: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

type IData = {
  length: number;
  jobs: Job[];
  totalJobs: number;
}

const Crawler: NextPage = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IData>();

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.marciojrdev.com/v1/jobs?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setData(data);
          setLoading(false);
        }, 500);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [page])

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

        <Pagination
          page={page}
          setPage={setPage}
          jobsLength={data?.length}
          totalJobs={data?.totalJobs}
        />

        { data?.jobs && data.jobs.length === 0 && (
          <Text mt={8} fontSize={'lg'} textAlign={"center"}>
            Acabou os resultados.
          </Text>
        )}

        { loading && Array.from({ length: 5 }).map((_, i) => (
          <Stack key={i} marginY={8}>
            <Skeleton height='30px' maxW={"sm"} />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
          </Stack>
        ))}

        { data?.jobs && data.jobs.map((job) => (
          <Box key={job.id} marginY={8}>
            <Heading size={"md"} as={Link} href={job.url}>
              {job.title}
            </Heading>
            <Text>Propostas: {job.offers} | Interessados: {job.interested}</Text>
            <Text marginY={2} fontSize={"md"}>{job.description.substring(0, 250)}...</Text>
            <HStack gap={2} wrap={"wrap"}>
              { job.tags.map((tag) => (
                <Badge key={tag} colorScheme='blue'>{tag}</Badge>
              ))}
            </HStack>
          </Box>
        ))}

        { data?.jobs && data.jobs.length > 0 && (
          <Pagination
            page={page}
            setPage={setPage}
            jobsLength={data.length}
          />
        )}
      </Container>
    </Layout>
  );
}

export default Crawler;
