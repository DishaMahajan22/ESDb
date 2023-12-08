import React from "react";
import { useState, useEffect, useRef, useMemo } from "react";

const Search = () => {
  const [searchItem, setSearchItem] = useState("Tournament");
  const [searchName, setSearchName] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [shouldRenderTable, setShouldRenderTable] = useState(false);
  const [resultsPerPage] = useState(25);
  let currentResults = useRef([]);
  const pageNumbers = useMemo(() => {
    const numbers = [];
    for (
      let i = 1;
      i <= Math.ceil(searchResults?.length / resultsPerPage);
      i++
    ) {
      numbers.push(i);
    }
    return numbers;
  }, [searchResults, resultsPerPage]);

  const handleSearch = async () => {
    console.log("Searching...");
    try {
      setLoading(true);
      // Send a request to the server with query
      const response = await fetch(
        `https://esdb-backend.onrender.com/search?searchItem=${searchItem}&searchName=${searchName}`
      );
      //test url:
      // const response = await fetch(
      //   `http://localhost:5000/search?searchItem=${searchItem}&searchName=${searchName}`
      // );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setSearchResults(data);
      console.log(`Searching for ${searchItem}`);
    } catch (error) {
      console.error("Error searching:", error);
    } finally {
      console.log("Set false");
      console.log("Search Results:", searchResults);
      console.log("Current Results:", currentResults.current);
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  useEffect(() => {
    if (searchResults !== null) {
      console.log("Search Results:", searchResults);
      setShouldRenderTable(true);
      setLoading(false);
      // Separate the results by pages
      currentResults.current =
        searchResults &&
        searchResults.slice(
          (currentPage - 1) * resultsPerPage,
          currentPage * resultsPerPage
        );
    }
  }, [searchResults, currentPage, resultsPerPage, pageNumbers]);
  return (
    <>
      <div className="input-group w-full mx-auto text-center p-5">
        <input
          type="text"
          className="form-control"
          aria-label="Text input with dropdown button"
          onChange={(e) => setSearchName(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary dropdown-toggle rounded-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {searchItem}
          </button>
          <div className="dropdown-menu">
            <div
              className="dropdown-item"
              onClick={() => setSearchItem("Tournament")}
            >
              Tournament
            </div>
            <div
              className="dropdown-item"
              onClick={() => setSearchItem("Player")}
            >
              Player
            </div>
            <div
              className="dropdown-item"
              onClick={() => setSearchItem("Team")}
            >
              Team
            </div>
            <div
              className="dropdown-item"
              onClick={() => setSearchItem("Game")}
            >
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
      <div className="px-5">
        <h2>Results</h2>
        {loading ? (
          <p>Loading...</p>
        ) : shouldRenderTable && currentResults.current.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                {Object.keys(currentResults.current[0]).map((key, index) => (
                  <th key={index} scope="col">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentResults.current.map((result, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  {Object.values(result).map((value, idx) => (
                    <td key={idx}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No results found.</p>
        )}
      </div>
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 && "disabled"}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage - 1)}
              tabIndex="-1"
            >
              Previous
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${currentPage === number && "active"}`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === pageNumbers.length && "disabled"
            }`}
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Search;
