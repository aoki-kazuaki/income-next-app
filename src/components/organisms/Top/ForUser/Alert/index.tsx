"use client";
import { CAlert } from "@/components/molecules/CAlert";
import { UserCurrent } from "@/types/user/current";
import { FC } from "react";

type Props = {
  currentUser: UserCurrent;
};

const TopForUserAlert: FC<Props> = ({ currentUser }) => {
  const alertTitle = `ようこそ！${currentUser.name}さん！`;
  return (
    <>
      <CAlert alertTitle={alertTitle}></CAlert>
    </>
  );
};
export default TopForUserAlert;
