/** @format */

import { db } from '@/lib/db'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextAuthOptions, getServerSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET as string,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
        session.user.credits = token.credits;
      }
      return session
    },
    async jwt({ token }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      })
      if (dbUser) {
        token.id = dbUser!.id
        token.credits = dbUser?.credits;
      }
      return token
    },
    redirect({url, baseUrl}) {
      return url
    },
  },
}

export const getAuthSession = () => getServerSession(authOptions)