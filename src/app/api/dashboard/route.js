import { NextResponse } from "next/server";
import { VerifyToken } from "@/app/utility/JwtHelper";
import nodemailer from "nodemailer";

export async function GET(req, res) {
    try {
        const reqToken = await req.cookies.get('token');

        if (!reqToken) {
            // Handle the case where 'token' cookie is not set
            return NextResponse.json({ msg: "Token not found" }, { status: 400 });
        }

        const verify = await VerifyToken(reqToken['value']);
        const mail = verify['email'];

        const ToEmail = mail;
        // console.log(ToEmail)
        
        // Transporter
        const Transporter = nodemailer.createTransport({
            host: "mail.teamrabbil.com",
            port: 25,
            secure: false,
            auth: {
                user: "info@teamrabbil.com",
                pass: '~sR4[bhaC[Qs'
            },
            tls: { rejectUnauthorized: false }
        });

        // Prepare email
        let myEmail = {
            from: "Test Email From Nextjs app<info@teamrabbil.com>",
            to: ToEmail,
            subject: "Test Email From Nextjs app",
            text: "Test Email From Nextjs app",
        };

        const resultEmail = await Transporter.sendMail(myEmail);

        return NextResponse.json(
            { status: true, msg: "Email successfully sent ", data: resultEmail, Token: reqToken, verify: verify },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ msg: "Email send failed" }, { status: 500 });
    }
}
