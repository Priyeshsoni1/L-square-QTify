import { Feedback } from "@mui/icons-material";
import "./button.css";

import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
};

export default Button;
