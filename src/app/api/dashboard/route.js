
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {headers} from "next/headers"
import { VerifyToken } from "@/app/utility/JwtHelper";
import nodemailer from "nodemailer"


export async function GET(req, res){


        const reqToken = await req.cookies.get('token')
        const result = reqToken['value']
        const verify = await VerifyToken(result)

        const mail = verify['email'];
        console.log(mail)

    //nodemailer.verify

    // const ToEmail = searchParams.get('email');
    const ToEmail = mail;
    //Transporter
    const Transporter = nodemailer.createTransport({
        host: "mail.teamrabbil.com",
        port: 25,
        secure: false,
        auth:{
            user: "info@teamrabbil.com",
            pass: '~sR4[bhaC[Qs'
        },
        tls: {rejectUnauthorized: false}

    })

    //prepare  email
    let myEmail = {
        from: "Test Email From Nextjs app<info@teamrabbil.com>",
        to: ToEmail,
        subject: "Test Email From Nextjs app",
        text: "Test Email From Nextjs app",
    }

    try{
        const resultEmail = await Transporter.sendMail(myEmail);
        return NextResponse.json(
            {status: true, msg: "Email successfully sent ", data: resultEmail, Token: reqToken, verify: verify},
            {status: 200 }

        )
    }
    catch(e){
        return NextResponse.json({msg: "Email successfully failed "})
    }

    //nodemailer.verify
}
