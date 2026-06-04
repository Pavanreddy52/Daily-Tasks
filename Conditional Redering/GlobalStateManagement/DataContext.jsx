import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" }
  ]);

  // Add Data
  const addItem = (name) => {
    const newItem = {
      id: Date.now(),
      name
    };

    setItems([...items, newItem]);
  };

  // Update Data
  const updateItem = (id, updatedName) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, name: updatedName }
          : item
      )
    );
  };

  // Remove Data
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <DataContext.Provider
      value={{
        items,
        addItem,
        updateItem,
        removeItem
      }}
    >
      {children}
    </DataContext.Provider>
  );
};