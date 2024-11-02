import Home from "./home/page";

export default async function App() {
  const url = "https://cafef.vn/doc-nhanh/trang-1.chn";
  const data = await fetch(`http://localhost:3000/api?url=${url}`, { cache: 'no-store' })
  const content = await data.text()

  return (
    <>
      <Home content={content} />
    </>
  );
}
