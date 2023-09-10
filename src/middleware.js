import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { CheckCookieAuth } from "./app/utility/MiddlewareUtility";


export async function middleware(req, res){

    if (req.nextUrl.pathname.startsWith('/dashboard')){
        return await CheckCookieAuth(req);
    }
}