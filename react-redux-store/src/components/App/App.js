import React from "react";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import ItemList from "../item-list/ItemList";

const App = () => {
  const tasks = useSelector((state) => state.itemReducers.itemList);

  return (
    <Container maxWidth="lg">
      <button
        onClick={() => {
          console.log(tasks);
        }}
      >
        111
      </button>
      <ItemList items={tasks} />
    </Container>
  );
};
export default App;
