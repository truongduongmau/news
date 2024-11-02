import HomeMain from "./home-main";
import { loadPosts } from '../../lib/redirect'

export async function getStaticProps() {
  const apiUrl = process.env.API_URL;
  const localhost = process.env.LOCAL_HOST
  const salt = (new Date()).getTime();
  const page = 1;

  const url = `${apiUrl}/doc-nhanh/trang-${page}.chn?${salt}`;
  const data = await loadPosts(url)

  return await data.text();
}

const Home = async () => {
  const apiUrl = process.env.API_URL;
  const localhost = process.env.LOCAL_HOST
  const salt = (new Date()).getTime();
  const page = 1;

  const url = `${apiUrl}/doc-nhanh/trang-${page}.chn?${salt}`;
  const data = await fetch(`${localhost}/api?url=${url}`, { cache: 'no-store' })
  //const content = await data.text();
  const content = await getStaticProps();
  return (
    <>
      <HomeMain content={content}></HomeMain>
    </>
  );
}

export default Home
