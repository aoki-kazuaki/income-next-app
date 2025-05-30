import { SecretQuestion } from "./current";

/**ユーザー登録画面で使用する jotai管理で秘密の質問から登録完了まで保持される型情報 */
export type FirstStepRegisterForm = {
  name: string;
  birthDate: string;
  email: string;
  password: string;
};

/**秘密の質問入力値 */
export type SecretQuestionForm = {
  question: string;
  questionValue: string;
};

/** APIリクエストで送信する登録時のリクエストボディ*/
export type UserRegisterRequest = FirstStepRegisterForm & {
  secret: SecretQuestion;
};
