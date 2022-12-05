import React from "react";
import styles from "../../authForm.module.scss";
import { Button, TextField } from "@material-ui/core";
import { ISignupForm } from "../../auth.form.interface";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchemaValidationCreator } from "../../../../../../utils/schemas/signupSchema.validation";
import { useTranslation } from "react-i18next";
import { Subheader } from "../../../../../elements/subheader/Subheader";

export const SignupFormView = (props: ISignupForm) => {
  const { t } = useTranslation();

  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(SignupSchemaValidationCreator(t)),
  });

  return (
    <div className="d-stack-column justify-space-between">
      <div>
        <h1 className={styles.title}>{t("ui:title.signup_by_email")}</h1>
        <h5 onClick={props.onOpenLoginForm} className={styles.subtitle}>
          {t("common:text.or")} <span>{t("common:text.login_to_account")}</span>
        </h5>
      </div>
      <form
        onSubmit={form.handleSubmit(() => alert(5))}
        className={styles.loginContent}
      >
        <div className="mb-8">
          <Subheader text={t("ui:subheader.name")} />
          <TextField
            name="name"
            error={!!form.formState.errors["name"]}
            helperText={form.formState.errors["name"]?.message}
            {...form.register("name")}
            value={props.signupCredentials.name}
            onChange={props.onChangeSignupCredentials("name")}
            size="small"
            placeholder={t("ui:palceholder.e_name")}
            variant="outlined"
            fullWidth
            //required
          />
        </div>
        <div className="mb-8">
          <Subheader text={t("ui:subheader.email")} />
          <TextField
            name="email"
            error={!!form.formState.errors["email"]}
            helperText={form.formState.errors["email"]?.message}
            {...form.register("email")}
            value={props.signupCredentials.email}
            onChange={props.onChangeSignupCredentials("email")}
            size="small"
            variant="outlined"
            type="email"
            fullWidth
            placeholder={t("ui:palceholder.e_email")}
          />
        </div>
        <div>
          <Subheader text={t("ui:subheader.password")} />
          <TextField
            name="password"
            error={!!form.formState.errors["password"]}
            helperText={form.formState.errors["password"]?.message}
            {...form.register("password")}
            value={props.signupCredentials.password}
            onChange={props.onChangeSignupCredentials("password")}
            size="small"
            type="password"
            variant="outlined"
            fullWidth
            placeholder={t("ui:palceholder.e_password")}
          />
        </div>
        <Button
          className="mt-10"
          color="primary"
          variant="contained"
          type="submit"
          onClick={() => form.getValues()}
        >
          {t("ui:button.signup")}
        </Button>
      </form>
    </div>
  );
};
