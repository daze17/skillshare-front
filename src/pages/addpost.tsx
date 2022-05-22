import type { NextPage } from "next";
import React from "react";
import { useState } from "react";
import {
  Flex,
  Button,
  Box,
  Input,
  Tag,
  TagCloseButton,
  Heading,
} from "@chakra-ui/react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import WYSIWYGEditor from "@app/components/editor";
import { Formik, Form } from "formik";

const AddPost: NextPage = () => {
  const [tags, setTags] = useState(["Educational", "New"]);
  const [body, setBody] = useState("");

  function handleKeyDown(e: any) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
  }
  const removeTag = (index: any) => {
    setTags(tags.filter((el, i) => i !== index));
  };

  return (
    <Box>
      <Formik
        initialValues={{
          title: "",
        }}
        onSubmit={(data: any) => console.log(data, body, tags)}
      >
        {({ handleChange, handleBlur }: any) => (
          <Form>
            <Heading>Title</Heading>
            <Input
              placeholder="Title"
              marginBottom={5}
              onChange={handleChange}
              id="title"
            />
            <WYSIWYGEditor onChange={handleChange} setBody={setBody} />
            <Flex marginBottom={10}>
              {tags.map((tag, index) => (
                <div className="tag-item" key={index}>
                  <Tag marginRight={2}>
                    {tag} <TagCloseButton onClick={() => removeTag(index)} />
                  </Tag>
                </div>
              ))}
              <input
                type="text"
                placeholder="Type somthing"
                onKeyDown={handleKeyDown}
              />
            </Flex>
            <Button type="submit" colorScheme={"blue"}>
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AddPost;
