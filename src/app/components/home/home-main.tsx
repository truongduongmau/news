"use client"

import { useCallback, useState } from "react";
import HomeItems from "./home-items";

const HomeMain = ({ content }: { content: string }) => {
  const [isLoading, setIsLoading] = useState(false)

  const nextPage = useCallback(() => {
    setIsLoading(true)
  }, [])

  return (
    <>
      <div className="fastnews-main">
        <h1 className="tinnhanh_title">
          <span>Tin mới cập nhật</span>
        </h1>
        <div className="nviewer" id="fastnews-main-contents">
          <HomeItems content={content} />
        </div>
        <div hidden={!isLoading} className="loadingio-spinner-spinner-l1xppaoi24" >
          <div className="ldio-jkw3q3bi0aa">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div style={{ cursor: "pointer" }} className="buttons"><button className="card card-small" onClick={() => nextPage()}>Đọc thêm</button></div>
      </div>
    </>
  );
}

export default HomeMain