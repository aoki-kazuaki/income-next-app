"use client";
import CButton from "@/components/atoms/CButton";
import { CAlert } from "@/components/molecules/CAlert";
import Link from "next/link";
import { FC } from "react";

const TopForGuestAlert: FC = () => {
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
export default TopForGuestAlert;
