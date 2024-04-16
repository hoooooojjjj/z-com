import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// auth는 내가 로그인했는지 안했는지 알아낼 수 있음.
// handlers는 API라우트
export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  // 우리가 만든 페이지로 로그인, 회원가입 페이지가 이동하도록.
  pages: {
    signIn: "/i/flow/login",
    newUser: "/i/flow/signup",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const authResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}}/api/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            // 우리는 유저 아이디와 password를 id와 password로 만들었기 때문에 수정
            body: JSON.stringify({
              id: credentials.username,
              password: credentials.password,
            }),
          }
        );

        if (!authResponse.ok) {
          return null;
        }

        const user = await authResponse.json();
        console.log("user", user);
        return {
          email: user.id,
          name: user.nickname,
          image: user.image,
          ...user,
        };
      },
    }),
  ],
});
