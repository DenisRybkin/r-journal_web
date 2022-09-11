import React from "react";
import { NextPage } from "next";
import { TextField } from "@material-ui/core";
import { ContentLayout } from "../App/components/layouts/contentLayout/ContentLayout";
import { WriteForm } from "../App/components/elements/WriteForm";

interface IWritePage {}

const WritePage: NextPage<IWritePage> = (props) => {
  return (
    <ContentLayout hideComments hideMenu className="main-layout-white">
      <WriteForm />
    </ContentLayout>
  );
};

export default WritePage;
