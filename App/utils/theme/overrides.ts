import { Overrides } from "@material-ui/core/styles/overrides";

export const overridesTheme: Overrides = {
  MuiPaper: {
    rounded: {
      borderRadius: 8,
    },
  },
  MuiListItemIcon: {
    root: {
      maxWidth: 40,
      minWidth: 0,
    },
  },
  MuiMenuItem: {
    // root: {
    //   backgroundColor: "red",
    //   minWidth: "40px",
    // },
  },
  MuiPopover: {},
  MuiDialog: {
    paper: {
      boxShadow: "none",
    },
  },
  MuiInputLabel: {
    root: {
      color: "#e7cda2",
    },
  },
  MuiButton: {
    root: {
      borderRadius: "8px",
      textTransform: "inherit",
      fontSize: 16,
      transition: "none",
      "&:active": {
        boxShadow:
          "0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 0%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%) !important",
        transform: "translateY(1px)",
      },
    },
    contained: {
      backgroundColor: "white",
      boxShadow:
        "0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 5%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%)",
      "&:hover": {
        backgroundColor: "white",
        boxShadow:
          "0 1px 1px rgb(0 0 0 / 18%), 0 4px 7px rgb(0 0 0 / 8%), 0 -1px 0 rgb(0 0 0 / 8%), -1px 0 0 rgb(0 0 0 / 8%), 1px 0 0 rgb(0 0 0 / 15%)",
      },
    },
    containedPrimary: {
      backgroundColor: "#fff4e2",
      color: "#757068",
      "&:hover": {
        backgroundColor: "#fff4e2",
      },
    },
  },
};
