import NextAuth from "next-auth";

// auth는 내가 로그인했는지 안했는지 알아낼 수 있음.
// handlers는 API라우트
export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [],
});
