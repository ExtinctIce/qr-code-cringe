import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import "./dasd.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout /> 
  </BrowserRouter>
);