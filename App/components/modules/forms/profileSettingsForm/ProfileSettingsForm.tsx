import React, { useEffect, useMemo } from "react";
import {
  IProfileSettingsForm,
  ProfileFiledType,
} from "./profileSettingsForm.interface";
import { useUpdateWithController } from "../../../../hooks/useUpdater";
import { api } from "../../../../services/api";
import { ProfileSettingsFormView } from "./ProfileSettingsFormView";
import { objectIsEquals } from "../../../../helpers/objectFunctions";

export const ProfileSettingsForm = (props: IProfileSettingsForm) => {
  const profileUpdater = useUpdateWithController(api.user);

  const isDisabledSaveBtn = useMemo(
    () =>
      props.user && profileUpdater.currentState
        ? objectIsEquals(props.user, profileUpdater.currentState)
        : true,
    [props.user, profileUpdater.currentState]
  );

  const handleInitForm = () =>
    props.user && profileUpdater.setInitialState(props.user);

  const applyChangesSelector =
    (filedKey: ProfileFiledType) =>
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
      profileUpdater.applyChanges({ [filedKey]: event.target.value });

  useEffect(handleInitForm, [props.user]);

  return (
    <ProfileSettingsFormView
      isDisabledSaveBtn={isDisabledSaveBtn}
      updater={profileUpdater}
      onChangeSelector={applyChangesSelector}
    />
  );
};
