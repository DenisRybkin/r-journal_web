import React from "react";
import styles from "../../authForm.module.scss";
import { Button, TextField } from "@material-ui/core";
import { ILoginForm } from "../../auth.form.interface";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchemaValidation } from "../../../../../utils/schemas/loginSchema.validation";
import { useTranslation } from "react-i18next";

export const LoginFormView = (props: ILoginForm) => {
  const { t } = useTranslation();

  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginSchemaValidation),
  });

  return (
    <>
      <h1 className={styles.title}>{t("ui:title.login_by_email")}</h1>
      <h5 onClick={props.onOpenSignForm} className={styles.subtitle}>
        {t("common:text.or")} <span>{t("common:text.signup")}</span>
      </h5>
      <form
        onSubmit={form.handleSubmit(() => {})}
        className={styles.loginContent}
      >
        <TextField
          name="email"
          {...form.register("email")}
          value={props.loginCredentials.email}
          onChange={props.onChangeLoginCredentials("email")}
          className="mb-20"
          size="small"
          label="Email"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          name="password"
          {...form.register("password")}
          value={props.loginCredentials.password}
          onChange={props.onChangeLoginCredentials("password")}
          size="small"
          label={t("ui:label.password")}
          type="password"
          variant="outlined"
          fullWidth
          required
        />
        <Button
          type="submit"
          className="mt-30"
          color="primary"
          variant="contained"
        >
          {t("ui:button.login")}
        </Button>
      </form>
    </>
  );
};
