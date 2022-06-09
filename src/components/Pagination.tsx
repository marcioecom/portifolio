import { ButtonGroup, Flex, IconButton, Text, useColorModeValue } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
  jobsLength?: number;
  totalJobs?: number;
}

function Pagination({ page, setPage, jobsLength, totalJobs }: PaginationProps) {
  function handleMinus() {
    if (page === 0) return;
    setPage(page - 1)
  }

  function handlePlus() {
    setPage(page + 1)
  }

  const itemsPerPage = 10;
  const lastItem = page * itemsPerPage > totalJobs! ? totalJobs : page * itemsPerPage;
  const firstItem = page * itemsPerPage- 9;

  return (
    <Flex
      justify="space-between"
      alignItems="center"
      px={4}
      py={2}
      textColor={useColorModeValue("gray.500", "gray.400")}
    >
      <Text fontSize="sm">
        Exibindo {firstItem}-{lastItem} de {totalJobs}
      </Text>

      <ButtonGroup isAttached variant="outline">
        <IconButton
          onClick={handleMinus}
          aria-label='previous page icon'
          icon={<FiChevronLeft />}
          disabled={page === 1}
        />
        <Flex bg={useColorModeValue("gray.100", "gray.700")} justify="center" alignItems="center" px={4} py={2}>
          <Text>{page}</Text>
        </Flex>
        <IconButton
          onClick={handlePlus}
          aria-label='next page icon'
          icon={<FiChevronRight />}
          disabled={jobsLength! < itemsPerPage}
        />
      </ButtonGroup>
    </Flex>
  )
}

export default Pagination;
