"use client";
import CButton from "@/components/atoms/CButton";
import FormCInput from "@/components/atoms/Form/CInput";
import FormWithLabelWrapper from "@/components/molecules/FormWithLabelWrapper";
import useFormLabelId from "@/hooks/useFormLabelId";
import { FormWithLabelDetail } from "@/types/formUtils";
import { YUP_EMAIL_LOGIN, YUP_PASSWORD_LOGIN } from "@/validation/form/rules";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm: FC = () => {
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
