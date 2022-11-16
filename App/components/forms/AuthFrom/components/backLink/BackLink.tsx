import React from "react";
import styles from "../../authForm.module.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { IconButton } from "@material-ui/core";
import clsx from "clsx";
import { IBackLink } from "./backLink.interface";
import { useTranslation } from "react-i18next";

export const BackLink = (props: IBackLink) => {
  const { t } = useTranslation();

  return (
    <div
      onClick={props.onOpenAuthContent}
      className={clsx("d-flex align-center", styles.backTitle)}
    >
      <IconButton className="mr-10">
        <ArrowBackIosIcon />
      </IconButton>
      <h2>{t("ui:title.to_authorization")}</h2>
    </div>
  );
};
