import {
  FormatListBulletedOutlined as ListIcon,
  SmsOutlined as MessageIcon,
  TrendingUpOutlined as TrendingIcon,
  WhatshotOutlined as FireIcon,
} from "@material-ui/icons";
import React from "react";

export interface IMenuLink {
  text: string;
  path: string;
  icon: JSX.Element;
}

export const menuLinks: IMenuLink[] = [
  { text: "Лента", icon: <FireIcon />, path: "/" },
  { text: "Сообщения", icon: <MessageIcon />, path: "/messages" },
  { text: "Рейтинг RJ", icon: <TrendingIcon />, path: "/rating" },
  { text: "Подписки", icon: <ListIcon />, path: "/follows" },
];
