import React from "react";
import { Subheader } from "../../../elements/subheader/Subheader";
import { Button, Divider, TextField } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { SignupSchemaValidation } from "../../../../utils/schemas/signupSchema.validation";
import { IProfileSettingsFormView } from "./profileSettingsForm.interface";

export const ProfileSettingsFormView = (props: IProfileSettingsFormView) => {
  const { t } = useTranslation();

  const form = useForm({
    mode: "onChange",
    //resolver: yupResolver(SignupSchemaValidation),
  });

  return (
    <form onSubmit={form.handleSubmit(() => alert(5))}>
      <div className="mb-10">
        <Subheader text={t("ui:subheader.name")} />
        <TextField
          name="name"
          {...form.register("name")}
          value={props.updater.currentState?.fullName}
          onChange={props.onChangeSelector("fullName")}
          size="small"
          placeholder={t("ui:palceholder.e_name")}
          variant="outlined"
          fullWidth
          required
        />
      </div>
      <div className="mb-10">
        <Subheader text={t("ui:subheader.email")} />
        <TextField
          name="email"
          {...form.register("email")}
          value={props.updater.currentState?.email}
          onChange={props.onChangeSelector("email")}
          size="small"
          variant="outlined"
          type="email"
          fullWidth
          required
          placeholder={t("ui:palceholder.e_email")}
        />
      </div>
      <div>
        <Subheader text={t("ui:subheader.password")} />
        <TextField
          name="password"
          {...form.register("password")}
          value={props.updater.currentState?.password}
          onChange={props.onChangeSelector("password")}
          size="small"
          type="password"
          variant="outlined"
          fullWidth
          required
          placeholder={t("ui:palceholder.e_password")}
        />
      </div>
      <Divider className="mt-15 mb-10" />
      <Button
        color="primary"
        variant="contained"
        type="submit"
        onClick={() => form.getValues()}
      >
        {t("ui:button.save_changes")}
      </Button>
    </form>
  );
};
