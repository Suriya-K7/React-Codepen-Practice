import { createContext, useState, useEffect } from "react";
import useLocalStorage from "../hook/useLocalStorage";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  let [html, setHtml] = useLocalStorage("html", "");
  let [css, setCss] = useLocalStorage("css", "");
  let [js, setJs] = useLocalStorage("js", "");
  let [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    let timeout = setTimeout(() => {
      setSrcDoc(
        `<html>${html}</html>
        <style>${css}</style>
        <script>${js}</script>`
      );
      return () => clearTimeout(timeout);
    }, 1000);
  }, [html, css, js]);
  return (
    <DataContext.Provider
      value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
        srcDoc,
        setSrcDoc,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
