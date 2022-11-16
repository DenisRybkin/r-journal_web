import React from "react";
import { IWriteForm } from "./writeForm.interface";
import { WriteFormView } from "./WriteFormView";

export const WriteForm = (props: IWriteForm) => {
  return <WriteFormView title={props.title} />;
};
