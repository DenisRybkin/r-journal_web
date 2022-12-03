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

export default function RatingPage() {
  return (
    <ContentLayout>
      <Paper className="pl-10 pt-10 pr-10 mb-10" elevation={0}>
        <Typography
          variant="h5"
          style={{ fontWeight: "bold", fontSize: 30, marginBottom: 6 }}
        >
          Рейтинг сообществ и блогов
        </Typography>
        <Typography style={{ fontSize: 15 }}>
          Десять лучших авторов и комментаторов, а также администраторы первых
          десяти сообществ из рейтинга по итогам месяца бесплатно получают
          Plus-аккаунт на месяц.
        </Typography>
        <Tabs
          className="mt-5"
          value={0}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Август" />
          <Tab label="За 3 месяцуа" />
          <Tab label="За всё время" />
        </Tabs>
      </Paper>

      <Paper elevation={0}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Имя пользователя</TableCell>
              <TableCell align="right">Рейтинг</TableCell>
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
