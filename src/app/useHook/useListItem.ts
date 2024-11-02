import { useEffect, useState } from "react";

const useListItem = (content: string) => {
    const [news, setNews] = useState<NodeListOf<Element>>();

    useEffect(() => {
        const dom_document = new DOMParser().parseFromString(content, "text/html");
        setNews(dom_document.querySelectorAll("div.list-fast-news > .item") || []);
        console.log(news)
    
      }, []);

      return news
}

export default useListItem