import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react"
import { MdMovie } from "react-icons/md"
import axios from "../http"

export default function Movie({data, title}) {
  return <Box maxW={1200} mx="auto" mt="20px">
    <HStack fontSize="24px">
      <MdMovie />
      <Heading as="h3" fontSize="24px">{title}</Heading>
    </HStack>
    <Flex mt="20px" alignItems="stretch" justifyContent="space-between" flexWrap="wrap" >
      {
        data.map(mv => (
          <Box w={290} my="10px" key={mv.id}>
            <Image src={mv.url} alt="item1" />
            <Text mt="10px">{mv.title}</Text>
          </Box>
        ))
      }
      {/* <Box w={290}>
        <Image src="/images/item_1.jpg" alt="item1" />
        <Text mt="10px">Marvel Mission Recap: Captain Marvel’s Star of Hala</Text>
      </Box>
      <Box w={290}>
        <Image src="/images/item_1.jpg" alt="item1" />
        <Text mt="10px">Marvel Mission Recap: Captain Marvel’s Star of Hala</Text>
      </Box> */}
    </Flex>
  </Box>
}

export function loadMovie() {
  return axios.get('/api/movie')
}

