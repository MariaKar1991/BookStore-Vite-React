import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

// Using ReactDOM.createRoot to render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  // Wrapping the entire application with BrowserRouter for routing
  <BrowserRouter>
    {/* Providing Snackbar notifications using SnackbarProvider */}
    <SnackbarProvider>
      {/* Rendering the main App component */}
      <App />
    </SnackbarProvider>
  </BrowserRouter>
);
