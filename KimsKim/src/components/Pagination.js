import { Box, Button, Flex } from "@chakra-ui/react"
import styled from "styled-components"
import { Link } from "gatsby"
import React from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

const BoxStyled = styled.div`
  .current {
    color: purple;
  }
`

const Pagination = ({ totalCount, pageSize, currentPage, skip, base }) => {
  const totalPage = Math.ceil(totalCount / pageSize)
  const prevPage = currentPage - 1
  const nextPage = currentPage + 1
  const hasPrevPage = prevPage >= 1
  const hasNextPage = nextPage <= totalPage
  console.log(pageSize)
  return (
    <BoxStyled>
      <Box my={12}>
        <Flex justify="center" mt={6} mb={6}>
          <Link to={`/personal/${prevPage}`}>
            <Button
              mx={1}
              colorScheme="blue"
              isDisabled={!hasPrevPage}
              leftIcon={<AiOutlineArrowLeft />}
            >
              Prev
            </Button>
          </Link>
          {Array.from({ length: totalPage }, (_, index) => {
            return (
              <Link
                to={`${base}/${index + 1}`}
                key={`page${index}`}
                activeClassName="current"
              >
                <Button
                  mx={1}
                  isActive={currentPage === index + 1}
                  colorScheme="blue"
                >
                  {index + 1}
                </Button>
              </Link>
            )
          })}
          <Link to={`/personal/${nextPage}`}>
            <Button
              mx={1}
              colorScheme="blue"
              isDisabled={!hasNextPage}
              leftIcon={<AiOutlineArrowRight />}
            >
              Next
            </Button>
          </Link>
        </Flex>
      </Box>
    </BoxStyled>
  )
}

export default Pagination
