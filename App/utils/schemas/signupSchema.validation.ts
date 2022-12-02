import * as yup from "yup";

//TODO: добавить локолизацию

export const SignupSchemaValidation = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(6, "Длинна пароля должна быть более 6 символов")
    .required("Это обязательное поле"),
});
