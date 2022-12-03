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
  MuiInput: {
    // Name of the styleSheet
    underline: {
      "&:hover:not($disabled):before": {
        backgroundColor: "red",
        height: 0,
      },
    },
  },

  MuiOutlinedInput: {
    input: {
      borderRadius: "var(--radius-sm)",
      border: "1px solid var(--color-faint_main)",
      "&::placeholder": {
        color: "#000",
        opacity: 0.7,
      },
      "&:hover": {
        backgroundColor: "var(--contained-color)",
        boxShadow: "0 0 0 3px var(--primary-color_strong)",
        border: "1px solid #ebd6038f",
      },
      "&:focus": {
        backgroundColor: "var(--contained-color)",
        border: "1px solid #ebd603",
        boxShadow: "0 0 0 3px var(--primary-color_strong)",
      },
    },
    root: {
      backgroundColor: "var(--color-faint_main)",
      height: 40,
      borderRadius: "var(--radius-sm)",
      borderColor: "var(--color-faint_main)",
      // "&:hover": {
      //   backgroundColor: "var(--contained-color)",
      //   boxShadow: "0 0 0 3px var(--primary-color_strong)",
      // },
    },
    notchedOutline: {
      display: "none",
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
