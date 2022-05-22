import type { NextPage } from "next";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  Flex,
  Text,
  Button,
  Box,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import { ContentState, convertToRaw, EditorState, Modifier } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Routes from "@app/routes/routers";
import Router from "next/router";

import { Controller, useForm } from "react-hook-form";
import WYSIWYGEditor from "@app/components/editor";
import { stripHtml } from "string-strip-html";

// type FormValues = {
//   ReactDatepicker: string;
// }

const AddPost: NextPage = () => {
  // const {
  //   formState: { errors },
  //   control,
  // } = useForm();
  const {
    formState: { errors },
    handleSubmit,
    control,
  }: any = useForm();

  return (
    <Box>
      <form onSubmit={handleSubmit((data: any) => console.log(data))}>
        <Controller
          render={({ field }) => <WYSIWYGEditor {...field} />}
          name="description"
          control={control}
          defaultValue=""
          // rules={{
          //   validate: {
          //     required: (v) =>
          //       (v && stripHtml(v).result.length > 0) ||
          //       "Description is required",
          //     maxLength: (v) =>
          //       (v && stripHtml(v).result.length <= 2000) ||
          //       "Maximum character limit is 2000",
          //   },
          // }}
        />
        <Button type="submit">send</Button>
      </form>
      {/* <WYSIWYGEditor/> */}
    </Box>
  );
};

export default AddPost;
