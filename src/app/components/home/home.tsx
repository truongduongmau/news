import HomeMain from "./home-main";

const Home = async () => {
  const apiUrl = process.env.API_URL;
  const localhost = process.env.LOCAL_HOST
  const salt = (new Date()).getTime();
  const page = 1;

  const url = `${apiUrl}/doc-nhanh/trang-${page}.chn?${salt}`;
  //const data = await fetch(`${localhost}/api?url=${url}`, { cache: 'no-store' })
  //const content = await data.text();

  const data = await fetch(url)
  const content = await data.text();

  return (
    <>
      <HomeMain content={content}></HomeMain>
    </>
  );
}

export default Home