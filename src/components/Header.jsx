import React from "react";
import { AppBar, Box, Toolbar, Divider } from "@mui/material";
import RenderHeader from "./RenderHeader";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ backgroundColor: "#000", paddingTop: "0.4rem" }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          {RenderHeader()}
        </Box>
      </Toolbar>

      <Divider
        orientation="horizontal"
        flexItem
        style={{ borderColor: "#444444", width: "102%" }}
      />
    </AppBar>
  );
};

export default Header;
