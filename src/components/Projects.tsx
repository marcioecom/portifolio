import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import LinkNext from "next/link"

export default function Projects() {
  const techTextColor = useColorModeValue("gray.600", "gray.300")

  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left' py={2}>
              🤖 Webscrapper
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify={"space-between"}
            alignItems={{ base: "stretch", md: "center" }}
            textAlign={{ base: "start", md: "center" }}
            gap={2}
          >
            <Stack direction={{ base: "row", md: "column"}}>
              <Text flex={{ base: 1, md: 0 }} color={techTextColor}>
                Tecnologia
              </Text>
              <Text>Golang</Text>
            </Stack>

            <Stack direction={{ base: "row", md: "column"}}>
              <Text flex={{ base: 1, md: 0 }} color={techTextColor}>Github</Text>
              <Link as={LinkNext} href="https://github.com/marcioecom/go-webscraper">
                <Text as={Link} color="blue.400">
                  Código do projeto
                </Text>
              </Link>
            </Stack>

            <Stack direction={{ base: "row", md: "column"}}>
              <Text flex={{ base: 1, md: 0 }} color={techTextColor}>Descrição</Text>
              <Text maxW={{ base: "xs" }} textAlign={{ base: "end", md: "center" }}>
                Um projeto feito em Golang que realiza a extração de dados de uma página web.
              </Text>
            </Stack>
          </Flex>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left' py={2}>
              🔗 Url Shortener&apos;s
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify={"space-between"}
            alignItems={{ base: "stretch", md: "center" }}
            textAlign={{ base: "start", md: "center" }}
            gap={2}
          >
            <Stack direction={{ base: "row", md: "column"}}>
              <Text flex={{ base: 1, md: 0 }} color={techTextColor}>
                Tecnologia
              </Text>
              <Text>Golang</Text>
            </Stack>

            <Stack direction={{ base: "row", md: "column"}}>
              <Text flex={{ base: 1, md: 0 }} color={techTextColor}>Github</Text>
              <Link as={LinkNext} href="https://github.com/marcioecom/goly">
                <Text as={Link} color="blue.400">
                  Código do projeto
                </Text>
              </Link>
            </Stack>

            <Stack direction={{ base: "row", md: "column"}}>
              <Text flex={{ base: 1, md: 0 }} color={techTextColor}>Descrição</Text>
              <Text maxW={{ base: "xs" }} textAlign={{ base: "end", md: "center" }}>
                Um projeto feito NodeJs que encurta links como o bit.ly.
              </Text>
            </Stack>
          </Flex>
          <Divider marginY={4} />
          <Flex
            direction={{ base: "column", md: "row" }}
            justify={"space-between"}
            alignItems={{ base: "stretch", md: "center" }}
            textAlign={{ base: "start", md: "center" }}
            gap={2}
          >
            <Stack direction={{ base: "row", md: "column"}}>
              <Text flex={{ base: 1, md: 0 }} color={techTextColor}>
                Tecnologia
              </Text>
              <Text>NodeJs</Text>
            </Stack>

            <Stack direction={{ base: "row", md: "column"}}>
              <Text flex={{ base: 1, md: 0 }} color={techTextColor}>Github</Text>
              <Link as={LinkNext} href="https://github.com/marcioecom/go-webscraper">
                <Text as={Link} color="blue.400">
                  Código do projeto
                </Text>
              </Link>
            </Stack>

            <Stack direction={{ base: "row", md: "column"}}>
              <Text flex={{ base: 1, md: 0 }} color={techTextColor}>Descrição</Text>
              <Text maxW={{ base: "xs" }} textAlign={{ base: "end", md: "center" }}>
                Um projeto feito Golang que encurta links como o bit.ly.
              </Text>
            </Stack>
          </Flex>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left' py={2}>
              🎥 Video Transcoder
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify={"space-between"}
            alignItems={{ base: "stretch", md: "center" }}
            textAlign={{ base: "start", md: "center" }}
            gap={2}
          >
            <Stack direction={{ base: "row", md: "column"}}>
              <Text flex={{ base: 1, md: 0 }} color={techTextColor}>
                Tecnologia
              </Text>
              <Text>NodeJs</Text>
            </Stack>

            <Stack direction={{ base: "row", md: "column"}}>
              <Text flex={{ base: 1, md: 0 }} color={techTextColor}>Github</Text>
              <Link as={LinkNext} href="https://github.com/marcioecom/video-transcoder">
                <Text as={Link} color="blue.400">
                  Código do projeto
                </Text>
              </Link>
            </Stack>

            <Stack direction={{ base: "row", md: "column"}}>
              <Text flex={{ base: 1, md: 0 }} color={techTextColor}>Descrição</Text>
              <Text maxW={{ base: "xs" }} textAlign={{ base: "end", md: "center" }}>
                Um projeto feito em NodeJs que realiza a conversão de vídeos para outras resoluções e também faz thumbnail.
              </Text>
            </Stack>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}