import React from "react";
import Header from "./components/Header";
import Code from "./components/Code";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <div className="app">
      <DataProvider>
        <Header />
        <Code />
      </DataProvider>
    </div>
  );
};

export default App;
