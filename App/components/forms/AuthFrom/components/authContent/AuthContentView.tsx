import React from "react";
import styles from "../../authForm.module.scss";
import { Button } from "@material-ui/core";
import { IconContainer } from "../../../../icons/common/IconContainer";
import { IconColors, IconsKeys } from "../../../../icons/common/iconsKeys";
import { IAuthContentView } from "./authContent.interface";

export const AuthContentView = (props: IAuthContentView) => {
  return (
    <div className={styles.mainContent}>
      <h1 style={{ marginBottom: 20 }} className={styles.title}>
        Вход в RJ
      </h1>
      <Button variant="contained" fullWidth className="mb-10">
        <IconContainer
          iconKey={IconsKeys.vkLogo}
          isBtnMod
          width={24}
          height={24}
        />
        Вконтакте
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
        Через почту
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
