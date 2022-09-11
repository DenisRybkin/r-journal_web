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
      <Paper className="p-20" elevation={0}>
        <Typography variant="h6">Основные настройки</Typography>
        <Divider className="mt-20 mb-30" />
        <form>
          <TextField
            className="mb-20"
            size="small"
            label="Никнейм"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            className="mb-20"
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
          <Divider className="mt-30 mb-20" />
          <Button color="primary" variant="contained">
            Сохранить изменения
          </Button>
        </form>
      </Paper>
    </ContentLayout>
  );
}
