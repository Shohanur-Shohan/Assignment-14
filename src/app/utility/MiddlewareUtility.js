import { NextResponse } from "next/server";
import { VerifyToken } from "./JwtHelper"

export async  function CheckCookieAuth(req){

    try{

        const token = req.cookies.get('token');
        const payload = await VerifyToken(token['value']);
        const requestHeaders = new Headers(req.headers);
        requestHeaders.set('email', payload['email']);
        
        return NextResponse.next({
            request:{headers:requestHeaders},
        })
        

    }catch(e){
        
        return NextResponse.redirect(new URL('/login', req.url));

    }
}