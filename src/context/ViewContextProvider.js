import React, { useState, useCallback } from "react";
import ViewContext from "./ViewContext";

const ViewContextProvider = ({ children }) => {
  const [mode, setMode] = useState("view");

  const onSaveChanges = useCallback(() => {
    alert("set Save Changes");
  }, []);

  const onCancel = useCallback(() => {
    setMode("view");
    console.log("Cancel");
    // Navigate or perform cancellation logic
  }, []);

  const onCreate = useCallback(() => {
    setMode("create");
  }, []);

  const onEdit = useCallback(() => {
    setMode("edit");
  }, []);

  return (
    <ViewContext.Provider
      value={{ mode, setMode, onEdit, onSaveChanges, onCancel }}
    >
      {children}
    </ViewContext.Provider>
  );
};

export default ViewContextProvider;
