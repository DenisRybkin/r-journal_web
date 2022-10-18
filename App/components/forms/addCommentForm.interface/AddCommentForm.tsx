import React, {useState} from 'react';
import {Button, Input} from "@material-ui/core";
import styles from "./AddCommentForm.module.scss"

interface IAddCommentForm {

}

export const AddCommentForm: React.FC<IAddCommentForm> = (props) => {

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [comment, setComment] = useState("");

    const handleSendComment = () => {
        setIsFocused(false);
        setComment("");
    }

    const handleFocus = () => setIsFocused(true);

    return (
        <form className={styles.form}>
            <Input
                value={comment}
                minRows={isFocused ? 5 : 1}
                onFocus={handleFocus}
                onChange={e => setComment(e.target.value)}
                classes={{ root: styles.fieldRoot}}
                placeholder="Написать комментарий ..."
                fullWidth
                multiline
            />
            {isFocused &&
            <Button
                onClick={handleSendComment}
                className={styles.addButton}
                style={{height: 42}}
                variant="contained"
                color="primary">
                Опубликовать
            </Button>}
        </form>
    );
};

