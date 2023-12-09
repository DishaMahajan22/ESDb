import React from "react";
import { useState, useEffect, useRef, useMemo } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Search = () => {
  const [searchItem, setSearchItem] = useState("Tournament");
  const [searchName, setSearchName] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [eventResults, setEventResults] = useState(null);
  const [teamResults, setTeamResults] = useState(null);
  const [playerResults, setPlayerResults] = useState(null);
  const [teamOutcomesResults, setTeamOutcomesResults] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [shouldRenderTable, setShouldRenderTable] = useState(false);
  const [showEventQuery, setShowEventQuery] = useState(false);
  const [showTeamQuery, setShowTeamQuery] = useState(false);
  const [resultsPerPage] = useState(25);
  const [sponsorFilter, setSponsorFilter] = useState("");
  const [eventFilter, setEventFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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
      // Send a request to the server with query
      // const response = await fetch(
      //   `https://esdb-backend.onrender.com/search?searchItem=${searchItem}&searchName=${searchName}`
      // );
      // test url:
      const response = await fetch(
        `http://localhost:5000/search?searchItem=${searchItem}&searchName=${searchName}`
      );
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
    }
  };

  const handleEventFilter = async () => {
    if (searchName !== "" && searchItem === "Tournament") {
      try {
        console.log("Filtering Events for" + searchItem);
        console.log("search name " + searchName);
        const response = await fetch(
          `http://localhost:5000/searchEvent?searchItem=${searchItem}&searchName=${searchName}&sponsorName=${sponsorFilter}&startDate=${startDate}&endDate=${endDate}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setEventResults(data);
      } catch (error) {
        console.error("Error searching:", error);
      } finally {
        console.log("Got Event Filters Result");
        console.log("Search Results:", eventResults);
        setShowEventQuery(true);
        setShowTeamQuery(true);
      }
    }
  };

  const handleTeamFilter = async () => {
    console.log("Handling Team Filter...");
    if (searchName !== "" && searchItem === "Tournament") {
      try {
        console.log("Filtering Teams for" + searchItem);
        console.log("search name " + searchName);
        const response = await fetch(
          `http://localhost:5000/searchTeamStats?searchItem=${searchItem}&searchName=${searchName}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setTeamResults(data);
      } catch (error) {
        console.error("Error team req:", error);
      }
    }
  };

  const handleTeamEventOutcomes = async () => {
    console.log("Handling Team Event Outcomes...");
    if (searchName !== "" && searchItem === "Tournament") {
      try {
        console.log("Filtering Teams for" + searchItem);
        console.log("search name " + searchName);
        const response = await fetch(
          `http://localhost:5000/searchTeamEventOutcomes?searchName=${searchName}&eventFilter=${eventFilter}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setTeamOutcomesResults(data);
      } catch (error) {
        console.error("Error team req:", error);
      }
    }
  };
  const handlePlayerStatSearch = async () => {
    if (searchName !== "" && searchItem === "Player") {
      console.log("Handling Player Stat search...");
      try {
        console.log("Filtering Teams for" + searchItem);
        console.log("search name " + searchName);
        const response = await fetch(
          `http://localhost:5000/searchPlayerStats?&searchName=${searchName}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPlayerResults(data);
      } catch (error) {
        console.error("Error team req:", error);
      }
    }
  };
  useEffect(() => {
    if (searchResults !== null) {
      console.log("Search Results:", searchResults);
      setShouldRenderTable(true);
      // Separate the results by pages
      currentResults.current = [];
      currentResults.current.push(...searchResults.slice(
        (currentPage - 1) * resultsPerPage,
        currentPage * resultsPerPage
      ));
      console.log(currentResults.current);
    }
    console.log("shouldRenderTable:", shouldRenderTable);
  }, [searchResults, currentPage, resultsPerPage, pageNumbers, shouldRenderTable]);
  useEffect(() => {
    setShowEventQuery(true);
    setShowTeamQuery(true);
  }, [eventResults]);
  return (
    <>
      <div className="input-group w-full mx-auto text-center p-5">
        <input
          type="text"
          className="form-control"
          aria-label="Text input with dropdown button"
          onChange={(e) => {setSearchName(e.target.value);}}
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
              onClick={() => {setSearchItem("Tournament");  setSearchName("");}}
            >
              Tournament
            </div>
            <div
              className="dropdown-item"
              onClick={() => {setSearchItem("Event");  setSearchName("");}}
            >
              Event
            </div>
            <div
              className="dropdown-item"
              onClick={() => {setSearchItem("Player");  setSearchName("");}}
            >
              Player
            </div>
            <div
              className="dropdown-item"
              onClick={() => {setSearchItem("Team");  setSearchName("");}}
            >
              Team
            </div>
            <div
              className="dropdown-item"
              onClick={() => {setSearchItem("Game"); setSearchName("");}}
            >
              Game
            </div>
            <div
              className="dropdown-item"
              onClick={() => {setSearchItem("Sponsor");  setSearchName("");}}
            >
              Sponsor
            </div>
          </div>
        </div>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => {
            handleSearch();
            handleTeamFilter();
            handlePlayerStatSearch();
            handleTeamEventOutcomes();
          }}
        >
          Search
        </button>
      </div>
      {(searchItem === "Tournament" || searchItem === "Team")&& (<div className="accordion accordion-flush px-5" id="filterAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Filters
            </button>
          </h2>
          <hr></hr>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#filterAccordion"
          >
            {searchItem === "Tournament" && (
              <div className="accordion-body">
                <h2>Event Filter</h2>
                <div className="mb-3">
                  <div className="d-flex flex-column justify-content-start">
                    <label htmlFor="sponsorFilter" className="form-label">
                      Only Display Sponsor with Name:
                    </label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      id="sponsorFilter"
                      value={sponsorFilter}
                      onChange={(e) => setSponsorFilter(e.target.value)}
                    />
                    <label htmlFor="startDate" className="form-label me-2">
                      Event Starting At Date:
                    </label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="form-control mb-3"
                      dateFormat="MM/dd/yyyy"
                      placeholderText="MM/DD/YYYY"
                    />
                    <label htmlFor="endDate" className="form-label me-2">
                      Event End At Date:
                    </label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      className="form-control mb-3"
                      dateFormat="MM/dd/yyyy"
                      placeholderText="MM/DD/YYYY"
                    />
                    <button
                      type="button"
                      class="btn btn-dark"
                      onClick={handleEventFilter}
                    >
                      Apply Filter
                    </button>
                  </div>
                </div>
              </div>
            )}
            {searchItem === "Team" && (
              <div className="accordion-body">
                <h2>Event Filter</h2>
                <div className="mb-3">
                  <div className="d-flex flex-column justify-content-start">
                    <label htmlFor="sponsorFilter" className="form-label">
                      Only Team Event Outcomes For Event:
                    </label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      id="sponsorFilter"
                      value={eventFilter}
                      onChange={(e) => setEventFilter(e.target.value)}
                    />
                    <button
                      type="button"
                      class="btn btn-dark"
                      onClick={()=>handleTeamEventOutcomes}
                    >
                      Apply Filter
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>)}
      <div className="px-5">
      {searchItem === "Team" &&
          teamOutcomesResults &&
          teamOutcomesResults.length > 0 && (
            <div>
              <h2>Team Event Outcomes of {searchName}</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Team Name</th>
                    <th scope="col">Team Owner</th>
                    <th scope="col">Most Used Weapon</th>
                    <th scope="col">Most Played Character</th>
                    <th scope="col">Accuracy</th>
                    <th scope="col">K/D Ratio</th>
                    <th scope="col">Win Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {teamOutcomesResults.map((result, index) => (
                    <tr key={index}>
                      <td>{result.team_name}</td>
                      <td>{result.tournament_name}</td>
                      <td>{result.event_name}</td>
                      <td>{result.winning_team}</td>
                      <td>{result.winning_score}</td>
                      <td>{result.losing_team}</td>
                      <td>{result.losing_score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        {searchItem === "Player" &&
          playerResults &&
          playerResults.length > 0 && (
            <div>
              <h2>Player Stats of {searchName}</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Team Name</th>
                    <th scope="col">Team Owner</th>
                    <th scope="col">Most Used Weapon</th>
                    <th scope="col">Most Played Character</th>
                    <th scope="col">Accuracy</th>
                    <th scope="col">K/D Ratio</th>
                    <th scope="col">Win Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {playerResults.map((result, index) => (
                    <tr key={index}>
                      <td>{result.team_name}</td>
                      <td>{result.team_owner}</td>
                      <td>{result.most_used_weapon}</td>
                      <td>{result.most_played_character}</td>
                      <td>{result.accuracy}</td>
                      <td>{result.k_d_ratio}</td>
                      <td>{result.win_rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        {showTeamQuery && teamResults && teamResults.length > 0 && (
          <div>
            <h2>All Teams in Tournament {searchName}</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Team Name</th>
                  <th scope="col">Avg Accuracy</th>
                  <th scope="col">Avg K/D</th>
                  <th scope="col">Avg Win Rate</th>
                </tr>
              </thead>
              <tbody>
                {teamResults.map((result, index) => (
                  <tr key={index}>
                    <td>{result.team_name}</td>
                    <td>{result.average_accuracy}</td>
                    <td>{result.average_k_d_ratio}</td>
                    <td>{result.average_win_rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {showEventQuery && eventResults && eventResults.length > 0 && (
          <div>
            <h2>All Events in Tournament {searchName}</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Event Name</th>
                  <th scope="col">Sponsor Name</th>
                </tr>
              </thead>
              <tbody>
                {eventResults.map((result, index) => (
                  <tr key={index}>
                    <td>{result.event_name}</td>
                    <td>{result.sponsor_name}</td> {/* Use Sponsor_Name here */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <h2>Results</h2>
        {shouldRenderTable && currentResults.current.length > 0 ? (
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
