"use client";

import { useRouter } from "next/navigation";
import Main from "../_component/Main";

export default function login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <Main />;
}

// useRouter().push
// localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
// ** 뒤로 가기 시 : localhost:3000/i/flow/login -> localhost:3000/login

// useRouter().replace
// localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
// ** 뒤로 가기 시 : localhost:3000/i/flow/login -> localhost:3000
