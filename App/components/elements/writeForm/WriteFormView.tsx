import React from "react";
import { Button, Input } from "@material-ui/core";
import styles from "./wirteForm.module.scss";
import { IWriteFormView } from "./writeForm.interface";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("../../editor/Editor").then((m) => m.Editor),
  {
    ssr: false,
  }
);

export const WriteFormView = (props: IWriteFormView) => {
  return (
    <div>
      <Input
        classes={{ root: styles.titleField }}
        placeholder="Заголовок"
        defaultValue={props.title}
      />
      <div className={styles.editor}>
        <Editor />
      </div>
      <Button style={{ height: 42 }} variant="contained" color="primary">
        Опубликовать
      </Button>
    </div>
  );
};
