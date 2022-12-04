import React from "react";
import styles from "../../header.module.scss";
import { SearchOutlined as SearchIcon } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import { ISearchBlockView } from "./searchBlock.interface";

export const SearchBlockView = (props: ISearchBlockView) => {
  const { t } = useTranslation();

  return (
    <div className={styles.searchBlock}>
      <SearchIcon />
      <input placeholder={t("ui:palceholder.search")} />
    </div>
  );
};
