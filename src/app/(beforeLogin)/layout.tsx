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
