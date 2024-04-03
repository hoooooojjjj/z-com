import { ReactNode } from "react";
import styles from "../page.module.css";
export default function Layout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className={styles.container}>
      {children}
      {/* 패러럴 모달을 통해 모달을 사용하려면 @modal과 사용할 파일이 같은 폴더 안에 있어야 한다 */}
      {modal}
    </div>
  );
}
// 주소가 localhost:3000일 때는 children->page.tsx, modal->@modal/default.tsx
// 주소가 localhost:3000/i/flow/login 때는 chldren->i/flow/login/page.tsx, modal->@modal/i/flow/login/page.tsx
// => 패러럴 라우트 폴더 안에서도 여러 경로를 만들 수 있다.
