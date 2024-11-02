import { useCallback, useState } from "react";
import Home from "./home/page";

export default async function App() {
  const salt = (new Date()).getTime();
  
  const url = `${apiUrl}/doc-nhanh/trang-${page}.chn?${salt}`;
  const data = await fetch(`http://localhost:3000/api?url=${url}`, { cache: 'no-store' })
  const content = await data.text()

  return (
    <>
      <Home content={content} />
    </>
  );
}
