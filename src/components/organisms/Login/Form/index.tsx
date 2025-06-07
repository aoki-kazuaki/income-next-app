"use client";
import CButton from "@/components/atoms/CButton";
import FormCInput from "@/components/atoms/Form/CInput";
import FormWithLabelWrapper from "@/components/molecules/FormWithLabelWrapper";
import LoadingDialog from "@/components/molecules/LoadingDialog";
import { useConfirmDialog } from "@/hooks/useDialog";
import useFormLabelId from "@/hooks/useFormLabelId";
import browserHttpClient from "@/lib/browserHttpClient";
import { currentUserAtom } from "@/store/currentUserAtom";
import { FormWithLabelDetail } from "@/types/formUtils";
import { UserLoginRequest } from "@/types/user/login";
import { strConversionMessageServerForClient } from "@/utils/string";
import { YUP_EMAIL_LOGIN, YUP_PASSWORD_LOGIN } from "@/validation/form/rules";
import { yupResolver } from "@hookform/resolvers/yup";
import { isAxiosError } from "axios";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm: FC = () => {
  const router = useRouter();

  const dialog = useConfirmDialog();

  const setCurrentUserAtom = useSetAtom(currentUserAtom);

  const [validationMessage, setValidationMessage] = useState("");

  const [showLoading, setShowLoading] = useState(false);

  const { generateFormLabelId } = useFormLabelId();
  const emailId = generateFormLabelId("e-mail");
  const passwordId = generateFormLabelId("password");

  const thisFormSChema = Yup.object().shape({
    email: YUP_EMAIL_LOGIN,
    password: YUP_PASSWORD_LOGIN
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: yupResolver(thisFormSChema),
    mode: "onBlur"
  });

  const formWithLabels: FormWithLabelDetail[] = [
    {
      label: "email",
      labelWith: true,
      labelBold: true,
      formItemId: emailId,
      formContent: <FormCInput id={emailId} type="email" {...register("email")} />,
      validationMessage: errors.email?.message
    },
    {
      label: "password",
      labelWith: true,
      labelBold: true,
      formItemId: passwordId,
      formContent: <FormCInput type="password" id={passwordId} {...register("password")} />,
      validationMessage: errors.password?.message
    }
  ];

  const onSubmit: SubmitHandler<FormValues> = async data => {
    const ok = dialog({
      title: "ログインしますか？",
      description: "メールアドレスとパスワードでログインします",
      nextLabel: "ログイン",
      cancelLabel: "キャンセル"
    });

    const confirmed = await ok;
    if (!confirmed) return;

    setShowLoading(true);

    const requestBody: UserLoginRequest = {
      email: data.email,
      password: data.password
    };

    try {
      await browserHttpClient.post("/api/auth/login", requestBody, {
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        withCredentials: true
      });
      const userMeResponse = await browserHttpClient.get("api/users/me");
      setCurrentUserAtom(userMeResponse.data.user);
      router.push("/");
    } catch (err) {
      if (!isAxiosError(err)) return;
      const extractMessage = strConversionMessageServerForClient(err.response?.data.message);
      if (!extractMessage) return;
      setValidationMessage(extractMessage);
    } finally {
      setShowLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto flex h-full w-11/12 flex-col gap-7">
        <FormWithLabelWrapper formWithLabels={formWithLabels} />
        {validationMessage && <p className="valid-message">{validationMessage}</p>}
        <CButton>ログイン</CButton>
      </form>
      {showLoading && <LoadingDialog loadingText="Waiting" />}
    </>
  );
};
export default LoginForm;
