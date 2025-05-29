"use client";
import CButton from "@/components/atoms/CButton";
import { CAlert } from "@/components/molecules/CAlert";
import { LOGIN_USER_AUTH_DEFAULT } from "@/constants/storeDefault";
import { currentUserAtom } from "@/store/currentUserAtom";
import { useAtomValue } from "jotai";
import Link from "next/link";
import { FC } from "react";

const TopOnlyGuestAlert: FC = () => {
  const currentUser = useAtomValue(currentUserAtom);

  /**ユーザーがログイン済みの場合はこのアラートは非表示とする */
  const userIsLogin = !(currentUser.role === LOGIN_USER_AUTH_DEFAULT.role);
  if (userIsLogin) return null;

  const buttonsList = [
    { description: "すでに登録済みの場合は", to: "/login" },
    { description: "アカウントの新規作成は", to: "/register" }
  ];

  return (
    <CAlert alertTitle="あなたも出費の管理をはじめませんか？">
      <ul className="flex flex-col items-center gap-2 py-2">
        {buttonsList.map(item => (
          <li className="flex flex-col items-center gap-2" key={item.to}>
            <p>{item.description}</p>
            <Link href={item.to}>
              <CButton variant="outline">こちら</CButton>
            </Link>
          </li>
        ))}
      </ul>
    </CAlert>
  );
};
export default TopOnlyGuestAlert;
