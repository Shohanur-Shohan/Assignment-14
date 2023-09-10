import { TokenCookie } from "@/app/utility/TokenCookie";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {cookies} from "next/headers"

export async function POST(req, res){

    const JsonBody = await req.json();
    const email = JsonBody['email'];
    const password = JsonBody['password'];
    //checking database

        const Cookie = await TokenCookie(email)
        return NextResponse.json(
            {status: true, message: "Request success"},
            {status: 200, headers: Cookie}
        )


}

export async function GET(req, res){

     cookies().delete('token');
     return NextResponse.json(
        {status: true, message: "Logout Request success"},
     )
}