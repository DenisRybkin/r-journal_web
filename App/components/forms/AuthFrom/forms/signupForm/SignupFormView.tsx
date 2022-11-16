import React from "react";
import styles from "../../authForm.module.scss";
import { Button, TextField } from "@material-ui/core";
import { ISignupForm } from "../../auth.form.interface";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchemaValidation } from "../../../../../utils/schemas/signupSchema.validation";
import { useTranslation } from "react-i18next";

export const SignupFormView = (props: ISignupForm) => {
  const { t } = useTranslation();

  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(SignupSchemaValidation),
  });

  return (
    <form
      onSubmit={form.handleSubmit(() => {})}
      className={styles.loginContent}
    >
      <h1 className={styles.title}>{t("ui:title.signup_by_email")}</h1>
      <h5 onClick={props.onOpenLoginForm} className={styles.subtitle}>
        {t("common:text.or")} <span>{t("common:text.login_to_account")}</span>
      </h5>
      <TextField
        name="name"
        {...form.register("name")}
        value={props.signupCredentials.name}
        onChange={props.onChangeSignupCredentials("name")}
        className="mb-20"
        size="small"
        label={t("ui:label.name")}
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        name="email"
        {...form.register("email")}
        value={props.signupCredentials.email}
        onChange={props.onChangeSignupCredentials("email")}
        className="mb-20"
        size="small"
        label="Email"
        variant="outlined"
        type="email"
        fullWidth
        required
      />
      <TextField
        name="password"
        {...form.register("password")}
        value={props.signupCredentials.password}
        onChange={props.onChangeSignupCredentials("password")}
        size="small"
        label={t("ui:label.password")}
        type="password"
        variant="outlined"
        fullWidth
        required
      />
      <Button
        className="mt-30"
        color="primary"
        variant="contained"
        type="submit"
      >
        {t("ui:button.signup")}
      </Button>
    </form>
  );
};
