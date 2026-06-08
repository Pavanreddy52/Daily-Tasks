import React, { useContext, useState } from "react";
import { DataContext } from "./DataContext";

function ItemList() {
  const { items, updateItem, removeItem } =
    useContext(DataContext);

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  return (
    <div>
      <h2>Items List</h2>

      {items.map((item) => (
        <div key={item.id}>
          {editId === item.id ? (
            <>
              <input
                value={editText}
                onChange={(e) =>
                  setEditText(e.target.value)
                }
              />

              <button
                onClick={() => {
                  updateItem(item.id, editText);
                  setEditId(null);
                }}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <span>{item.name}</span>

              <button
                onClick={() => {
                  setEditId(item.id);
                  setEditText(item.name);
                }}
              >
                Edit
              </button>

              <button
                onClick={() =>
                  removeItem(item.id)
                }
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ItemList;