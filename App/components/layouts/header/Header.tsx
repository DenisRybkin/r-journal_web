import React, { useState } from "react";
import { AuthDialog } from "../../modules/dialogs/authDialog/AuthDialog";
import { HeaderView } from "./HeaderView";
import { useRootStore } from "../../../hooks/useRoorStore";
import { observer } from "mobx-react-lite";
import { IHeader } from "./header.interface";

const HeaderObserver: React.FC = (props: IHeader) => {
  const { appStore } = useRootStore();

  const [isOpenAuthDialog, setIsOpenAuthDialog] = useState<boolean>(false);

  const handleOpenAuthDialog = () => setIsOpenAuthDialog(true);
  const handleCloseAuthDialog = () => setIsOpenAuthDialog(false);

  return (
    <>
      <AuthDialog open={isOpenAuthDialog} onClose={handleCloseAuthDialog} />
      <HeaderView
        toggleSidebar={appStore.toggleIsOpenSidebar.bind(appStore)}
        //toggleSidebar={testStore.toggleIsOpenSidebar.bind(testStore)}
        isAuth={false}
        onOpenAuthDialog={handleOpenAuthDialog}
      />
    </>
  );
};

export const Header = observer(HeaderObserver);
