"use client";
import IconGuestUser from "@/assets/Icons/GuestUser";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import Image from "next/image";
import { FC } from "react";

const AppHeaderUserInfo: FC = () => {
  const { currentUser, isGuest, isLoggedIn, currentUserLoading } = useCurrentUser();

  const avatarUrl = currentUser.avatarUrl ? currentUser.avatarUrl : "https://www.gravatar.com/avatar/?d=mp";

  if (currentUserLoading) return <p>Loading...</p>;

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
      {isLoggedIn && (
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
