import React from "react";
import Styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  const ButtonNames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "5",
    "-",
    "6",
    "7",
    "*",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={Styles.buttonsContainer}>
      {ButtonNames.map((buttonName) => (
        <button className={Styles.button}>{buttonName}</button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
