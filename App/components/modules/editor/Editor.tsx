import React, { useEffect } from "react";
import EditorJS from "@editorjs/editorjs";
import { useTranslation } from "react-i18next";

export const Editor: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const editor = new EditorJS({
      holder: "editor",
      placeholder: t("ui:palceholder.e_post"),
    });

    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
        })
        .catch((e) => console.log("ERROR editor"));
    };
  }, []);

  return <div id="editor" />;
};
