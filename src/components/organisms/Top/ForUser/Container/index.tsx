"use client";
import { CURRENT_USER_DEFAULT } from "@/constants/storeDefault";
import { currentUserAtom } from "@/store/currentUserAtom";
import { useAtomValue } from "jotai";
import { FC } from "react";
import TopForUserAlert from "../Alert";

const TopForUserContainer: FC = () => {
  const currentUser = useAtomValue(currentUserAtom);

  const isGuest = currentUser.role === CURRENT_USER_DEFAULT.role;
  if (isGuest) return null;

  return <TopForUserAlert currentUser={currentUser} />;
};

export default TopForUserContainer;
