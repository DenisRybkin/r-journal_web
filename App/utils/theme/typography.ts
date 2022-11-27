import { TypographyOptions } from "@material-ui/core/styles/createTypography";
import { Palette } from "@material-ui/core/styles/createPalette";

export const typographyTheme:
  | TypographyOptions
  | ((palette: Palette) => TypographyOptions) = {};
