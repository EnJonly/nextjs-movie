import Layout from "../../components/Layout";
import Swiper, { loadSwiper } from "../../components/Swiper"
import Movie, { loadMovie } from "../../components/Movie";

export default function Home({swiper, movie}) {
  return (
    <Layout>
      <Swiper data={swiper} />
      <Movie data={movie} title="电影" />
    </Layout>
  )
}

export async function getStaticProps() {
  let { data: swiper } = await loadSwiper()
  let { data: movie } = await loadMovie()
  return {
    props: {
      swiper,
      movie
    }
  }
}
