import { useCallback, useState } from "react";
import Home from "./home/page";

export default async function App() {
  const apiUrl = process.env.API_URL;
  const localhost = process.env.LOCAL_HOST
  const salt = (new Date()).getTime();
  const page = 1;

  const url = `${apiUrl}/doc-nhanh/trang-${page}.chn?${salt}`;
  const data = await fetch(`${localhost}/api?url=${url}`, { cache: 'no-store' })
  const content = await data.text() || "";

  return (
    <>
      <Home content={content} />
    </>
  );
}
