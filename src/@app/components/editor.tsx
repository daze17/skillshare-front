import { ContentState, convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const WYSIWYGEditor = ({ onChange, value, setBody }: any) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (!updated) {
      const defaultValue = value ? value : "";
      const blocksFromHtml = htmlToDraft(defaultValue);
      const contentState = ContentState.createFromBlockArray(
        blocksFromHtml.contentBlocks,
        blocksFromHtml.entityMap
      );
      const newEditorState = EditorState.createWithContent(contentState);
      setEditorState(newEditorState);
    }
  }, [value]);

  const onEditorStateChange = (editorState: any) => {
    setUpdated(true);
    setEditorState(editorState);
    setBody(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  return (
    <Editor
      spellCheck
      editorState={editorState}
      onEditorStateChange={onEditorStateChange}
      editorStyle={{ border: "1px solid  #f1f1f1", marginBottom: 10 }}
    />
  );
};

export default WYSIWYGEditor;
