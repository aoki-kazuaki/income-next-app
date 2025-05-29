"use client";
import IconGuestUser from "@/assets/Icons/GuestUser";
import { LOGIN_USER_AUTH_DEFAULT } from "@/constants/storeDefault";
import { currentUserAtom } from "@/store/currentUserAtom";
import { useAtomValue } from "jotai";
import Image from "next/image";
import { FC } from "react";

const AppHeaderUserInfo: FC = () => {
  const currentUser = useAtomValue(currentUserAtom);

  const isGuest = currentUser.role === LOGIN_USER_AUTH_DEFAULT.role;

  const avatarUrl = currentUser.avatarUrl ? currentUser.avatarUrl : "https://www.gravatar.com/avatar/?d=mp";

  return (
    <div className="flex items-center gap-1">
      {isGuest && (
        <>
          <div className="rounded-full border">
            <IconGuestUser />
          </div>
          <p>Guest</p>
        </>
      )}
      {!isGuest && (
        <>
          <div className="h-5 w-5 overflow-hidden rounded-full border">
            <Image height={20} width={20} src={avatarUrl} alt="ユーザーアイコン" />
          </div>
          <p>{currentUser.name}</p>
        </>
      )}
    </div>
  );
};

export default AppHeaderUserInfo;
