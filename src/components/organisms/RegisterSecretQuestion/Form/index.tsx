"use client";

import CButton from "@/components/atoms/CButton";
import FormCInput from "@/components/atoms/Form/CInput";
import FormCSelect from "@/components/atoms/Form/CSelect";
import FormWithLabelWrapper from "@/components/molecules/FormWithLabelWrapper";
import { SECRET_QUESTION_ITEMS } from "@/constants/formOptions";
import { REGISTER_FORM_DEFAULT } from "@/constants/storeDefault";
import useFormLabelId from "@/hooks/useFormLabelId";
import { registerFormAtom } from "@/store/registerFormStore";
import { FormWithLabelDetail } from "@/types/formUtils";
import { boolAllValuesFilled } from "@/utils/boolean";
import {
  YUP_PASSWORD_RETRY_REGISTER,
  YUP_SECRET_QUESTION_REGISTER,
  YUP_SECRET_QUESTION_VALUE_REGISTER
} from "@/validation/form/rules";
import { VALIDATION_MESSAGE_STATIC } from "@/validation/form/staticMessage";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";

type FormValues = {
  secretQuestion: string;
  secretQuestionValue: string;
  passwordRetry: string;
};

const RegisterSecretQuestionForm: FC = () => {
  const router = useRouter();

  const [registerFormValues, setRegisterFormValues] = useAtom(registerFormAtom);

  const { generateFormLabelId } = useFormLabelId();
  const secretQuestionId = generateFormLabelId("questionSelect");
  const secretQuestionValueId = generateFormLabelId("questionValue");
  const passwordRetryId = generateFormLabelId("passwordRetry");

  const thisFormSchema = Yup.object().shape({
    secretQuestion: YUP_SECRET_QUESTION_REGISTER,
    secretQuestionValue: YUP_SECRET_QUESTION_VALUE_REGISTER,
    //条件式を付与する場合
    passwordRetry: YUP_PASSWORD_RETRY_REGISTER.test(
      "matchPassword",
      VALIDATION_MESSAGE_STATIC.passwordRetryRegister.retryUnmatched,
      value => {
        return value === registerFormValues.password;
      }
    )
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<FormValues>({
    resolver: yupResolver(thisFormSchema),
    mode: "onBlur"
  });

  const formWithLabels: FormWithLabelDetail[] = [
    {
      label: "秘密の質問を入力してください",
      labelWith: true,
      labelBold: true,
      formItemId: secretQuestionId,
      formContent: (
        <Controller
          name="secretQuestion"
          control={control}
          render={({ field }) => (
            <FormCSelect id={secretQuestionId} value={field.value} onChange={field.onChange} options={SECRET_QUESTION_ITEMS} />
          )}
        />
      ),
      validationMessage: errors.secretQuestion?.message
    },
    {
      label: "秘密の質問の回答を入力してください",
      labelWith: true,
      labelBold: true,
      formItemId: secretQuestionValueId,
      formContent: <FormCInput id={secretQuestionValueId} {...register("secretQuestionValue")} />,
      validationMessage: errors.secretQuestionValue?.message
    },
    {
      label: "パスワード再入力",
      labelWith: true,
      labelBold: true,
      formItemId: passwordRetryId,
      formContent: <FormCInput id={passwordRetryId} {...register("passwordRetry")} />,
      validationMessage: errors.passwordRetry?.message
    }
  ];

  const onSubmit: SubmitHandler<FormValues> = data => {
    const requestBody = {
      secret: {
        question: data.secretQuestion,
        questionValue: data.secretQuestionValue
      },
      ...registerFormValues
    };
    console.log(requestBody);
    setRegisterFormValues(REGISTER_FORM_DEFAULT);
  };

  //リロード実施などで前画面での入力内容がリセットされている場合は初期登録画面に戻る
  useEffect(() => {
    if (!boolAllValuesFilled(registerFormValues)) router.push("/register");
  }, [registerFormValues, router]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto flex h-full w-11/12 flex-col gap-7">
        <FormWithLabelWrapper formWithLabels={formWithLabels} />
        <CButton>登録する</CButton>
      </form>
    </>
  );
};
export default RegisterSecretQuestionForm;
