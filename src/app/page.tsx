import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  const data = await fetch('https://truongduongmau.github.io/news/api')
  //const data = await fetch('http://localhost:3000/api')
  const posts = await data.json()
  
  return (
    <>
    {posts.data}
    </>
  );
}
