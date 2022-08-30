import React from 'react';
import {NextPage} from "next";
import {TextField} from "@material-ui/core";
import {MainLayout} from "../layouts/MainLayout";

interface IWritePage {

}

const WritePage: NextPage<IWritePage> = (props) => {
    return (
        <MainLayout>
            <div style={{ backgroundColor: '#fff'}}>
                <TextField placeholder="Заголовок" />
            </div>
        </MainLayout>
    );
};

export default WritePage

