import React from "react";

import "./search.css";
const Search = ({ placeHolder }) => {
  return (
    <>
      <form className="search">
        <input className="search-input" type="text" placeholder={placeHolder} />
        <button className="search-button" type="submit">
          <img src={"/Searchicon.svg"} alt="Search Icon" />
        </button>
      </form>
    </>
  );
};

export default Search;
