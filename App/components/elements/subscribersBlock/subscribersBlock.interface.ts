import { UserDto } from "../../../api/models/UserDto";

export interface ISubscribersBlock {
  users: UserDto[];
}

export interface ISubscribersBlockView extends ISubscribersBlock {}
