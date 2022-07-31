import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiArrowLeft, FiCopy, FiLink, FiSearch } from "react-icons/fi"
import Layout from "../../components/Layout";
import CustomButton from "../../components/Button";
import { api } from "../../services/api";

type Url = {
  id: string;
  shortUrl: string;
  redirectUrl: string;
  clicks: number;
  createdAt: Date;
  updatedAt: Date;
}

const UrlShortener: NextPage = () => {
  const toast = useToast();
  const urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  const router = useRouter();
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [urlId, setUrlId] = useState('');
  const [urlData, setUrlData] = useState<Url>();
  const [loading, setLoading] = useState(false);
  const borderColor = useColorModeValue("#E6E6E6", "#3d3d3d")

  async function handleUrlShortener() {
    try {
      setLoading(true);
      const { data } = await api.post('/urls', {
        shortUrl,
        redirectUrl: url,
      });
      setShortUrl(`${process.env.NEXT_PUBLIC_APP_URL}/r/${data.shortUrl}`);
    } catch (err: any) {
      toast({
        position: "top-right",
        title: "Erro ao encurtar URL",
        description: err.response.data.message.issues[0].message,
        status: "error",
        duration: 3000,
        isClosable: true,
      })
      console.log(err.response.data);
    } finally {
      setLoading(false);
    }
  }

  async function handleGetUrl() {
    try {
      setLoading(true);
      const { data } = await api.get(`/urls/${urlId}?info=true`);
      setUrlData(data);
    } catch (err: any) {
      toast({
        position: "top-right",
        title: "Erro ao buscar URL",
        description: err.response.data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      })
      console.log(err.response.data);
    } finally {
      setLoading(false);
    }
  }

  function handleCopyUrl() {
    navigator.clipboard.writeText(shortUrl);
    toast({
      position: "top-right",
      title: "URL copiada!",
      description: "Agora você pode copiar o link e compartilhar com seus amigos!",
      status: "success",
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <Layout title="Url Shortener">
      <Flex
        py={5}
        position="fixed"
        w="100%"
        zIndex={1}
        backdropFilter="blur(10px)"
        bg={useColorModeValue("rgba(244, 247, 254, 0.2)", "rgba(26, 32, 44, 0.2)")}
      >
        <Container maxW="container.lg">
          <IconButton
            onClick={() => router.back()}
            icon={<FiArrowLeft size={24} />}
            aria-label="back-to-previous-page"
          />
        </Container>
      </Flex>

      <Container pt={{ base: 20, md: 24 }} maxW="container.lg">
        <Heading textAlign={"center"}>Url Shortener</Heading>
        <Text textAlign={"center"}>Encurtador de url</Text>

        <Box maxW="2xl" marginX={"auto"} mt={8}>
          <Tabs isFitted>
            <TabList>
              <Tab>Criar</Tab>
              <Tab>Informações</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Heading size="sm" textAlign="center" mb={4}>
                  Digite uma url que deseje encurtar
                </Heading>
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <FiLink size={20} />
                  </InputLeftElement>
                  <Input
                    placeholder="http://example.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  <CustomButton
                    ml={2}
                    disabled={!urlRegex.test(url)}
                    isLoading={loading}
                    onClick={handleUrlShortener}
                  >
                    Encurtar
                  </CustomButton>
                </InputGroup>

                { shortUrl && (
                  <Flex
                    overflow={"hidden"}
                    margin="auto"
                    mt={8}
                    borderRadius={8}
                    cursor={"pointer"}
                    onClick={handleCopyUrl}
                    borderWidth={1}
                    borderColor={borderColor}
                    borderStyle={"solid"}
                  >
                    <Box
                      bgGradient="linear(to-l, #01BAEF,#20BF55)"
                      p={3}
                      borderTopLeftRadius={8}
                      borderBottomLeftRadius={8}
                    >
                      <FiCopy size={20} color={"#fff"}/>
                    </Box>
                    <Text
                      flex={1}
                      paddingX={4}
                      alignSelf="center"
                    >
                      {shortUrl}
                    </Text>
                  </Flex>
                )}
              </TabPanel>
              <TabPanel>
                <Heading size="sm" textAlign="center" mb={4}>
                  Digite o identificador da url que deseje ver as informações
                </Heading>
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <FiSearch size={20} />
                  </InputLeftElement>
                  <Input
                    value={urlId}
                    onChange={(e) => setUrlId(e.target.value)}
                  />
                  <CustomButton
                    ml={2}
                    disabled={urlId.length < 10}
                    isLoading={loading}
                    onClick={handleGetUrl}
                  >
                    Buscar
                  </CustomButton>
                </InputGroup>

                { urlData && (
                  <UnorderedList mt={4}>
                    <ListItem>Id: { urlData.shortUrl }</ListItem>
                    <ListItem>Url de destino: { urlData.redirectUrl }</ListItem>
                    <ListItem>Clicks: { urlData.clicks }</ListItem>
                    <ListItem>Data de criação: { new Date(urlData.createdAt).toLocaleDateString("pt-br") }</ListItem>
                  </UnorderedList>
                )}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Layout>
  );
}

export default UrlShortener;
