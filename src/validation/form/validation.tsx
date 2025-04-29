import * as Yup from "yup";
import { VALIDATION_MESSAGE } from "./message";

//yupオブジェクトはネスト可能 -> phoneNumbers.user phoneNumber.emergency等

export const schema = Yup.object().shape({
  email: Yup.string().required(VALIDATION_MESSAGE.email.required).email(VALIDATION_MESSAGE.email.format),
  password: Yup.string().required(VALIDATION_MESSAGE.password.required)
});
