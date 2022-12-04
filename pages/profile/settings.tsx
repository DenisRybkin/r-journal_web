import {
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { ContentLayout } from "../../App/components/layouts/contentLayout/ContentLayout";
import { useTranslation } from "react-i18next";
import { ProfileSettingsForm } from "../../App/components/modules/forms/profileSettingsForm/ProfileSettingsForm";

export default function SettingsPage() {
  const { t } = useTranslation();

  return (
    <ContentLayout hideComments>
      <Paper className="pa-10" elevation={0}>
        <Typography variant="h6">{t("ui:title.basic_settings")}</Typography>
        <Divider className="mt-10 mb-20" />
        <ProfileSettingsForm
          user={{
            id: 1,
            avatarUrl:
              "https://sun9-69.userapi.com/impg/2xkMGMhg8h8eJz4pt7pGjLCebEUN5G4muwPsCA/EUOV1Jc-3ik.jpg?size=1280x917&quality=95&sign=1a65f0a2cb111d17029a623ddddbad4c&type=album",
            fullName: "Денис Рыбкин",
            password: "12345678",
            email: "denis.rybkin.94@gmail.ru",
          }}
        />
      </Paper>
    </ContentLayout>
  );
}
