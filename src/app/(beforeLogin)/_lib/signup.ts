"use server";

import { redirect } from "next/navigation";

export default async (prevState: any, formData: FormData) => {
  // formData -> input의 name을 활용하여 form data를 가져올 수 있다
  if (!formData.get("id") || !(formData.get("id") as string)?.trim()) {
    return { message: "no_id" };
  }
  if (!formData.get("name") || !(formData.get("name") as string)?.trim()) {
    return { message: "no_name" };
  }
  if (
    !formData.get("password") ||
    !(formData.get("password") as string)?.trim()
  ) {
    return { message: "no_password" };
  }
  if (!formData.get("image")) {
    return { message: "no_image" };
  }
  let shouldRedirect = false;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: "post",
        body: formData,
        credentials: "include", // 이게 있어야 쿠키가 전달됨
      }
    );
    console.log(response.status);
    if (response.status === 403) {
      return { message: "user_exists" };
    }
    console.log(await response.json());
    shouldRedirect = true;
  } catch (err) {
    console.log(err);
    return { message: null };
  }
  if (shouldRedirect) {
    redirect("/home"); // redirect는 try/catch문 안에서 절대 XX
    return undefined;
  }
};
