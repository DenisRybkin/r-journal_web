import { IShowMethod } from "../stores/notifierStore";
import { useTranslation } from "react-i18next";
import { useRootStore } from "./useRoorStore";
import { NotifierThemeKeys } from "../constants/notifierThemeKeys";

interface IShowSuccessError extends Omit<IShowMethod, "message"> {
  successMessage: string;
  errorMessage: string;
  value: boolean;
}

interface IUseNotifier {
  show: (params: IShowMethod) => void;
  showDefaultError: () => void;
  showSuccessError: (params: IShowSuccessError) => void;
}

export const useNotifier = (): IUseNotifier => {
  const { t } = useTranslation();
  const { notifierStore } = useRootStore();

  const show = (params: IShowMethod) => notifierStore.show(params);

  const showDefaultError = () => {
    notifierStore.show({
      message: t("notifier:error.something_wrong"),
      theme: NotifierThemeKeys.error,
    });
  };

  const showSuccessError = (params: IShowSuccessError) =>
    notifierStore.show({
      ...params,
      message: params.value ? params.successMessage : params.errorMessage,
    });

  return {
    show,
    showDefaultError,
    showSuccessError,
  };
};
