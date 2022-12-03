import React from "react";
import styles from "./addCommentForm.module.scss";
import { Button, Input } from "@material-ui/core";
import { IAddCommentFormView } from "./addCommentForm.interface";
import { useTranslation } from "react-i18next";

export const AddCommentFormView = (props: IAddCommentFormView) => {
  const { t } = useTranslation();
  return (
    <form onSubmit={props.onSendComment} className={styles.form}>
      <Input
        value={props.comment}
        minRows={props.isFocused ? 5 : 1}
        onFocus={props.onFocus}
        onChange={(e) => props.onChangeComment(e.target.value)}
        classes={{ root: styles.fieldRoot }}
        placeholder={t("ui:palceholder.w_comment")}
        fullWidth
        multiline
      />
      {props.isFocused && (
        <Button
          className={styles.addButton}
          style={{ height: 42 }}
          variant="contained"
          color="primary"
          type="submit"
        >
          {t("ui:button.to_publish")}
        </Button>
      )}
    </form>
  );
};
