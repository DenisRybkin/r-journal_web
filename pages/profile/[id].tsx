import Link from "next/link";
import {
  Paper,
  Avatar,
  Typography,
  Button,
  Tabs,
  Tab,
} from "@material-ui/core";
import {
  SettingsOutlined as SettingsIcon,
  TextsmsOutlined as MessageIcon,
} from "@material-ui/icons";

import { Post } from "../../App/components/containers/post/Post";
import { ContentLayout } from "../../App/components/layouts/contentLayout/ContentLayout";
import { useTranslation } from "react-i18next";

export default function Profile() {
  const { t } = useTranslation();
  return (
    <ContentLayout contentFullWidth hideComments>
      <Paper className="pl-10 pr-10 pt-10 mb-15" elevation={0}>
        <div className="d-flex justify-space-between">
          <div>
            <Avatar
              style={{ width: 120, height: 120, borderRadius: 6 }}
              src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
            />
            <Typography
              style={{ fontWeight: "bold" }}
              className="mt-5"
              variant="h4"
            >
              Amon Bower
            </Typography>
          </div>
          <div>
            <Link href="/profile/settings">
              <Button
                style={{ height: 42, minWidth: 45, width: 45, marginRight: 10 }}
                variant="contained"
              >
                <SettingsIcon />
              </Button>
            </Link>
            <Button style={{ height: 42 }} variant="contained" color="primary">
              <MessageIcon className="mr-10" />
              {t("ui:button.to_write")}
            </Button>
          </div>
        </div>
        <div className="d-flex mb-5 mt-5">
          <Typography
            style={{ fontWeight: "bold", color: "#35AB66" }}
            className="mr-7"
          >
            +208
          </Typography>
          <Typography>2 подписчика</Typography>
        </div>
        <Typography>На проекте с 15 сен 2016</Typography>

        <Tabs
          className="mt-10"
          value={0}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Статьи" />
          <Tab label="Комментарии" />
          <Tab label="Закладки" />
        </Tabs>
      </Paper>
      <div className="d-flex align-start">
        <div className="mr-10 d-flex">
          <Post />
        </div>
        <Paper style={{ width: 300 }} className="pa-10 mb-10" elevation={0}>
          <b>Подписчики</b>
          <div className="d-flex mt-7">
            <Avatar
              className="mr-2"
              src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
            />
            <Avatar
              className="mr-2"
              src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
            />
          </div>
        </Paper>
      </div>
    </ContentLayout>
  );
}
