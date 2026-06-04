import React, { useState, useContext } from "react";
import { DataContext } from "./DataContext";

function AddItem() {
  const [name, setName] = useState("");
  const { addItem } = useContext(DataContext);

  const handleSubmit = () => {
    if (!name.trim()) return;

    addItem(name);
    setName("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter item"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default AddItem;