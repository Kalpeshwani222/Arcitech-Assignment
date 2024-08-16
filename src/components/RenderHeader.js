import React, { useContext } from "react";
import ViewContext from "../context/ViewContext";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  InputBase,
  Divider,
} from "@mui/material";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));
const RenderHeader = () => {
  const { mode, onSaveChanges, onCancel } = useContext(ViewContext);
  switch (mode) {
    case "view":
      return (
        <>
          <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <button>Cart</button>

          <button>Notification</button>
        </>
      );

    case "edit":
      return (
        <>
          <button onClick={onSaveChanges}>Save</button>
          <button onClick={onCancel}>Cancel</button>
        </>
      );

    case "create":
      return (
        <>
          <button>Cart</button>

          <button>Cancel</button>
        </>
      );

    case "cart":
      return (
        <>
          <button>Create</button>

          <button>Clear</button>
        </>
      );
  }
};

export default RenderHeader;
