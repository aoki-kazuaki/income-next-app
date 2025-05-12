"use client";
import IconGuestUser from "@/assets/Icons/GuestUser";
import { LOGIN_USER_AUTH_DEFAULT } from "@/constants/storeDefault";
import { loginUserAuthAtom } from "@/store/loginUserAuth";
import { useAtomValue } from "jotai";
import { FC } from "react";

const AppHeaderUserInfo: FC = () => {
  const userAuth = useAtomValue(loginUserAuthAtom);

  return (
    <div>
      {userAuth.role === LOGIN_USER_AUTH_DEFAULT.role && (
        <div className="flex items-center gap-1">
          <div className="border- rounded-full">
            <IconGuestUser />
          </div>
          <p>Guest</p>
        </div>
      )}
    </div>
  );
};
export default AppHeaderUserInfo;
