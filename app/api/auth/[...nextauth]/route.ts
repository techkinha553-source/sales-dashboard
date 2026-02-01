import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async redirect({ baseUrl }) {
      return `${baseUrl}/dashboard`;
    },
  },
});

export { handler as GET, handler as POST };


// import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";

// const handler = NextAuth({
//   secret: process.env.NEXTAUTH_SECRET,

//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID!,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET!,
//     }),
//   ],

//   pages: {
//     signIn: "/github-login",
//   },

//   callbacks: {
//     async redirect({ baseUrl }) {
//       return `${baseUrl}/dashboard`;
//     },
//   },
// });

// export { handler as GET, handler as POST };

// import NextAuth, { NextAuthOptions } from "next-auth";
// import GithubProvider from "next-auth/providers/github";

// export const authOptions: NextAuthOptions = {
//   debug: true, 

//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID as string,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
//     }),
//   ],

//   pages: {
//     signIn: "/github-login",
//   },

//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };