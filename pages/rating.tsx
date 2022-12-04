import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Tabs,
  Tab,
} from "@material-ui/core";

import { ContentLayout } from "../App/components/layouts/contentLayout/ContentLayout";
import { FollowButton } from "../App/components/elements/followButton/FollowButton";
import { useTranslation } from "react-i18next";
import { useDateFormat } from "../App/hooks/useDateFormat";

export default function RatingPage() {
  const { t } = useTranslation();
  const { formatDate } = useDateFormat();

  return (
    <ContentLayout>
      <Paper className="pl-10 pt-10 pr-10 mb-10" elevation={0}>
        <Typography
          variant="h5"
          style={{ fontWeight: "bold", fontSize: 30, marginBottom: 6 }}
        >
          {t("ui:title.rating_communities_and_blogs")}
        </Typography>
        <Typography style={{ fontSize: 15 }}>{t("")}</Typography>
        <Tabs
          className="mt-5"
          value={0}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab
            label={formatDate(new Date(), {
              month: "long",
              doNotUsePredefinedOptions: true,
            })}
          />
          <Tab label={t("ui:tab.in_3_months")} />
          <Tab label={t("ui:tab.for_all_time")} />
        </Tabs>
      </Paper>

      <Paper elevation={0}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{t("ui:table.user_name")}</TableCell>
              <TableCell align="right">{t("ui:table.rating")}</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <span className="mr-15">1</span>Вася Пупкин
              </TableCell>
              <TableCell align="right">540</TableCell>
              <TableCell align="right">
                <FollowButton />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </ContentLayout>
  );
}
