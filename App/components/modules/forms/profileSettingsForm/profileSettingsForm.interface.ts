import { UserDto } from "../../../../api/models/UserDto";
import { IUseUpdateWithController } from "../../../../hooks/useUpdater";
import React from "react";

export interface IProfileSettingsForm {
  user?: UserDto;
}

export interface IProfileSettingsFormView {
  updater: IUseUpdateWithController<UserDto>;
  onChangeSelector: (
    filedKey: ProfileFiledType
  ) => (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export type ProfileFiledType = keyof UserDto;
