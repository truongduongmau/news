"use client"

import { useEffect, useRef } from "react";
import useIsServer from "../useHook/useIsServer";

const Home = ({ content }) => {
  const isServer = useIsServer()
  const fastNews = useRef<HTMLDivElement>(null)
  if (isServer) return (<></>)

  const dom_document = new DOMParser().parseFromString(content, "text/html");
  const news: NodeListOf<Element> = dom_document.querySelectorAll("div.list-fast-news > .item") || [];
  debugger
  //const list = Array.apply(null, Array(news.length)).map((v, key) => news[key])
  //const items = list.map((item, key) => fastNews.current = item)

  //fastNews.current. = news[0] as HTMLDivElement

  news.forEach((item, key) => {document.getElementById("fastNews")?.append(item) })

return (
  <>
    <div id="fastNews"></div>
  </>
);
}

export default Home