import React from "react";

export interface ILoginForm {}

export interface ILoginForm {
  loginCredentials: ILoginCredentials;
  onOpenSignForm: () => void;
  onChangeLoginCredentials: (
    fieldKey: LoginCredentialsFieldType
  ) => (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export interface ISignupForm {
  signupCredentials: ISignupCredentials;
  onOpenLoginForm: () => void;
  onChangeSignupCredentials: (
    fieldKey: SignupCredentialsFieldType
  ) => (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface ISignupCredentials {
  name: string;
  email: string;
  password: string;
}

export type LoginCredentialsFieldType = keyof ILoginCredentials;
export type SignupCredentialsFieldType = keyof ISignupCredentials;
