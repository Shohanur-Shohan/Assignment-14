/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        JWT_SECRET: '123-123',
        JWT_EXPIRATION: '24h',
        JWT_ISSUER: 'shohanurshohan.com'
    },
}

module.exports = nextConfig
