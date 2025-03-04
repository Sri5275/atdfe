import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#343a40ff", // Onyx for primary actions
    },
    background: {
      default: "#f8f9faff", // Seasalt for background
    },
    text: {
      primary: "#212529ff", // Eerie black for primary text
      secondary: "#6c757dff", // Slate gray for secondary text
    },
    grey: {
      100: "#f8f9faff", // Seasalt
      200: "#e9ecefff", // Antiflash white
      300: "#dee2e6ff", // Platinum
      400: "#ced4daff", // French gray
      500: "#adb5bdff", // French gray 2
      600: "#6c757dff", // Slate gray
      700: "#495057ff", // Outer space
      800: "#343a40ff", // Onyx
      900: "#212529ff", // Eerie black
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
