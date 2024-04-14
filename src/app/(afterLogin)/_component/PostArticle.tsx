"use client";
import { useRouter } from "next/navigation";
import style from "./post.module.css";
import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
};
function PostArticle({ children, post }: Props) {
  const router = useRouter();
  const onClick = () => {
    router.push(`${post.User.id}/status/${post.postId}`);
  };
  return (
    <article onClickCapture={onClick} className={style.post}>
      {children}
    </article>
  );
}

export default PostArticle;
