import * as Yup from "yup";
import { VALIDATION_MESSAGE_STATIC } from "./staticMessage";

// ----- 新規登録 -----
/**名前ルール */
export const YUP_USER_NAME_REGISTER = Yup.string()
  .required(VALIDATION_MESSAGE_STATIC.nameRegister.required)
  .max(20, VALIDATION_MESSAGE_STATIC.nameRegister.max)
  .min(3, VALIDATION_MESSAGE_STATIC.nameRegister.min);

/**生年月日ルール */
export const YUP_BIRTH_DATE_REGISTER = Yup.string().required(VALIDATION_MESSAGE_STATIC.birthDateRegister.required);

/** e-mailルール*/
export const YUP_EMAIL_REGISTER = Yup.string()
  .required(VALIDATION_MESSAGE_STATIC.emailRegister.required)
  .email(VALIDATION_MESSAGE_STATIC.emailRegister.format);

/** パスワードルール*/
export const YUP_PASSWORD_REGISTER = Yup.string().required(VALIDATION_MESSAGE_STATIC.passwordRegister.required);

/**秘密の質問選択ルール */
export const YUP_SECRET_QUESTION_REGISTER = Yup.string().required(VALIDATION_MESSAGE_STATIC.secretQuestionRegister.required);
/**秘密の質問回答ルール */
export const YUP_SECRET_QUESTION_VALUE_REGISTER = Yup.string().required(
  VALIDATION_MESSAGE_STATIC.secretQuestionValueRegister.required
);

export const YUP_PASSWORD_RETRY_REGISTER = Yup.string().required(VALIDATION_MESSAGE_STATIC.passwordRetryRegister.required);
// ----- ログイン -----
/** ユーザーログイン時に使用するe-mailルール*/
export const YUP_EMAIL_LOGIN = Yup.string()
  .required(VALIDATION_MESSAGE_STATIC.emailLogin.required)
  .email(VALIDATION_MESSAGE_STATIC.emailLogin.format);

/** ユーザーログイン時に使用するパスワードルール*/
export const YUP_PASSWORD_LOGIN = Yup.string().required(VALIDATION_MESSAGE_STATIC.passwordLogin.required);
