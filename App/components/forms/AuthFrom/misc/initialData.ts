import { ILoginCredentials, ISignupCredentials } from "../auth.form.interface";

export const loginInitialData: ILoginCredentials = { email: "", password: "" };

export const signupInitialData: ISignupCredentials = {
  email: "",
  password: "",
  name: "",
};
