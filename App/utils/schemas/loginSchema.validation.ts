import * as yup from "yup";
import { TFunction } from "react-i18next";

export const LoginSchemaValidationCreator = (
  t: TFunction<"translation", undefined>
) =>
  yup.object().shape({
    email: yup
      .string()
      .email(t("validation:error.incorrect_email"))
      .required(t("validation:error.is_required")),
    password: yup
      .string()
      .min(6, t("validation:error.password_length"))
      .required(t("validation:error.is_required")),
  });
