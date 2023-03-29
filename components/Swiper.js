/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-css-tags */
import { Carousel } from 'react-responsive-carousel'
import Head from 'next/head'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Box, Heading, Text, Button } from '@chakra-ui/react'
import Link from 'next/link'
import axios from '../http'

const CarouselItem = styled.div`
  position: relative;
  & > div {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    color: #fff;
    padding-top: 180px;
    text-align: left;
    width: 100%;
    max-width: 1200px;
    & > p {
      margin: 15px 0;
      font-size: 14px;
      width: 450px;
    }
  }
  & > img {
    filter: brightness(50%);
  }
`

const swiperContatiner = css`
  position: relative;
  & .carousel:last-child {
    position: absolute;
    left: 0;
    bottom: 0;
    & > .thumbs-wrapper > .thumbs {
      display: flex;
      justify-content: center;
    }
  }
`

export default function Swiper({data}) {
  return <>
    <Head css={swiperContatiner}>
      <link rel="stylesheet" href='/css/carousel.min.css' />
    </Head>
    <Box css={swiperContatiner}>
      <Carousel showStatus={false} showArrows={false}>
        {
          data.map(swiper => (
            <CarouselItem key={swiper.id}>
              <img src={swiper.url} alt="" />
              <Box>
                <Heading as="h2" size="lg">{swiper.title}</Heading>
                <Text>{swiper.description}</Text>
                <Button colorScheme="red">
                  <Link legacyBehavior href="/detail/[id]" as={`/detail/${swiper.id}`}><a>CHECK DETALL</a></Link>
                </Button>
              </Box>
            </CarouselItem>
          ))
        }
        {/* <CarouselItem>
          <img src="/images/1.jpg" alt="" />
          <Box>
            <Heading as="h2" size="lg">KING IN BLACK</Heading>
            <Text>The next shocking chapter in Donny Cates and Ryan Stegman’ s Venom Sage is revealed!</Text>
            <Button colorScheme="red">CHECK DETALL</Button>
          </Box>
        </CarouselItem>
        <CarouselItem>
          <img src="/images/2.jpg" alt="" />
        </CarouselItem>
        <CarouselItem>
          <img src="/images/3.jpg" alt="" />
        </CarouselItem> */}
      </Carousel>
    </Box>
  </>
  
}

export function loadSwiper() {
  return axios.get('/api/swiper')
}
