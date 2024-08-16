import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      color: "#ffff",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#000000",
          color: "#000000",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#000000",
        },
      },
    },
  },
});

export default darkTheme;
