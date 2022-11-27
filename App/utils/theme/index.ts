import { createTheme } from "@material-ui/core";

import { overridesTheme } from "./overrides";
import { paletteTheme } from "./palette";
import { propsTheme } from "./props";
import { breakpointsTheme } from "./breakpoints";
import { mixinsTheme } from "./mixins";
import { shapeTheme } from "./shape";
import { spacingTheme } from "./spacing";
import { transitionsTheme } from "./transitions";
import { typographyTheme } from "./typography";
import { zIndex } from "./zIndex";

export const theme = createTheme({
  props: propsTheme,
  palette: paletteTheme,
  overrides: overridesTheme,
  shape: shapeTheme,
  breakpoints: breakpointsTheme,
  mixins: mixinsTheme,
  spacing: spacingTheme,
  transitions: transitionsTheme,
  typography: typographyTheme,
  zIndex: zIndex,
});
