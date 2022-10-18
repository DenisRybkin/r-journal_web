import { IconColors, IconsKeys } from "./IconsKeys";

export interface IIconCommon {
  width?: number;
  height?: number;
  isBtnMod?: boolean;
  iconKey: IconsKeys;
  color?: IconColors;
}
