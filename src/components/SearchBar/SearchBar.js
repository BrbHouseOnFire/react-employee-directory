import React from "react";
import "./style.css";

function SearchBar(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language">Search Name:</label>
        <input
          onChange={props.searchChange}
          name="term"
          className="form-control"
          placeholder="Type to Search"
          id="term"
        />
      </div>
    </form>
  );
}

export default SearchBar;