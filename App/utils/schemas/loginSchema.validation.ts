import * as yup from "yup";

export const LoginSchemaValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(6, "Длинна пароля должна быть более 6 строк")
    .required("Это поле обязательное"),
});
