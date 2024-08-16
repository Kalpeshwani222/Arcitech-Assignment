import React, { useContext, useState } from "react";
import RenderSubHeader from "./RenderSubHeader";

const SubHeader = () => {
  return (
    <div
      style={{
        color: "white",
        marginTop: "5rem",
        marginLeft: "10%",
        height: "50px",
        border: "1px solid red",
        display: "flex",
        alignItems: "center",
        padding: "5px",
        justifyContent: "space-between",
      }}
    >
      <h1>Home /1 </h1>

      {RenderSubHeader()}
    </div>
  );
};

export default SubHeader;
