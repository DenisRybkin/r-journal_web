import { IMenuLink } from "../../../utils/appLinks";

export interface ILeftMenu {}

export interface ILeftMenuView {
  onCheckIsActive: (path: string) => boolean;
  menu: IMenuLink[];
}
