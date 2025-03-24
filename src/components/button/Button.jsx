import { Feedback } from "@mui/icons-material";
import "./button.css";

import React, { useEffect, useState } from "react";
import FeedbackFrom from "../feedbackForm/FeedbackFrom";

const Button = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      <button onClick={toggleForm}>{children}</button>
      {showForm===true && <FeedbackFrom toggleForm={toggleForm}/>}
    </>
  );
};

export default Button;
