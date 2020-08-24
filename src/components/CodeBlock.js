import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import IconButton from "@material-ui/core/IconButton";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

const CodeBlock = (props) => {
  return (
    <div style={{ position: "relative" }}>
      <CopyToClipboard text={props.content}>
        <IconButton
          style={{ position: "absolute", right: 0, top: 0 }}
          aria-label="copy"
          component="span"
        >
          <FileCopyOutlinedIcon />
        </IconButton>
      </CopyToClipboard>
      <div
        style={{
          minHeight: 50,
          backgroundColor: "black",
          paddingLeft: 15,
          paddingRight: 50,
          paddingBottom: 15,
          paddingTop: 15,
        }}
      >
        <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
          {props.content}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
