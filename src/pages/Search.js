import React from "react";
import { useState } from "react";
const Search = () => {
  const [selectedItem, setSelectedItem] = useState("Tournament"); // Default value

  return (
    <>
      <div class="input-group w-50 mx-auto text-center p-5">
        <input
          type="text"
          class="form-control"
          aria-label="Text input with dropdown button"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {selectedItem}
          </button>
          <div class="dropdown-menu">
            <div class="dropdown-item" onClick={()=>setSelectedItem('Tournament')}>
              Tournament
            </div>
            <div class="dropdown-item" onClick={()=>setSelectedItem('Player')}>
              Player
            </div>
            <div class="dropdown-item" onClick={()=>setSelectedItem('Team')}>
              Team
            </div>
            <div class="dropdown-item" onClick={()=>setSelectedItem('Game')}>
            Game
            </div>
          </div>
        </div>
      </div>

      <h2>Top Games</h2>
    </>
  );
};

export default Search;
