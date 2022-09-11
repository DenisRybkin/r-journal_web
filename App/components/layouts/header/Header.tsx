import React, { useEffect, useState } from "react";
import { AuthDialog } from "../../dialogs/AuthDialog";
import { HeaderView } from "./HeaderView";
import { useRootStore } from "../../../hooks/useRoorStore";
import { observer } from "mobx-react-lite";

const HeaderObserver: React.FC = (IHeader) => {
  const { appStore } = useRootStore();

  const [isOpenAuthDialog, setIsOpenAuthDialog] = useState<boolean>(false);

  const handleOpenAuthDialog = () => setIsOpenAuthDialog(true);
  const handleCloseAuthDialog = () => setIsOpenAuthDialog(false);

  console.log(appStore.getIsOpenSidebar, 2222222222);

  return (
    <>
      <AuthDialog open={isOpenAuthDialog} onClose={handleCloseAuthDialog} />
      <HeaderView
        toggleSidebar={appStore.toggleIsOpenSidebar.bind(
          appStore.toggleIsOpenSidebar
        )}
        isAuth={true}
        onOpenAuthDialog={handleOpenAuthDialog}
      />
    </>
  );
};

export const Header = observer(HeaderObserver);
