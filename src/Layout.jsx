import React from "react";
import { Outlet } from "react-router-dom";
import SubHeader from "./components/SubHeader";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ViewContextProvider from "./context/ViewContextProvider";

const Layout = () => {
  return (
    <div>
      <ViewContextProvider>
        <Header />
        <SubHeader />

        <Sidebar />
        <div style={{ marginLeft: "10%", marginTop: "1%" }}>
          <Outlet />
        </div>
      </ViewContextProvider>
    </div>
  );
};

export default Layout;
