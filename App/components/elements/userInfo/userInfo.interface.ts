import { UserDto } from "../../../api/models/UserDto";

export interface IUserInfo {
  user: UserDto;
  count?: number;
  isCirclar?: boolean;
  avatarHeight?: number;
  avatarWidth?: number;
  isAvatarOnly?: boolean;
  fontSize?: number;
}

export interface IUserInfoView extends IUserInfo {}
