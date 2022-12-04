import * as yup from "yup";
import { TFunction } from "react-i18next";

export const ProfileSchemaValidationCreator = (
  t: TFunction<"translation", undefined>
) =>
  yup.object().shape({
    name: yup.string().required(t("validation:error.is_required")),
    email: yup
      .string()
      .email(t("validation:error.incorrect_email"))
      .required(t("validation:error.is_required")),
    password: yup
      .string()
      .min(6, t("validation:error.password_length"))
      .required(t("validation:error.is_required")),
  });
