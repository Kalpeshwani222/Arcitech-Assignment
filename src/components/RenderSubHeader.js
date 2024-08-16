import React, { useContext } from "react";
import ViewContext from "../context/ViewContext";
import { MenuItem, Select } from "@mui/material";

const RenderSubHeader = () => {
  const [selectedOption, setSelectedOption] = React.useState("");
  const { mode, onEdit } = useContext(ViewContext);

  const options = [
    { option: "By Category", link: "/Category" },
    { option: "By Collection", link: "/Collection" },
  ];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  switch (mode) {
    case "view":
      return (
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <button>Sort</button>
          <button onClick={onEdit}>Edit</button>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"Create set"}
            label="Age"
            onChange={handleChange}
          >
            {options.map((option) => (
              <MenuItem value={option.link}>{option.option}</MenuItem>
            ))}
          </Select>
          {/* end. */}
        </div>
      );
    case "create":
      return (
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <button>Sort</button>
          <button>Filter</button>
        </div>
      );
    case "edit":
      return <h1>Edit</h1>;

    case "cart":
      return (
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"Create set"}
          label="Age"
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem value={option.link}>{option.option}</MenuItem>
          ))}
        </Select>
      );
  }
};

export default RenderSubHeader;
