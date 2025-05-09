"use client";
import { CButton } from "@/components/atoms/CButton";
import CFormDate from "@/components/atoms/CForm/Date";
import CFormInput from "@/components/atoms/CForm/Input";
import FormWithLabelWrapper from "@/components/molecules/FormWithLabelWrapper";
import useFormLabelId from "@/hooks/useFormLabelId";
import { registerFormAtom } from "@/store/registerFormStore";
import { FormWithLabelDetail } from "@/types/common";
import { boolAllValuesFilled } from "@/utils/boolean";
import {
  YUP_BIRTH_DATE_REGISTER,
  YUP_EMAIL_REGISTER,
  YUP_PASSWORD_REGISTER,
  YUP_USER_NAME_REGISTER
} from "@/validation/form/rules";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";

import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";

type FormValues = {
  name: string;
  birthDate: string;
  email: string;
  password: string;
};

const RegisterForm: FC = () => {
  const router = useRouter();

  const [registerFormValues, setRegisterFormValues] = useAtom(registerFormAtom);

  const { generateFormLabelId } = useFormLabelId();
  const nameId = generateFormLabelId("name");
  const birthDateId = generateFormLabelId("birthDate");
  const emailId = generateFormLabelId("e-mail");
  const passwordId = generateFormLabelId("password");

  const thisFormSchema = Yup.object().shape({
    name: YUP_USER_NAME_REGISTER,
    birthDate: YUP_BIRTH_DATE_REGISTER,
    email: YUP_EMAIL_REGISTER,
    password: YUP_PASSWORD_REGISTER
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>({
    resolver: yupResolver(thisFormSchema),
    mode: "onBlur"
  });

  const formWithLabels: FormWithLabelDetail[] = [
    {
      label: "名前",
      labelBold: true,
      labelWith: true,
      formItemId: nameId,
      formContent: <CFormInput id={nameId} {...register("name")} />,
      validationMessage: errors.name?.message
    },
    {
      label: "生年月日",
      labelBold: true,
      labelWith: true,
      formItemId: birthDateId,
      formContent: <CFormDate id={birthDateId} {...register("birthDate")} />,
      validationMessage: errors.birthDate?.message
    },
    {
      label: "email",
      labelWith: true,
      labelBold: true,
      formItemId: emailId,
      formContent: <CFormInput id={emailId} type="email" {...register("email")} />,
      validationMessage: errors.email?.message
    },
    {
      label: "password",
      labelWith: true,
      labelBold: true,
      formItemId: passwordId,
      formContent: <CFormInput type="password" id={passwordId} {...register("password")} />,
      validationMessage: errors.password?.message
    }
  ];

  const onSubmit: SubmitHandler<FormValues> = data => {
    setRegisterFormValues(data);
    console.log(data)
    router.push("/register/secret-question");
  };

  useEffect(() => {
    if (!boolAllValuesFilled(registerFormValues)) return;
    reset(registerFormValues);
  }, [registerFormValues, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto flex h-full w-11/12 flex-col gap-7">
      <FormWithLabelWrapper formWithLabels={formWithLabels} />
      <CButton>秘密の質問の設定へ</CButton>
    </form>
  );
};
export default RegisterForm;
