import React, { useMemo } from "react";
import styles from "./commonIcon.module.scss";
import clsx from "clsx";
import { IIconCommon } from "./iconCommon.interface";
import { IconColors, IconsKeys } from "./iconsKeys";
import {
  GoogleLogoIcon,
  VKLogoIcon,
  MessageIcon,
  FacebookLogo,
  TwitterLogo,
  AppleLogo,
} from "../index";

export const IconContainer = (props: IIconCommon): JSX.Element => {
  const handleGetIconContent = (): JSX.Element => {
    switch (props.iconKey) {
      case IconsKeys.googleLogo:
        return <GoogleLogoIcon />;
      case IconsKeys.message:
        return <MessageIcon />;
      case IconsKeys.vkLogo:
        return <VKLogoIcon />;
      case IconsKeys.facebookLogo:
        return <FacebookLogo />;
      case IconsKeys.twitterLogo:
        return <TwitterLogo />;
      case IconsKeys.appleLogo:
        return <AppleLogo />;
    }
  };

  const iconStyles = useMemo(
    () =>
      clsx({
        [styles.buttonIcon]: props.isBtnMod,
        [styles.faintIconColor]: props.color === IconColors.faint,
        [styles.darkIconColor]: props.color === IconColors.dark,
        [styles.primaryIconColor]: props.color === IconColors.primary,
      }),
    [props.isBtnMod, props.color]
  );

  return (
    <svg
      className={iconStyles}
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 24 24"
      id={`i_icon-${props.iconKey}`}
    >
      {handleGetIconContent()}
    </svg>
  );
};
