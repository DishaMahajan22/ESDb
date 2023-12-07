import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const GeneralFanForm = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  // Tab 1 - Player
  const [playerID, setPlayerID] = useState("");
  const [statisticID, setStatisticID] = useState("");
  const [name, setName] = useState("");
  const [gamerTag, setGamerTag] = useState("");
  const [dob, setDob] = useState(null);
  const [birthplace, setBirthplace] = useState("");

  // Tab 2 - Game
  const [gameName, setGameName] = useState("");
  const [sequelNumber, setSequelNumber] = useState("");
  const [genre, setGenre] = useState("");
  const [creator, setCreator] = useState("");
  const [teamSize, setTeamSize] = useState("");

  // Tab 3 - Event
  const [eventName, setEventName] = useState("");
  const [sponsorId, setSponsorId] = useState("");
  const [tournamentId, setTournamentId] = useState("");
  const [location, setLocation] = useState("");
  const [seats, setSeats] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(0);

  // Tab 4 - Tournament
  const [tournamentID, setTournamentID] = useState("");
  const [tournamentName, setTournamentName] = useState("");
  const [tournamentStartDate, setTournamentStartDate] = useState(null);
  const [tournamentEndDate, setTournamentEndDate] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul className="nav nav-tabs mx-5">
        <li className="nav-item">
          <div
            className={`nav-link ${activeTab === "tab1" ? "active" : ""}`}
            onClick={() => handleTabChange("tab1")}
          >
            Player
          </div>
        </li>
        <li className="nav-item">
          <div
            className={`nav-link ${activeTab === "tab2" ? "active" : ""}`}
            onClick={() => handleTabChange("tab2")}
          >
            Game
          </div>
        </li>
        <li className="nav-item">
          <div
            className={`nav-link ${activeTab === "tab3" ? "active" : ""}`}
            onClick={() => handleTabChange("tab3")}
          >
            Event
          </div>
        </li>
        <li className="nav-item">
          <div
            className={`nav-link ${activeTab === "tab4" ? "active" : ""}`}
            onClick={() => handleTabChange("tab4")}
          >
            Tournament
          </div>
        </li>
      </ul>

      <div className="tab-content">
        <div
          className={`tab-pane fade ${
            activeTab === "tab1" ? "show active" : ""
          }`}
        >
          <div className="d-flex flex-column mx-5 my-5">
            <label className="col-form-label">Player ID:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={playerID}
              onChange={(e) => setPlayerID(e.target.value)}
            />
            <label className="col-form-label">Statistic ID:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={statisticID}
              onChange={(e) => setStatisticID(e.target.value)}
            />
            <label className="col-form-label">Name:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="col-form-label">Gamer Tag:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={gamerTag}
              onChange={(e) => setGamerTag(e.target.value)}
            />
            <label className="col-form-label">Date of Birth:</label>
            <DatePicker
              selected={dob}
              onChange={(date) => setDob(date)}
              className="form-control mb-3"
              dateFormat="MM/dd/yyyy"
              placeholderText="MM/DD/YYYY"
            />
            <label className="col-form-label">Birthplace:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={birthplace}
              onChange={(e) => setBirthplace(e.target.value)}
            />
            <button type="button" className="btn btn-outline-dark btn-sm mt-3">
              Submit
            </button>
          </div>
        </div>

        <div
          className={`tab-pane fade ${
            activeTab === "tab2" ? "show active" : ""
          }`}
        >
          <div className="d-flex flex-column mx-5 my-5">
            <label className="col-form-label">Game Name:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={gameName}
              onChange={(e) => setGameName(e.target.value)}
            />
            <label className="col-form-label">Sequel Number:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={sequelNumber}
              onChange={(e) => setSequelNumber(e.target.value)}
            />
            <label className="col-form-label">Genre:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
            <label className="col-form-label">Creator:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={creator}
              onChange={(e) => setCreator(e.target.value)}
            />
            <label className="col-form-label">Team Size:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
            />
            <button type="button" className="btn btn-outline-dark btn-sm mt-3">
              Submit
            </button>
          </div>
        </div>

        <div
          className={`tab-pane fade ${
            activeTab === "tab3" ? "show active" : ""
          }`}
        >
          <div className="d-flex flex-column mx-5 my-5">
            <label className="col-form-label">Event Name:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
            <label className="col-form-label">Sponsor ID:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={sponsorId}
              onChange={(e) => setSponsorId(e.target.value)}
            />
            <label className="col-form-label">Tournament ID:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={tournamentId}
              onChange={(e) => setTournamentId(e.target.value)}
            />
            <label className="col-form-label">Location:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <label className="col-form-label">Seats:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
            />
            <label className="col-form-label">Start Date:</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="form-control mb-3"
              dateFormat="MM/dd/yyyy"
              placeholderText="MM/DD/YYYY"
            />
            <label className="col-form-label">End Date:</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="form-control mb-3"
              dateFormat="MM/dd/yyyy"
              placeholderText="MM/DD/YYYY"
            />
            <button type="button" className="btn btn-outline-dark btn-sm mt-3">
              Submit
            </button>
          </div>
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "tab4" ? "show active" : ""
          }`}
        >
          <div className="d-flex flex-column mx-5 my-5">
            <label className="col-form-label">Tournament ID:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={tournamentID}
              onChange={(e) => setTournamentID(e.target.value)}
            />
            <label className="col-form-label">Tournament Name:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={tournamentName}
              onChange={(e) => setTournamentName(e.target.value)}
            />
            <label className="col-form-label">Start Date:</label>
            <DatePicker
              selected={tournamentStartDate}
              onChange={(date) => setTournamentStartDate(date)}
              className="form-control mb-3"
              dateFormat="MM/dd/yyyy"
              placeholderText="MM/DD/YYYY"
            />
            <label className="col-form-label">End Date:</label>
            <DatePicker
              selected={tournamentEndDate}
              onChange={(date) => setTournamentEndDate(date)}
              className="form-control mb-3"
              dateFormat="MM/dd/yyyy"
              placeholderText="MM/DD/YYYY"
            />
            <button type="button" className="btn btn-outline-dark btn-sm mt-3">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralFanForm;
