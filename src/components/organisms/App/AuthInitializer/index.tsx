"use client";
import browserHttpClient from "@/lib/browserHttpClient";
import { currentUserAtom } from "@/store/currentUserAtom";
import { currentUserLoadingAtom } from "@/store/currentUserLoadingAtom";
import { AxiosResponse } from "axios";
import { useSetAtom } from "jotai";
import { FC, useEffect } from "react";

/**クライアントマウント時にのみ実行されるvoidロジックと状態管理のみを集約するコンポーネント */
const AppAuthInitializer: FC = () => {
  const setCurrentUserAtom = useSetAtom(currentUserAtom);
  const setCurrentUserLoadingAtom = useSetAtom(currentUserLoadingAtom);

  const fetchUser = async () => {
    setCurrentUserLoadingAtom(true);
    try {
      const isLogin = await browserHttpClient.get("/api/auth/me");
      if (!isLogin.data.isLoggedIn) return;
      const userInfo: AxiosResponse = await browserHttpClient.get("/api/users/me");
      setCurrentUserAtom(userInfo.data.user);
    } catch (error) {
      console.log(error);
    } finally {
      setCurrentUserLoadingAtom(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return null;
};
export default AppAuthInitializer;
