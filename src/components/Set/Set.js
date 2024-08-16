import React, { useContext, useEffect } from "react";
import data from "../../data.json";
import { Card, Grid, Typography } from "@mui/material";
import {} from "react-router-dom";
import ViewContext from "../../context/ViewContext";
const Set = () => {
  const {} = useContext(ViewContext);

  // React.useEffect(() => {
  //   updateHeaderActions({
  //     onEdit: () => {
  //       setMode("edit");
  //     },
  //     onCancel: () => {
  //       setMode("view");
  //     },
  //     onSaveChanges: () => {
  //       alert(".......api call for set changes done..........");
  //     },
  //   });

  //   // Reset to default view mode when leaving this page
  //   return () => {
  //     updateHeaderActions({
  //       onCreate: null,
  //       onEdit: null,
  //       onSaveChanges: null,
  //       onCancel: null,
  //     });
  //   };
  // }, [updateHeaderActions]);

  return (
    <div style={{ color: "white" }}>
      <Grid container spacing={1}>
        {data.map((el, ind) => {
          return (
            <Grid item xs={3} sm={3} md={2} lg={3} key={ind}>
              <Card width={345} height={60}>
                <Typography mr={"auto"}>Set</Typography>
                <Typography ml={"auto"}>Image</Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Set;
