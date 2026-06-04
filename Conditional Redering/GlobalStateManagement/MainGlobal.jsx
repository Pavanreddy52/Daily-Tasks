import React from "react";
import AddItem from "./AddItem";
import ItemList from "./ItemList";

function MainGlobal() {
  return (
    <div>
      <h1>Context API CRUD Example</h1>

      <AddItem />
      <ItemList />
    </div>
  );
}

export default MainGlobal;