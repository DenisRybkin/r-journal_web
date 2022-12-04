import React from "react";
import { Subheader } from "../../../elements/subheader/Subheader";
import { Button, Divider, TextField } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IProfileSettingsFormView } from "./profileSettingsForm.interface";
import { ProfileSchemaValidationCreator } from "../../../../utils/schemas/profileSchema.validation";

export const ProfileSettingsFormView = (props: IProfileSettingsFormView) => {
  const { t } = useTranslation();

  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(ProfileSchemaValidationCreator(t)),
  });

  return (
    <form onSubmit={form.handleSubmit(() => alert(5))}>
      <div className="mb-10">
        <Subheader text={t("ui:subheader.name")} />
        <TextField
          name="name"
          {...form.register("name")}
          error={!!form.formState.errors["name"]}
          helperText={form.formState.errors["name"]?.message}
          value={props.updater.currentState?.fullName}
          onChange={props.onChangeSelector("fullName")}
          size="small"
          placeholder={t("ui:palceholder.e_name")}
          variant="outlined"
          fullWidth
        />
      </div>
      <div className="mb-10">
        <Subheader text={t("ui:subheader.email")} />
        <TextField
          name="email"
          {...form.register("email")}
          error={!!form.formState.errors["email"]}
          helperText={form.formState.errors["email"]?.message}
          value={props.updater.currentState?.email}
          onChange={props.onChangeSelector("email")}
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
          value={props.updater.currentState?.password}
          onChange={props.onChangeSelector("password")}
          size="small"
          type="password"
          variant="outlined"
          fullWidth
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
