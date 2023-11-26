import React from "react";
import { useState } from "react";

const Search = () => {
  const [selectedItem, setSelectedItem] = useState("Tournament"); // Default value
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async() => {
    console.log("Searching...");
    try {
      // Send a request to the server with query
      const response = await fetch(`https://esdb.azurewebsites.net/search?query=${searchItem}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setSearchResults(data);
      console.log(`Searching for ${searchItem}`);
      console.log("Search Results:", searchResults);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <>
      <div className="input-group w-full mx-auto text-center p-5">
        <input
          type="text"
          className="form-control"
          aria-label="Text input with dropdown button"
          onChange={(e)=>setSearchItem(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary dropdown-toggle rounded-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {selectedItem}
          </button>
          <div className="dropdown-menu">
            <div className="dropdown-item" onClick={() => setSelectedItem('Tournament')}>
              Tournament
            </div>
            <div className="dropdown-item" onClick={() => setSelectedItem('Player')}>
              Player
            </div>
            <div className="dropdown-item" onClick={() => setSelectedItem('Team')}>
              Team
            </div>
            <div className="dropdown-item" onClick={() => setSelectedItem('Game')}>
              Game
            </div>
          </div>
        </div>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <h2>Top Games</h2>
    </>
  );
};

export default Search;
