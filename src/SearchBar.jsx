import React, { useState } from "react";

const SearchBar = ({ setCity }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter City"
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default SearchBar;
