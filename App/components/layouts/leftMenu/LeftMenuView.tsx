import React from "react";
import { ILeftMenuView } from "./leftMenu.interface";
import styles from "./leftMenu.module.scss";
import Link from "next/link";
import { Button } from "@material-ui/core";
import clsx from "clsx";

export const LeftMenuView: React.FC<ILeftMenuView> = (props) => {
  return (
    <div className={styles.menu}>
      <ul>
        {props.menu.map((obj) => (
          <li key={obj.path}>
            <Link href={obj.path}>
              <a>
                <Button
                  className={clsx({
                    [styles.activeButton]: props.onCheckIsActive(obj.path),
                  })}
                  variant={
                    props.onCheckIsActive(obj.path) ? "contained" : "text"
                  }
                >
                  {obj.icon}
                  {obj.text}
                </Button>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
