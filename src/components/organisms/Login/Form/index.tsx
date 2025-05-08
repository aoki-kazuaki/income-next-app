"use client";
import { CButton } from "@/components/atoms/CButton";
import CFormInput from "@/components/atoms/CForm/Input";
import FormWithLabelWrapper from "@/components/molecules/FormWithLabelWrapper";
import useFormLabelId from "@/hooks/useFormLabelId";
import { FormWithLabelType } from "@/types/common";
import { YUP_EMAIL_LOGIN, YUP_PASSWORD_LOGIN } from "@/validation/form/rules";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";

type FormValues = {
  emailLogin: string;
  passwordLogin: string;
};

const LoginForm: FC = () => {
  const { generateFormLabelId } = useFormLabelId();
  const emailId = generateFormLabelId("e-mail");
  const passwordId = generateFormLabelId("password");

  const thisFormSChema = Yup.object().shape({
    emailLogin: YUP_EMAIL_LOGIN,
    passwordLogin: YUP_PASSWORD_LOGIN
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: yupResolver(thisFormSChema),
    mode: "onBlur"
  });

  const formWithLabels: FormWithLabelType[] = [
    {
      label: "email",
      labelWith: true,
      labelBold: true,
      formItemId: emailId,
      formContent: <CFormInput id={emailId} type="email" {...register("emailLogin")} />,
      validationMessage: errors.emailLogin?.message
    },
    {
      label: "password",
      labelWith: true,
      labelBold: true,
      formItemId: passwordId,
      formContent: <CFormInput type="password" id={passwordId} {...register("passwordLogin")} />,
      validationMessage: errors.passwordLogin?.message
    }
  ];

  const onSubmit: SubmitHandler<FormValues> = data => {
    alert("クリックしたよ");
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto flex h-full w-11/12 flex-col gap-7">
      <FormWithLabelWrapper formWithLabels={formWithLabels} />
      <CButton>ログイン</CButton>
    </form>
  );
};
export default LoginForm;
