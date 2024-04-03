"use client";

import Image from "next/image";
import Link from "next/link";
import zLogo from "../../../../public/zlogo.png";
import styles from "../../page.module.css";
import { useRouter } from "next/navigation";

export default function login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image src={zLogo} alt="logo" />
        </div>
        <div className={styles.right}>
          <h1>지금 일어나고 있는 일</h1>
          <h2>지금 가입하세요.</h2>
          <Link href="/i/flow/signup" className={styles.signup}>
            계정 만들기
          </Link>
          <h3>이미 트위터에 가입하셨나요?</h3>
          <Link href="/login" className={styles.login}>
            로그인
          </Link>
        </div>
      </div>
    </>
  );
}

// useRouter().push
// localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
// ** 뒤로 가기 시 : localhost:3000/i/flow/login -> localhost:3000/login

// useRouter().replace
// localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
// ** 뒤로 가기 시 : localhost:3000/i/flow/login -> localhost:3000
