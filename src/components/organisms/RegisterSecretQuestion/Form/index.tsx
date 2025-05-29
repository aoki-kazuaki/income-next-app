"use client";

import CButton from "@/components/atoms/CButton";
import FormCInput from "@/components/atoms/Form/CInput";
import FormCSelect from "@/components/atoms/Form/CSelect";
import FormWithLabelWrapper from "@/components/molecules/FormWithLabelWrapper";
import { EMPTY_INPUT } from "@/constants/common";
import { SECRET_QUESTION_ITEMS } from "@/constants/formOptions";
import { useConfirmDialog } from "@/hooks/useDialog";
import useFormLabelId from "@/hooks/useFormLabelId";
import useInput from "@/hooks/useInput";
import browserHttpClient from "@/lib/browserHttpClient";
import { currentUserAtom } from "@/store/currentUserAtom";
import { registerFormAtom } from "@/store/registerFormAtom";
import { FormWithLabelDetail } from "@/types/formUtils";
import { UserRegisterRequest } from "@/types/userRegister";
import { boolAllValuesFilled } from "@/utils/boolean";
import { strConversionMessageServerForClient } from "@/utils/string";
import {
  YUP_PASSWORD_RETRY_REGISTER,
  YUP_SECRET_QUESTION_REGISTER,
  YUP_SECRET_QUESTION_VALUE_REGISTER
} from "@/validation/form/rules";
import { VALIDATION_MESSAGE_STATIC } from "@/validation/form/staticMessage";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosResponse, isAxiosError } from "axios";
import { useAtom, useSetAtom } from "jotai";
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

  const dialog = useConfirmDialog();

  const [registerFormValues] = useAtom(registerFormAtom);

  const setLoginCurrentUser = useSetAtom(currentUserAtom);

  //UI上に表示するバリデーションメッセージ
  const [validMessage, setValidMessage] = useInput();

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
      formContent: <FormCInput type="password" id={passwordRetryId} {...register("passwordRetry")} />,
      validationMessage: errors.passwordRetry?.message
    }
  ];

  const onSubmit: SubmitHandler<FormValues> = async data => {
    setValidMessage(EMPTY_INPUT);
    const ok = dialog({
      title: "登録確認",
      description: "入力した内容で登録します。よろしいですか？",
      nextLabel: "登録する",
      cancelLabel: "キャンセル"
    });

    const confirmed = await ok;
    if (!confirmed) return;

    const requestBody: UserRegisterRequest = {
      secret: {
        question: data.secretQuestion,
        questionValue: data.secretQuestionValue
      },
      ...registerFormValues
    };

    try {
      await browserHttpClient.post("/api/users/register", requestBody);
      const isLoginResponse: AxiosResponse = await browserHttpClient.get("/api/auth/me");
      if (!isLoginResponse.data.isLoggedIn) return;

      const userInfo: AxiosResponse = await browserHttpClient.get("/api/users/me");
      setLoginCurrentUser(userInfo.data.user);

      router.push("/");
    } catch (error) {
      if (!isAxiosError(error)) return;
      //バリデーションメッセージの存在チェック
      const extractMessage = strConversionMessageServerForClient(error.response?.data.message);
      if (extractMessage) setValidMessage(extractMessage);
    }
  };

  const onClickPageBack = () => {
    router.back();
  };

  //リロード実施などで前画面での入力内容がリセットされている場合は初期登録画面に戻る
  useEffect(() => {
    if (!boolAllValuesFilled(registerFormValues)) router.push("/register");
  }, [registerFormValues, router]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto flex h-full w-11/12 flex-col gap-7">
        <FormWithLabelWrapper formWithLabels={formWithLabels} />
        {validMessage && <p className="valid-message">{validMessage}</p>}
        <CButton>登録する</CButton>
        {validMessage && (
          <CButton variant="outline" type="button" onClick={onClickPageBack}>
            メールアドレス設定に戻る
          </CButton>
        )}
      </form>
    </>
  );
};
export default RegisterSecretQuestionForm;
