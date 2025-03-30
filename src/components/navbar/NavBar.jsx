import React, { useState } from "react";
import Search from "../search/Search";
import Button from "../button/Button";
import "./navbar.css";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import FeedbackFrom from "../feedbackForm/FeedbackFrom";
const NavBar = () => {
  const [showForm, setShowForm] = useState(false);
  const toggle = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      <nav>
        <Link to="/">
          <Logo />
        </Link>
        <Search placeHolder={"Search a song of your choice"} />
        <Button children={"Give Feedback"} onClick={toggle} />
      </nav>
      {showForm === true && <FeedbackFrom toggleForm={toggle} />}
    </>
  );
};

export default NavBar;
