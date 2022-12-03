import React from "react";
import styles from "../../authForm.module.scss";
import { Button } from "@material-ui/core";
import { IconContainer } from "../../../../icons/common/IconContainer";
import { IconColors, IconsKeys } from "../../../../icons/common/iconsKeys";
import { IAuthContentView } from "./authContent.interface";
import { useTranslation } from "react-i18next";

export const AuthContentView = (props: IAuthContentView) => {
  const { t } = useTranslation();
  return (
    <div className={styles.mainContent}>
      <h1 className={styles.title + " mb-50"}>{t("ui:title.auth_title")}</h1>
      <Button variant="contained" fullWidth className="mb-10">
        <IconContainer
          iconKey={IconsKeys.vkLogo}
          isBtnMod
          width={24}
          height={24}
        />
        {t("ui:button.vkontakte")}
      </Button>
      <Button variant="contained" fullWidth className="mb-10">
        <IconContainer
          iconKey={IconsKeys.googleLogo}
          isBtnMod
          width={24}
          height={24}
        />
        Google
      </Button>
      <Button
        onClick={props.onOpenLoginForm}
        variant="contained"
        fullWidth
        className="mb-10"
      >
        <IconContainer
          color={IconColors.dark}
          iconKey={IconsKeys.message}
          isBtnMod
          width={24}
          height={24}
        />
        {t("ui:button.by_email")}
      </Button>
      <div className="d-flex align-center justify-between">
        <Button variant="contained" style={{ width: "100px" }}>
          <IconContainer
            iconKey={IconsKeys.facebookLogo}
            width={28}
            height={28}
          />
        </Button>
        <Button variant="contained" style={{ width: "100px" }}>
          <IconContainer
            iconKey={IconsKeys.twitterLogo}
            width={28}
            height={28}
          />
        </Button>
        <Button variant="contained" style={{ width: "100px" }}>
          <IconContainer
            iconKey={IconsKeys.appleLogo}
            color={IconColors.dark}
            width={28}
            height={28}
          />
        </Button>
      </div>
    </div>
  );
};
