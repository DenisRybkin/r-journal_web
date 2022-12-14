import React from "react";
import { Dialog, DialogContentText, IconButton } from "@material-ui/core";
import styles from "./authDialog.module.scss";
import { AuthFrom } from "../../forms/authFrom/AuthForm";
import CloseIcon from "@material-ui/icons/Close";
import { IAuthDialogView } from "./authDialog.interface";
import { useTranslation } from "react-i18next";

export const AuthDialogView = (props: IAuthDialogView) => {
  const { t } = useTranslation();

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      fullWidth
      maxWidth="md"
      classes={{ paper: styles.root }}
    >
      <IconButton className={styles.closeIcon} onClick={props.onClose}>
        <CloseIcon />
      </IconButton>
      <div className="d-flex justify-space-between align-start h100p">
        <div className={styles.imgContainer}>
          <img
            height={35}
            className={styles.logo}
            src="/static/img/logo.svg"
            alt="Logo"
          />
          <img height={600} src="/static/img/auth-dialog.jpg" alt="preview" />
        </div>
        <div className={styles.contentContainer}>
          <AuthFrom />
          <DialogContentText style={{ marginBottom: 0 }}>
            <span>{t("common:misc.hint.auth_terms")}</span>
          </DialogContentText>
        </div>
      </div>
    </Dialog>
  );
};
