"use client"

import useIsServer from "@/app/useHook/useIsServer";

const HomeItems = ({ content }: { content: string }) => {
  const isServer = useIsServer()

  if (isServer) return (<></>)

  const dom_document = new DOMParser().parseFromString(content, "text/html");
  const news: NodeListOf<Element> = dom_document.querySelectorAll("div.list-fast-news > .item") || [];

  const list = Array.apply(null, Array(news.length)).map((v, key) => news[key])
  const items = list.map((item, key) => {
    const time = item.querySelector("span.time");
    const timeText = (time?.textContent || "").replace("(", "").replace(")", "");
    const title = item.querySelector(".title-wrap > a")?.textContent
    const href = item.querySelector(".title-wrap > a")?.getAttribute("href")?.toString();
    const content = item.querySelector(".nv-details > .abs")?.textContent
    return <div className="item expandable active" key={key}>
      <div className="nv-text-cont">
        <div className="timeTitle time-ago" title={timeText}>{timeText}</div>
        <div className="title-wrap">
          <a target="_blank" className="news-title" href={href} title="{title}">{title}</a>
        </div>
      </div>
      <div className="nv-details">
        <div className="abs">{content}</div>
        <div className="text-right">
          <a target="_blank" className="doctoanbo" href={href} title="{title}">Đọc toàn bộ</a>
        </div>
      </div>
    </div>
  })

  return (
    <>
      {items}
    </>
  );
}

export default HomeItems