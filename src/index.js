import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Enigma from "./Enigma";

const root = createRoot(document.getElementById("root"));
root.render(
    <Enigma/> 
);