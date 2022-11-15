import React from "react";
import { createRoot } from "react-dom/client";
import QuestionCards from "./QuestionCards";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<QuestionCards />);
