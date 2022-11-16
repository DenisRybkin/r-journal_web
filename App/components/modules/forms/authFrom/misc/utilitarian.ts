import {
  ILoginCredentials,
  ISignupCredentials,
  LoginCredentialsFieldType,
  SignupCredentialsFieldType,
} from "../auth.form.interface";
import React from "react";

export const calculateNewCredentialsObj = (
  currentState: ILoginCredentials | ISignupCredentials,
  fieldKey: LoginCredentialsFieldType | SignupCredentialsFieldType,
  event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
): ILoginCredentials | ISignupCredentials => {
  const newObj = Object.assign({}, currentState); // чтобы не мутировать loginInitialData и signupInitialData, и чтобы сет стейту возвращал новую ссылку на обьект
  newObj[fieldKey] = event.target.value;
  return newObj;
};
