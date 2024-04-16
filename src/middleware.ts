export { auth as middleware } from "@/auth";
// 앱라우터에서는 미들웨어를 통해서 페이지 접근 권한을 관리하기 쉬워짐.
// auth 함수는 내가 로그인 했는지 안했는지 알아낼 수 있음.
// 미들웨어를 적용할 라우트 => 여기선 로그인을 해야지만 볼 수 있는 경로
export const config = {
  matcher: ["/compose/tweet", "/home", "/explore", "/messages", "/search"],
};
