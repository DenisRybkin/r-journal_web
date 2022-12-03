import React from "react";
import { Paper, Typography } from "@material-ui/core";
import styles from "./post.module.scss";
import Link from "next/link";
import Image from "next/image";
import { PostActions } from "../../elements/postActions/PostActions";
import { PostContextMenuControl } from "../../elements/contextMenu/controls/postContextMenuControl/PostContextMenuControl";
import { IPostView } from "./post.interface";

export const PostView = (props: IPostView) => {
  return (
    <PostContextMenuControl
      onComment={props.onComment}
      onShare={props.onShare}
      onRepost={props.onRepost}
      onAddToFavorite={props.onAddToFavorite}
    >
      <Paper
        elevation={0}
        className="pt-10 pr-10 pl-10 pb-5"
        classes={{ root: styles.paper }}
      >
        <Typography variant="h5" className={styles.title}>
          <Link href="/news/test-123">
            <a>
              Кот прилёг отдохнуть в английском парке миниатюр — и стал героем
              шуток и фотожаб о «гигантском пушистом захватчике»
            </a>
          </Link>
        </Typography>
        <Typography className="mt-5 mb-7">
          Пока одни не могли соотнести размеры животного и окружения, другие
          начали создавать апокалиптические сюжеты с котом в главной роли.
        </Typography>
        <Image
          src="https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/"
          height={500}
          width={600}
        />
        <PostActions />
      </Paper>
    </PostContextMenuControl>
  );
};
