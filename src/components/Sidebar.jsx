import { Drawer, List } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const drawerWidth = 105;

const siderBarIconData = [
  {
    name: "Catalogue",
  },
  {
    name: "Category",
  },
  {
    name: "Collection",
  },
  {
    name: "Set",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#333",
            color: "#fff",
          },
        }}
      >
        <List>
          <div className="sidebar-icons-space">
            {siderBarIconData.map((data, index) => {
              return (
                <div
                  key={index}
                  style={{
                    border: "1px solid red",
                    padding: "10px",
                    margin: "5px",
                  }}
                >
                  <Link to="/"> {data.name} </Link>
                </div>
              );
            })}
          </div>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
