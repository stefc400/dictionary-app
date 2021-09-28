import React, { useState } from "react";
import "./Dictionary.css";
export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert("Searching");
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Enter a word..."
          onChange={handleKeywordChange}
        ></input>
      </form>
    </div>
  );
}
