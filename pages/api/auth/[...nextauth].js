// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { sql } from '@vercel/postgres';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const { email } = user;
      const isWhitelisted = await isWhitelistedUser(email);
      return isWhitelisted;
    }
  }
});

const isWhitelistedUser = async (email) => {
  try {
    const result = await sql`SELECT email FROM whitelist WHERE email = ${email}`;
    return result.rowCount > 0;
  } catch (e) {
    console.log('Error Checking Whitelist', e);
    return false;
  }
}