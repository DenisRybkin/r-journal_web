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
import { useDeclension } from "../../App/hooks/useDeclension";
import { SubscribersBlock } from "../../App/components/elements/subscribersBlock/SubscribersBlock";
import { useDateFormat } from "../../App/hooks/useDateFormat";

export default function Profile() {
  const { t } = useTranslation();
  const { formatDate } = useDateFormat();

  const declensionSubscribers = useDeclension(2, [
    t("common:text.subscriber"),
    t("common:text.subscriber_0d"),
    t("common:text.subscriber_1d"),
  ]);

  const countCount = 208;

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
            +{countCount}
          </Typography>
          <Typography>2 {declensionSubscribers}</Typography>
        </div>
        <Typography>
          {`${t("common:text.on_the_project_from")} ${formatDate(
            new Date("04.05.2016"),
            {
              month: "long",
              minute: undefined,
              hour: undefined,
            }
          )}`}
        </Typography>

        <Tabs
          className="mt-10"
          value={0}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label={t("ui:tab.articles")} />
          <Tab label={t("ui:tab.comments")} />
          <Tab label={t("ui:tab.marks")} />
        </Tabs>
      </Paper>
      <div className="d-flex align-start">
        <div className="mr-10 d-flex">
          <Post />
        </div>
        <SubscribersBlock
          users={[
            {
              id: 1,
              avatarUrl:
                "https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/",
              fullName: "fdssad",
            },
            {
              id: 2,
              avatarUrl:
                "https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/",
              fullName: "fdssad",
            },
            {
              id: 3,
              avatarUrl:
                "https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/",
              fullName: "fdssad",
            },
            {
              id: 4,
              avatarUrl:
                "https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/",
              fullName: "fdssad",
            },
            {
              id: 5,
              avatarUrl:
                "https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/",
              fullName: "fdssad",
            },
          ]}
        />
      </div>
    </ContentLayout>
  );
}
