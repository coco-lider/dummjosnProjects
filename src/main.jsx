import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTheme, ThemeProvider } from '@mui/material'
import { CartProvider } from "./context/CartContext";

const clientQuery = new QueryClient();
const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={clientQuery}>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <App/>
        </CartProvider>
      </ThemeProvider>
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);