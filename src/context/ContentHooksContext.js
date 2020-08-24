import React, { useState, createContext } from "react";

export const ContentHooks = createContext();

export const ContentHooksContext = ({ children }) => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  return (
    <ContentHooks.Provider
      value={{
        items,
        setItems,
        input,
        setInput,
      }}
    >
      {children}
    </ContentHooks.Provider>
  );
};

export default ContentHooksContext;
