import Home from "./home/page";

export default async function App() {
  const url = "https://cafef.vn/doc-nhanh/trang-1.chn";
  const data = await fetch(`http://localhost:3000/api?url=${url}`, { cache: 'no-store' })
  const content = await data.text()

  return (
    <>
      <div className="fastnews-main">
        <h1 className="tinnhanh_title">
          <span>Tin mới cập nhật</span>
        </h1>
        <div className="nviewer" id="fastnews-main-contents">
          <Home content={content} />
        </div>
        <div className="loadingio-spinner-spinner-l1xppaoi24">
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
        <div className="buttons"><button className="card card-small">Đọc thêm</button></div>
      </div>
    </>
  );
}
