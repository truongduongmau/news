import { redirect } from "next/navigation"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const url = searchParams.get('url') || "/"

  redirect(url)
}