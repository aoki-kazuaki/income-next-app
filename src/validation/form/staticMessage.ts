export const VALIDATION_MESSAGE_STATIC = {
  nameRegister: {
    required: "名前は入力必須です",
    min: "名前は3文字以上で入力してください",
    max: "名前は20文字以内で入力してください"
  },
  birthDateRegister: {
    required: "生年月日は入力必須です"
  },
  emailRegister: {
    required: "e-mailは入力必須です",
    format: "e-mailの入力形式が正しくありません"
  },
  passwordRegister: {
    required: "passwordは入力必須です"
  },
  secretQuestionRegister: {
    required: "質問を入力してください"
  },
  secretQuestionValueRegister: {
    required: "秘密の質問の答えを入力してください"
  },
  passwordRetryRegister: {
    required: "パスワードは再入力が必須です",
    retryUnmatched: "パスワードが一致しませんでした"
  },
  emailLogin: {
    required: "e-mailは入力必須です",
    format: "e-mailの入力形式が正しくありません"
  },
  passwordLogin: {
    required: "passwordは入力必須です"
  }
};
