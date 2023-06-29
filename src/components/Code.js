import React, { useContext } from "react";
import Editor from "./Editor";
import DataContext from "../context/DataContext";

const Code = () => {
  const { html, setHtml, css, setCss, js, setJs, srcDoc } =
    useContext(DataContext);
  return (
    <div className="code">
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
          color="#FF3C41"
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
          color="#0EBEFF"
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
          color="#FCD000"
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default Code;
