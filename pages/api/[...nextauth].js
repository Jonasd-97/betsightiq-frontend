import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          throw new Error("Email and password required");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          throw new Error("No user found with this email");
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

        if (!isPasswordValid) {
          throw new Error("Incorrect password");
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt", // Using JWT strategy for sessions
  },
  secret: process.env.NEXTAUTH_SECRET, // Make sure this env var is set
  pages: {
    signIn: "/login", // Optional: Redirect to your custom login page
    error: "/login",  // Error page
  },
});
