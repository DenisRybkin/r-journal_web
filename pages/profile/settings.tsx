import {
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { ContentLayout } from "../../App/components/layouts/contentLayout/ContentLayout";

export default function SettingsPage() {
  return (
    <ContentLayout hideComments>
      <Paper className="pa-10" elevation={0}>
        <Typography variant="h6">Основные настройки</Typography>
        <Divider className="mt-10 mb-20" />
        <form>
          <TextField
            className="mb-10"
            size="small"
            label="Никнейм"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            className="mb-10"
            size="small"
            label="Email"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            size="small"
            label="Пароль"
            variant="outlined"
            fullWidth
            required
          />
          <Divider className="mt-15 mb-10" />
          <Button color="primary" variant="contained">
            Сохранить изменения
          </Button>
        </form>
      </Paper>
    </ContentLayout>
  );
}
