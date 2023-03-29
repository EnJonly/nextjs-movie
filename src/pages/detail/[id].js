import Layout from "../../../components/Layout"
import { Box, Heading, Divider, Text } from "@chakra-ui/react"
import { useRouter } from 'next/router'
import { css } from "@emotion/react"
import axios from "../../../http"

const DetailContainer = css`
  padding: 10px;
  & > p {
    font-size: 14px;
    margin-bottom: 10px;
  }
  & > img {
    margin-bottom: 10px;
    display: block;
  }
`

export default function Detail({ detail }) {
  return <>
    <Layout>
      <Box maxW={1200} mx="auto" mt="70px">
        <Heading as="h2" size="lg">{detail.title}</Heading>
        <Heading as="h4" mt="10px" size="xs" color="gray.500">{detail.sub}</Heading>
        <Divider my="10px" />
        <Box overflow="hidden">
          <Text float="left">作者： {detail.author}</Text>
          <Text float="right">发布时间： {detail.publish}</Text>
        </Box>
        <Divider my="10px" />
        <Box css={DetailContainer} dangerouslySetInnerHTML={{ __html: detail.content }}>
          {/* <p>
            Congrats agents - it appears that many of you successfully completed the latest Marvel Mission!
          </p>
          <p>
            Congrats agents - it appears that many of you successfully completed the latest Marvel Mission!
          </p> */}
        </Box>
      </Box>
    </Layout>
  </>
}

// 获取用户能够访问到的所以路由参数
export async function getStaticPaths() {
  let { data } = await axios.get('/api/videos')
  let paths = data.map(id => ({ params: { id } }))
  return {
    paths,
    fallback: false // 没权限展示404页面
  }
}

//  获取对应数据
export async function getStaticProps({ params }) {
  let { data: detail } = await axios.get('/api/detail', { params: { id: params.id } })
  return {
    props: {
      detail
    }
  }
}