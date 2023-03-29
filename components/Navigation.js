import { Box, HStack } from '@chakra-ui/react'
import Link from 'next/link'

export default function Navigation() {
  return <Box h={53} bgColor="#202020" color="#fff">
    <HStack h={53} spacing={3} justifyContent="center" alignItems="center">
      <Link legacyBehavior href='#'><a>影片</a></Link>
      <Link legacyBehavior href='#'><a>漫画</a></Link>
      <Link legacyBehavior href='#'><a>电影</a></Link>
      <Link legacyBehavior href='#'><a>电视</a></Link>
      <Link legacyBehavior href='#'><a>新闻</a></Link>
    </HStack>
  </Box>
}

