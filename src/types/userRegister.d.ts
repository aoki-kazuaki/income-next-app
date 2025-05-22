import { SecretQuestion } from "./userAuth";

/**ユーザー登録画面で使用する jotai管理で秘密の質問から登録完了まで保持される型情報 */
export type RegisterForm = {
  name: string;
  birthDate: string;
  email: string;
  password: string;
};

/**秘密の質問入力値 */
export type SecretQuestion = {
  question: string;
  questionValue: string;
};

/** APIリクエストで送信する登録時のリクエストボディ*/
export type UserRegisterRequest = {
  name: string;
  birthDate: string;
  email: string;
  password: string;
  secret: SecretQuestion;
};
