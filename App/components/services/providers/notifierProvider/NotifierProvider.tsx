import React from "react";
import { Snackbar } from "@material-ui/core";
import { useRootStore } from "../../../../hooks/useRoorStore";
import { NotifierThemeType } from "../../../../stores/notifierStore";
import { NotifierThemeKeys } from "../../../../constants/notifierThemeKeys";
import {
  AlertError,
  AlertInfo,
  AlertSuccess,
  AlertWarning,
} from "./components/alerts";
import { observer } from "mobx-react-lite";

const handleGetNotifierContent = (
  theme: NotifierThemeType | null,
  message: string | null,
  onClose: () => void
): JSX.Element | undefined => {
  switch (theme) {
    case NotifierThemeKeys.success:
      return <AlertSuccess message={message} onClose={onClose} />;
    case NotifierThemeKeys.error:
      return <AlertError message={message} onClose={onClose} />;
    case NotifierThemeKeys.warning:
      return <AlertWarning message={message} onClose={onClose} />;
    case NotifierThemeKeys.info:
      return <AlertInfo message={message} onClose={onClose} />;
    default:
      return undefined;
  }
};

export const NotifierProviderObserver: React.FC = (props) => {
  const { notifierStore } = useRootStore();

  const handleClose = () => notifierStore.resetOptions();

  return (
    <>
      <Snackbar
        open={notifierStore.getIsOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message={notifierStore.getMessage}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        {handleGetNotifierContent(
          NotifierThemeKeys.success,
          notifierStore.getMessage,
          handleClose
        )}
      </Snackbar>
      {props.children}
    </>
  );
};

export const NotifierProvider = observer(NotifierProviderObserver);
