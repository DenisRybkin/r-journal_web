import React from "react";
import { Avatar, Button, IconButton, Paper } from "@material-ui/core";
import styles from "./header.module.scss";
import {
  AccountCircleOutlined as AccountIcon,
  ExpandMoreOutlined as ArrowBottom,
  Menu as MenuIcon,
  NotificationsNoneOutlined as NotificationIcon,
  SearchOutlined as SearchIcon,
  SmsOutlined as MessageIcon,
} from "@material-ui/icons";
import Link from "next/link";
import { IHeaderView } from "./header.interface";
import { useTranslation } from "react-i18next";

export const HeaderView: React.FC<IHeaderView> = (props) => {
  const { t } = useTranslation();
  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton onClick={props.toggleSidebar}>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a>
            <img
              height={35}
              className="mr-20"
              src="/static/img/logo.svg"
              alt="Logo"
            />
          </a>
        </Link>

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>

        <Link href="/write">
          <a>
            <Button variant="contained" className={styles.penButton}>
              {t("ui:button.new_entry")}
            </Button>
          </a>
        </Link>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        {props.isAuth ? (
          <Link href="/profile/1">
            <a className="d-flex align-center">
              <Avatar
                className={styles.avatar}
                alt="Remy Sharp"
                src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
              />
              <ArrowBottom />
            </a>
          </Link>
        ) : (
          <div onClick={props.onOpenAuthDialog} className={styles.authButton}>
            <AccountIcon /> {t("ui:button.login")}
          </div>
        )}
      </div>
    </Paper>
  );
};
