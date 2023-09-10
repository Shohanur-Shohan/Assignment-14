import { CreateToken } from "./JwtHelper";

export async function TokenCookie(email){

    const token = await CreateToken(email);
    return {'Set-Cookie': `token=${token}; Max-Age=86400; Secure; HttpOnly; Path=/; SameSite=Strict; `}
}
