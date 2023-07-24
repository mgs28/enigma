import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Rotors from "./Rotors";

const root = createRoot(document.getElementById("root"));
root.render(
    <Rotors/> 
);