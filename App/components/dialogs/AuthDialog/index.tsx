import React from "react";
import { Dialog, DialogContentText, IconButton } from "@material-ui/core";
import styles from "./AuthDialog.module.scss";
import { AuthFrom } from "../../forms/AuthFrom";
import CloseIcon from "@material-ui/icons/Close";

interface IAuthDialog {
  open: boolean;
  onClose: () => void;
}

export const AuthDialog: React.FC<IAuthDialog> = (props) => {
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
      <div className="d-flex justify-between align-start h100p">
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
            <span>
              Авторизуясь, вы соглашаетесь с правилами пользования сайтом и
              даёте согласие на обработку персональных данных.
            </span>
          </DialogContentText>
        </div>
      </div>
    </Dialog>
  );
};
