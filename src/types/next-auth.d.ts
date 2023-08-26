/* eslint-disable no-unused-vars */

import type { Session, User, DefaultSession } from "next-auth"
import type { JWT } from "next-auth/jwt"

type UserId = string

declare module "next-auth/jwt" {
  interface JWT {
      id: UserId
      credits: number
  }
 }

declare module "next-auth"{
  interface Session  {
    user: User & {
      id: UserId
      credits: number
    }
  }
}