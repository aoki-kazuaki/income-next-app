import ContainerFillScreen from "@/components/molecules/ContainerFillScreen";
import LoginForm from "@/components/organisms/Login/Form";
import { FC } from "react";

const LoginPage: FC = () => {
  return (
    <ContainerFillScreen>
      <div className="flex h-full items-center justify-center">
        <div className="w-full rounded-2xl border-4 border-cyan-300 bg-white py-4 lg:max-w-6/12">
          <div className="flex flex-col gap-6">
            <h1 className="text-center text-2xl font-bold">ログインページ</h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </ContainerFillScreen>
  );
};
export default LoginPage;
