export const revalidate = 60
 
export async function GET() {
  const data = await fetch('https://cafef.vn/doc-nhanh/trang-1.chn')
  const posts = await data.text()
 
  return Response.json({data: posts})
}