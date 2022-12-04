import React, { useEffect } from "react";
import {
  IProfileSettingsForm,
  ProfileFiledType,
} from "./profileSettingsForm.interface";
import { useUpdateWithController } from "../../../../hooks/useUpdater";
import { api } from "../../../../services/api";
import { ProfileSettingsFormView } from "./ProfileSettingsFormView";

export const ProfileSettingsForm = (props: IProfileSettingsForm) => {
  const profileUpdater = useUpdateWithController(api.user);

  const handleInitForm = () =>
    props.user && profileUpdater.setInitialState(props.user);

  const applyChangesSelector =
    (filedKey: ProfileFiledType) =>
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
      profileUpdater.applyChanges({ [filedKey]: event.target.value });

  useEffect(handleInitForm, [props.user]);

  return (
    <ProfileSettingsFormView
      updater={profileUpdater}
      onChangeSelector={applyChangesSelector}
    />
  );
};
