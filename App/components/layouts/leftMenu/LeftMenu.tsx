import React from "react";
import { useRouter } from "next/router";
import { LeftMenuView } from "./LeftMenuView";
import { menuLinks } from "../../../utils/appLinks";

export const LeftMenu: React.FC = () => {
  const router = useRouter();

  const handleCheckIsActive = (path: string): boolean => router.asPath === path;

  return (
    <LeftMenuView menu={menuLinks} onCheckIsActive={handleCheckIsActive} />
  );
};
