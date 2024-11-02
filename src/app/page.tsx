import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  const url = "https://cafef.vn/doc-nhanh/trang-1.chn";
  const data = await fetch(`http://localhost:3001/api?url=${url}`, { cache: 'no-store' })
  const posts = await data.text()
  console.log(posts)
  return (
    <>
    <div>{posts}</div>
    </>
  );
}
