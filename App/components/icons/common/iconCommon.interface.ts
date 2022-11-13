import { IconColors, IconsKeys } from "./iconsKeys";

export interface IIconCommon {
  width?: number;
  height?: number;
  isBtnMod?: boolean;
  iconKey: IconsKeys;
  color?: IconColors;
}
