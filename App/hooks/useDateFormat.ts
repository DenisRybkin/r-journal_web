import { rootStore } from "../stores/rootStore";

const currentYear = new Date().getFullYear();
type FormatDateOptions = Intl.DateTimeFormatOptions & {
  showYearWhenIsCurrent?: boolean;
  doNotUsePredefinedOptions?: boolean;
};

export const useDateFormat = () => {
  const locale = rootStore.appStore?.getAppLocale ?? "ru";

  const postProcessFormatDateOptions = (
    date: Date,
    options: FormatDateOptions
  ): FormatDateOptions => {
    options.year =
      options.showYearWhenIsCurrent == false &&
      date.getFullYear() == currentYear
        ? undefined
        : "numeric";
    return options;
  };

  const postProcessFormatDateString = (dateString: string): string => {
    let str = dateString;

    if (["ru"].includes(locale)) {
      str = str.replaceAll(",", "");
    }

    return str;
  };

  const getDefaultFormatDateOptions = (): FormatDateOptions =>
    ({
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      showYearWhenIsCurrent: false,
    } as FormatDateOptions);

  const formatDate = (
    date: Date,
    options: FormatDateOptions | null = null
  ): string => {
    const defaultOptions = !!options?.doNotUsePredefinedOptions
      ? { showYearWhenIsCurrent: false }
      : getDefaultFormatDateOptions();
    options = postProcessFormatDateOptions(
      date,
      options == null ? defaultOptions : { ...defaultOptions, ...options }
    );
    return postProcessFormatDateString(
      date.toLocaleDateString(locale, options)
    );
  };

  const formatDateString = (
    dateString: string,
    options: FormatDateOptions | null = null
  ): string => {
    return formatDate(new Date(dateString), options);
  };

  return {
    formatDate,
    formatDateString,
  };
};
