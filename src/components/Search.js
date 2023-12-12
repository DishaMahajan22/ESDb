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
  const [resultsPerPage] = useState(1000);
  const [sponsorFilter, setSponsorFilter] = useState("");
  const [eventFilter, setEventFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editOwner, setEditOwner] = useState(false);
  const [editPlayer, setEditPlayer] = useState(false);
  const [editedGamerTag, setEditedGamerTag] = useState("");
  const [editedOwner, setEditedOwner] = useState("");

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

  //GENERAL DB SEARCH
  const handleSearch = async () => {
    setShouldRenderTable(false);
    console.log("Searching...");
    try {
      // Send a request to the server with query
      // const response = await fetch(
      //   `https://esdb-backend.onrender.com/search?searchItem=${searchItem}&searchName=${searchName}`
      // );
      // test url:
      console.log("items: " + searchItem + " " + searchName);
      const response = await fetch(
        `https://esdb-backend.onrender.com/search?searchItem=${searchItem}&searchName=${searchName}`
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

  // TOUNRAMENT GIVES EVENT NAMES IN TOURNAMENT AND SPONSORS
  const handleEventFilter = async () => {
    setShowEventQuery(false);
    if (searchName !== "" && searchItem === "Tournament") {
      try {
        console.log("Filtering Events for" + searchItem);
        console.log("search name " + searchName);
        const response = await fetch(
          `https://esdb-backend.onrender.com/searchEvent?searchItem=${searchItem}&searchName=${searchName}&sponsorName=${sponsorFilter}&startDate=${startDate}&endDate=${endDate}`
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
        console.log("BEFORE function shouldRenderTable:", shouldRenderTable);
        setShowEventQuery(true);
        console.log("function shouldRenderTable:", shouldRenderTable);
      }
    }
  };

  //WORKS (TOURNAMENT TEAM STATS AVERAGE)
  const handleTeamFilter = async () => {
    console.log("Handling Team Filter...");
    if (searchName !== "" && searchItem === "Tournament") {
      try {
        console.log("Filtering Teams for" + searchItem);
        console.log("search name " + searchName);
        const response = await fetch(
          `https://esdb-backend.onrender.com/searchTeamStats?searchItem=${searchItem}&searchName=${searchName}`
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

  //WORKS YET (GRAB OUTCOMES OF TEAM)
  const handleTeamEventOutcomes = async () => {
    console.log("Handling Team Event Outcomes...");
    if (searchName !== "" && searchItem === "Team") {
      try {
        console.log("Filtering Teams for" + searchItem);
        console.log("search name " + searchName);
        const response = await fetch(
          `https://esdb-backend.onrender.com/searchTeamEventOutcomes?searchName=${searchName}&eventFilter=${eventFilter}`
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

  //WORKS (FOR PLAYER) AND GRABS STATS OF PLAYER
  const handlePlayerStatSearch = async () => {
    if (searchName !== "" && searchItem === "Player") {
      console.log("Handling Player Stat search...");
      try {
        console.log("Filtering Teams for" + searchItem);
        console.log("search name " + searchName);
        const response = await fetch(
          `https://esdb-backend.onrender.com/searchPlayerStats?&searchName=${searchName}`
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
  const handleEditClick = (player) => {
    setEditPlayer(player);
    setEditedGamerTag(player.gamertag); // Assuming 'gamer_tag' is the property you want to edit
    setShowModal(true);
  };
  const handleOwnerClick = (team) => {
    setEditOwner(team);
    setEditedOwner(team.owner_name); // Assuming 'gamer_tag' is the property you want to edit
    setShowModal(true);
  };
  const handleSaveEdit = async () => {
    console.log("Updated gamer tag:", editedGamerTag);
    try {
      // Update the gamer tag in the editPlayer object
      const updatedPlayer = { ...editPlayer, gamertag: editedGamerTag };
      console.log("edit player: ", updatedPlayer);
      const response = await fetch("https://esdb-backend.onrender.com/updatePlayer", {
        method: "PUT", // Use PUT for updating
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPlayer),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log("Updated player object:", updatedPlayer);

      // Reset editPlayer & close the modal
      setEditPlayer(null);
      setShowModal(false);
    } catch (error) {}
  };
  const handleSaveOwner = async () => {
    console.log("Updated owner tag:", editedOwner);
    try {
      // Update the gamer tag in the editPlayer object
      const updatedOwner = { ...editOwner, owner_name: editedOwner };
      console.log("edit player: ", updatedOwner);
      const response = await fetch("https://esdb-backend.onrender.com/updateOwner", {
        method: "PUT", // Use PUT for updating
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedOwner),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log("Updated player object:", updatedOwner);

      // Reset editPlayer & close the modal
      setEditPlayer(null);
      setShowModal(false);
    } catch (error) {}
  };
  const handleDeleteRow = (row) => {
    let rowIdToDelete;
    const rowKeyMap = {
      Tournament: "tournament_id",
      Event: "event_name",
      Player: "player_id",
      Team: "team_id",
      Game: "game_name",
      Sponsor: "sponsor_id",
    };

    switch (searchItem) {
      case "Tournament":
        rowIdToDelete = row.tournament_id;
        break;
      case "Event":
        rowIdToDelete = row.event_name;
        break;
      case "Player":
        rowIdToDelete = row.player_id;
        break;
      case "Team":
        rowIdToDelete = row.team_id;
        break;
      case "Game":
        rowIdToDelete = row.game_name;
        break;
      case "Sponsor":
        rowIdToDelete = row.sponsor_id;
        break;
      default:
        break;
    }

    console.log("Row to delete info:", row);
    console.log("Row ID to delete:", rowIdToDelete);

    // Update the state to reflect the deletion
    const filteredResults = searchResults.filter(
      (elem) => elem[rowKeyMap[searchItem]] !== rowIdToDelete
    );

    setSearchResults([...filteredResults]);

    console.log("Row to delete info:", row);
    console.log("Row ID to delete:", rowIdToDelete);

    // Call your delete fetch call
  };

  useEffect(() => {
    if (searchResults !== null) {
      console.log("Search Results on re-render:", searchResults);
      setShouldRenderTable(true);
      // Separate the results by pages
      const slicedResults = searchResults.slice(
        (currentPage - 1) * resultsPerPage,
        currentPage * resultsPerPage
      );
      currentResults.current = [...slicedResults];
      console.log("Current Results on re-render:", currentResults.current);
    }
  }, [searchResults, currentPage, resultsPerPage, pageNumbers, currentResults]);
  useEffect(() => {
    setShowEventQuery(true);
  }, [eventResults]);
  return (
    <>
      <div className="input-group w-full mx-auto text-center p-5">
        <input
          type="text"
          className="form-control"
          aria-label="Text input with dropdown button"
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
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
              onClick={() => {
                setSearchItem("Tournament");
              }}
            >
              Tournament
            </div>
            <div
              className="dropdown-item"
              onClick={() => {
                setSearchItem("Event");
              }}
            >
              Event
            </div>
            <div
              className="dropdown-item"
              onClick={() => {
                setSearchItem("Player");
              }}
            >
              Player
            </div>
            <div
              className="dropdown-item"
              onClick={() => {
                setSearchItem("Team");
              }}
            >
              Team
            </div>
            <div
              className="dropdown-item"
              onClick={() => {
                setSearchItem("Game");
              }}
            >
              Game
            </div>
            <div
              className="dropdown-item"
              onClick={() => {
                setSearchItem("Sponsor");
              }}
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
            setShowEventQuery(false);
            setTeamResults("");
          }}
        >
          Search
        </button>
      </div>
      {(searchItem === "Tournament" || searchItem === "Team") && (
        <div className="accordion accordion-flush px-5" id="filterAccordion">
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
                        onClick={handleTeamEventOutcomes}
                      >
                        Apply Filter
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
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
                    <th scope="col">Tournament Name</th>
                    <th scope="col">Event Name</th>
                    <th scope="col">Winning Team</th>
                    <th scope="col">Winning Score</th>
                    <th scope="col">Losing Team</th>
                    <th scope="col">Losing Score</th>
                  </tr>
                </thead>
                <tbody>
                  {teamOutcomesResults.map((result, index) => (
                    <tr key={index}>
                      <td>{result.team_name}</td>
                      <td>{result.tournament_name}</td>
                      <td>{result.won_event}</td>
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
        {searchItem === "Tournament" &&
          teamResults &&
          teamResults.length > 0 && (
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
        {showEventQuery &&
          eventResults &&
          searchItem === "Tournament" &&
          eventResults.length > 0 && (
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
                      <td>{result.sponsor_name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        <h2>Results</h2>
        {currentResults && currentResults.current.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                {Object.keys(currentResults.current[0]).map((key, index) => (
                  <th key={index} scope="col">
                    {key}
                  </th>
                ))}
                <th scope="col">Delete</th>
                {(searchItem === "Player" || searchItem === "Team") && <th scope="col">Edit</th>}
              </tr>
            </thead>
            <tbody>
              {currentResults.current.map((result, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  {Object.values(result).map((value, idx) => (
                    <td key={idx}>{value}</td>
                  ))}
                  <td>
                    <button onClick={() => handleDeleteRow(result)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                    </button>
                  </td>
                  <td>
                    {searchItem === "Player" && (
                      <button onClick={() => handleEditClick(result)}>
                        {/* Your edit button */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pen-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
                        </svg>
                      </button>
                    )}
                    {searchItem === "Team" && (
                      <button onClick={() => handleOwnerClick(result)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pen-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
                        </svg>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No results found.</p>
        )}
        {searchItem === "Player" ? (<div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Gamer Tag</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <label htmlFor="editedGamerTag">New Gamer Tag:</label>
                <input
                  type="text"
                  id="editedGamerTag"
                  className="form-control"
                  value={editedGamerTag}
                  onChange={(e) => setEditedGamerTag(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSaveEdit}
                >
                  Save changes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>) : (
          <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Team Owner Name</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <label htmlFor="editedGamerTag">New Owner Name:</label>
                <input
                  type="text"
                  id="editedGamerTag"
                  className="form-control"
                  value={editedOwner}
                  onChange={(e) => setEditedOwner(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSaveOwner}
                >
                  Save changes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
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
