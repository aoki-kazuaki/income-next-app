import * as Yup from "yup";
import { VALIDATION_MESSAGE_STATIC } from "./staticMessage";

/** ユーザーログイン時に使用するe-mailルール*/
export const YUP_EMAIL_LOGIN = Yup.string()
  .required(VALIDATION_MESSAGE_STATIC.emailLogin.required)
  .email(VALIDATION_MESSAGE_STATIC.emailLogin.format);

/** 新規ユーザー登録時に使用するe-mailルール*/
export const YUP_EMAIL_REGISTER = Yup.string()
  .required(VALIDATION_MESSAGE_STATIC.emailRegister.required)
  .email(VALIDATION_MESSAGE_STATIC.emailRegister.format);

/** ユーザーログイン時に使用するパスワードルール*/
export const YUP_PASSWORD_LOGIN = Yup.string().required(VALIDATION_MESSAGE_STATIC.passwordLogin.required);

/** 新規ユーザー登録時に使用するパスワードルール*/
export const YUP_PASSWORD_REGISTER = Yup.string().required(VALIDATION_MESSAGE_STATIC.passwordRegister.required);
