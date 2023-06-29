import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import HtmlSharpIcon from "@mui/icons-material/HtmlSharp";
import CssSharpIcon from "@mui/icons-material/CssSharp";
import JavascriptSharpIcon from "@mui/icons-material/JavascriptSharp";

const Editor = ({ displayName, language, value, onChange, color }) => {
  const [open, setOpen] = useState(true);
  function handleChange(editor, data, value) {
    onChange(value);
  }
  let style = {
    fontSize: "36px",
    color: `${color}`,
  };

  return (
    <div className={`editor-container ${open ? "" : "collapsed"} `}>
      <div className="editor-title">
        {displayName === "HTML" ? <HtmlSharpIcon style={style} /> : ""}
        {displayName === "CSS" ? <CssSharpIcon style={style} /> : ""}
        {displayName === "JS" ? <JavascriptSharpIcon style={style} /> : ""}
        <button className="btn" onClick={() => setOpen((prev) => !prev)}>
          {open ? <OpenInFullIcon /> : <CloseFullscreenIcon />}
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
};

export default Editor;
