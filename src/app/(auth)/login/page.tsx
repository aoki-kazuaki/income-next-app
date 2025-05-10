import ContainerFillScreen from "@/components/molecules/ContainerFillScreen";
import ContainerFillScreenCard from "@/components/molecules/ContainerFillScreenCard";
import LoginForm from "@/components/organisms/Login/Form";
import { FC } from "react";

const LoginPage: FC = () => {
  return (
    <ContainerFillScreen>
      <ContainerFillScreenCard cardTitle="ログインページ">
        <LoginForm />
      </ContainerFillScreenCard>
    </ContainerFillScreen>
  );
};
export default LoginPage;
