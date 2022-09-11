import { ILoginCredentials, ISignupCredentials } from "../Auth.form.interface";

export const loginInitialData: ILoginCredentials = { email: "", password: "" };

export const signupInitialData: ISignupCredentials = {
  email: "",
  password: "",
  name: "",
};
