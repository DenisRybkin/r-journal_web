import { Avatar, Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import { PostActions } from "../../elements/postActions/PostActions";
import MessageIcon from "@material-ui/icons/TextsmsOutlined";
import UserAddIcon from "@material-ui/icons/PersonAddOutlined";

import styles from "./fullPost.module.scss";
import { useTranslation } from "react-i18next";
import { UserInfo } from "../../elements/userInfo/UserInfo";

export const FullPost = () => {
  const { t } = useTranslation();

  return (
    <Paper elevation={0} className={styles.paper}>
      <div className="container">
        <Typography variant="h4" className={styles.title}>
          Superjet, летящий из Волгограда в Москву, подал сигнал бедствия.
          Возможно, в полете произошла разгерметизация
        </Typography>
        <div>
          <Typography>
            Самолет SSJ100, летящий из Волгограда в Москву, подал сигнал
            бедствия. Об этом сообщает «Интерфакс» со ссылкой на информированный
            источник. По данным источника, самолет резко снизился над Тамбовской
            областью.
          </Typography>
          <Typography>
            По данным источника, самолет резко снизился над Тамбовской областью.
            Возможной причиной этого собеседник агентства назвал
            разгерметизацию.
          </Typography>
          <Typography>
            Самолет продолжает полет на высоте примерно 3000 метров.
          </Typography>
          <Typography>
            Источник не уточнил названия авиакомпании и номера рейса. Судя по
            данным Flightradar24, сейчас в небе находится один SSJ100, летящий в
            Москву из Волгограда. Это — самолет «Аэрофлота», выполняющий рейс
            SU6416. На момент написания заметки он уже пересек Тамбовскую
            область и подлетает к Москве.
          </Typography>
          <div style={{ width: 250, marginLeft: -14 }}>
            <PostActions />
          </div>
          <div className="d-flex justify-space-between align-center mt-15 mb-15">
            <UserInfo
              user={{
                fullName: "Donnie Darko",
                avatarUrl:
                  "https://leonardo.osnova.io/7161cd97-ffdc-1930-2b13-419de941c777/-/scale_crop/64x64/-/format/webp/",
                id: 1,
                email: "",
                password: "",
              }}
              count={1685}
            />
            {/*<div className={styles.userInfo}>*/}
            {/*  <img*/}
            {/*    src="https://leonardo.osnova.io/7161cd97-ffdc-1930-2b13-419de941c777/-/scale_crop/64x64/-/format/webp/"*/}
            {/*    alt="Avatar"*/}
            {/*  />*/}
            {/*  <b>Donnie Darko</b>*/}
            {/*  <span>+1685</span>*/}
            {/*</div>*/}
            <div>
              <Button variant="contained" className="mr-15">
                <MessageIcon />
              </Button>
              <Button variant="contained">
                <UserAddIcon />
                <b className="ml-10">{t("ui:button.subscribe")}</b>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};
