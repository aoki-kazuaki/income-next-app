"use client";
import { CButton } from "@/components/atoms/CButton";
import CFormInput from "@/components/atoms/CForm/Input";
import FormWithLabelWrapper from "@/components/molecules/FormWithLabelWrapper";
import useFormLabelId from "@/hooks/useFormLabelId";
import { FormWithLabelType } from "@/types/common";
import { schema } from "@/validation/form/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm: FC = () => {
  const { generateFormLabelId } = useFormLabelId();
  const emailId = generateFormLabelId("e-mail");
  const passwordId = generateFormLabelId("password");

  const THIS_FORM_LABEL = {
    email: "e-mail",
    password: "password"
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onBlur"
  });

  const formWithLabels: FormWithLabelType[] = [
    {
      label: THIS_FORM_LABEL.email,
      labelWith: true,
      labelBold: true,
      formItemId: emailId,
      formContent: <CFormInput id={emailId} type="email" {...register("email")} />,
      validationMessage: errors.email?.message
    },
    {
      label: THIS_FORM_LABEL.password,
      labelWith: true,
      labelBold: true,
      formItemId: passwordId,
      formContent: <CFormInput type="password" id={passwordId} {...register("password")} />,
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
