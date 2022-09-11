import React, {useEffect} from 'react';
import dynamic from "next/dynamic";
import styles from "./WirteForm.module.scss"
import {Button, Input} from "@material-ui/core";
import {TextsmsOutlined as MessageIcon} from "@material-ui/icons";

interface IWriteForm {
    title?: string;

}

const Editor = dynamic(() => import('../Editor').then(m => m.Editor), {ssr: false});

export const WriteForm : React.FC<IWriteForm> = (props) => {
    return (
        <div>
            <Input
                classes={{ root: styles.titleField }}
                placeholder="Заголовок"
                defaultValue={props.title}
            />
            <div className={styles.editor}>
                <Editor />
            </div>
            <Button style={{ height: 42 }} variant="contained" color="primary">
                Опубликовать
            </Button>
        </div>
    );
};

