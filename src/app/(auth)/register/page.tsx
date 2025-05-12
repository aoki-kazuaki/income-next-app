"use client";
import ContainerFillScreen from "@/components/molecules/ContainerFillScreen";
import ContainerFillScreenCard from "@/components/molecules/ContainerFillScreenCard";
import RegisterForm from "@/components/organisms/Register/Form";
import { FC } from "react";

const RegisterPage: FC = () => {
  return (
    <>
      <ContainerFillScreen>
        <ContainerFillScreenCard cardTitle="アカウント新規登録" hiddenLinkToTop={true}>
          <RegisterForm />
        </ContainerFillScreenCard>
      </ContainerFillScreen>
    </>
  );
};
export default RegisterPage;
