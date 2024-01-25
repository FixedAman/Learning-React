import Styles from "./App.module.css";
import React from "react";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

const App = () => {
  return (
    <div className={Styles.calculator}>
      <Display />
      <ButtonsContainer />
    </div>
  );
};

export default App;
