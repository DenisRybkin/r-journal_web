import React, { useEffect, useState } from "react";
import { ContentKeys } from "./misc/contentKeys";
import { LoginForm } from "./LoginForm";
import { AuthContent } from "./AuthContent";
import { SignupForm } from "./SignupForm";
import { ReturnText } from "./ReturnText";
import {
  ILoginCredentials,
  ISignupCredentials,
  LoginCredentialsFieldType,
  SignupCredentialsFieldType,
} from "./Auth.form.interface";
import { loginInitialData, signupInitialData } from "./misc/initialData";
import { calculateNewCredentialsObj } from "./misc/utilitarian";

export const AuthFrom = () => {
  const [loginCredentials, setLoginCredentials] =
    useState<ILoginCredentials>(loginInitialData);
  const [signupCredentials, setSignupCredentials] =
    useState<ISignupCredentials>(signupInitialData);

  const [currentContentKey, setCurrentContentKey] = useState<ContentKeys>(
    ContentKeys.authContent
  );

  const handleOpenLoginForm = () => setCurrentContentKey(ContentKeys.loginForm);
  const handleOpenAuthContent = () =>
    setCurrentContentKey(ContentKeys.authContent);
  const handleOpenSignupFrom = () =>
    setCurrentContentKey(ContentKeys.signupForm);

  const handleResetForms = () => {
    setSignupCredentials(signupInitialData);
    setLoginCredentials(loginInitialData);
  };

  const handleChangeLoginCredentials =
    (fieldKey: LoginCredentialsFieldType) =>
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
      setLoginCredentials(
        (prev) =>
          calculateNewCredentialsObj(prev, fieldKey, event) as ILoginCredentials
      );

  const handleChangeSignupCredentials =
    (fieldKey: SignupCredentialsFieldType) =>
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
      setSignupCredentials(
        (prev) =>
          calculateNewCredentialsObj(
            prev,
            fieldKey,
            event
          ) as ISignupCredentials
      );

  const handleRenderContent = (): JSX.Element => {
    switch (currentContentKey) {
      case ContentKeys.authContent:
        return <AuthContent onOpenLoginForm={handleOpenLoginForm} />;
      case ContentKeys.loginForm:
        return (
          <LoginForm
            loginCredentials={loginCredentials}
            onOpenSignForm={handleOpenSignupFrom}
            onChangeLoginCredentials={handleChangeLoginCredentials}
          />
        );
      case ContentKeys.signupForm:
        return (
          <SignupForm
            signupCredentials={signupCredentials}
            onOpenLoginForm={handleOpenLoginForm}
            onChangeSignupCredentials={handleChangeSignupCredentials}
          />
        );
    }
  };

  useEffect(() => {
    handleResetForms();
    return () => handleResetForms();
  }, [currentContentKey]);

  return (
    <>
      {(currentContentKey == ContentKeys.loginForm ||
        currentContentKey == ContentKeys.signupForm) && (
        <ReturnText onOpenAuthContent={handleOpenAuthContent} />
      )}
      {handleRenderContent()}
    </>
  );
};
