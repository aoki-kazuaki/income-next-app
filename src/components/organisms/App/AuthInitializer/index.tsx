"use client";
import browserHttpClient from "@/lib/browserHttpClient";
import { currentUserAtom } from "@/store/currentUserAtom";
import { AxiosResponse } from "axios";
import { useSetAtom } from "jotai";
import { FC, useEffect } from "react";

/**クライアントマウント時にのみ実行されるvoidロジックと状態管理のみを集約するコンポーネント */
const AppAuthInitializer: FC = () => {
  const setLoginCurrentUser = useSetAtom(currentUserAtom);

  const fetchUser = async () => {
    try {
      const isLogin = await browserHttpClient.get("/api/auth/me");
      if (!isLogin.data.isLoggedIn) return;
      const userInfo: AxiosResponse = await browserHttpClient.get("/api/users/me");
      setLoginCurrentUser(userInfo.data.user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return null;
};
export default AppAuthInitializer;
