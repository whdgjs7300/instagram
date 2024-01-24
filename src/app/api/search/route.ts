import { searchUsers } from "@/service/user";
import { NextResponse } from "next/server";

// 검색은 로그인이 필요없이 다 사용가능 (세션 정보 필요없음) 
export async function GET() {
    return searchUsers().then(data => NextResponse.json(data))
}