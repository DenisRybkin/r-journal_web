import React, { useEffect, useState } from "react";
import { ContentKeys } from "./misc/contentKeys";
import { LoginFormView } from "./forms/loginForm/LoginFormView";
import { SignupFormView } from "./forms/signupForm/SignupFormView";
import {
  ILoginCredentials,
  ISignupCredentials,
  LoginCredentialsFieldType,
  SignupCredentialsFieldType,
} from "./auth.form.interface";
import { loginInitialData, signupInitialData } from "./misc/initialData";
import { calculateNewCredentialsObj } from "./misc/utilitarian";
import { AuthContent } from "./components/authContent/AuthContent";
import { BackLink } from "./components/backLink/BackLink";
import { Fade } from "@material-ui/core";

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
        return (
          <Fade in={currentContentKey === ContentKeys.authContent}>
            <AuthContent onOpenLoginForm={handleOpenLoginForm} />
          </Fade>
        );
      case ContentKeys.loginForm:
        return (
          <Fade in={currentContentKey === ContentKeys.loginForm}>
            <LoginFormView
              loginCredentials={loginCredentials}
              onOpenSignForm={handleOpenSignupFrom}
              onChangeLoginCredentials={handleChangeLoginCredentials}
            />
          </Fade>
        );
      case ContentKeys.signupForm:
        return (
          <Fade in={currentContentKey === ContentKeys.signupForm}>
            <SignupFormView
              signupCredentials={signupCredentials}
              onOpenLoginForm={handleOpenLoginForm}
              onChangeSignupCredentials={handleChangeSignupCredentials}
            />
          </Fade>
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
        <BackLink onOpenAuthContent={handleOpenAuthContent} />
      )}
      {handleRenderContent()}
    </>
  );
};
