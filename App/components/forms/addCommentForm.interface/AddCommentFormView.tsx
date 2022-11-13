import React from "react";
import styles from "./addCommentForm.module.scss";
import { Button, Input } from "@material-ui/core";
import { IAddCommentFormView } from "./addCommentForm.interface";

export const AddCommentFormView = (props: IAddCommentFormView) => {
  return (
    <form onSubmit={props.onSendComment} className={styles.form}>
      <Input
        value={props.comment}
        minRows={props.isFocused ? 5 : 1}
        onFocus={props.onFocus}
        onChange={(e) => props.onChangeComment(e.target.value)}
        classes={{ root: styles.fieldRoot }}
        placeholder="Написать комментарий ..."
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
          Опубликовать
        </Button>
      )}
    </form>
  );
};
