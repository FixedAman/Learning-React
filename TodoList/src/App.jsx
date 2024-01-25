import React from "react";
import AppName from "./components/AppName";
import AddItem from "./components/AddItem";
import Lists from "./components/Lists";
import TodoList from "./components/TodoList";

import "./App.css";
const App = () => {
  const lists = [
    {
      name: "Chawal",
      dates: "12.03.2024",
    },
    {
      name: "Buy Milk",
      dates: "12.04.2024",
    },
  ];
  return (
    <center className="Todo-Container kg-row">
      <AppName />
      <AddItem />
      <Lists Lists={lists} />
    </center>
  );
};

export default App;
