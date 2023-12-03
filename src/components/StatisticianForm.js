import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const StatisticianForm = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  // Tab 1 - Outcome
  const [outcomeID, setOutcomeID] = useState("");
  const [sponsorID, setSponsorID] = useState("");
  const [eventName, setEventName] = useState("");
  const [winningTeamName, setWinningTeamName] = useState("");
  const [losingTeamName, setLosingTeamName] = useState("");
  const [winningTeamScore, setWinningTeamScore] = useState("");
  const [losingTeamScore, setLosingTeamScore] = useState("");

  // Tab 2 - Tournament
  const [tournamentID, setTournamentID] = useState("");
  const [tournamentName, setTournamentName] = useState("");
  const [tournamentStartDate, setTournamentStartDate] = useState(null);
  const [tournamentEndDate, setTournamentEndDate] = useState(null);

  // Tab 3 - Statistic
  const [statisticID, setStatisticID] = useState("");
  const [playerID, setPlayerID] = useState("");
  const [mostUsedWeapon, setMostUsedWeapon] = useState("");
  const [mostPlayedCharacter, setMostPlayedCharacter] = useState("");
  const [accuracy, setAccuracy] = useState("");
  const [kdRatio, setKDRatio] = useState("");
  const [winRate, setWinRate] = useState("");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleOutcomeSubmit = (e) => {
    e.preventDefault(); 
    // Handle form submission for Outcome tab
    console.log("Outcome ID:", outcomeID);
    console.log("Sponsor ID:", sponsorID);
    console.log("Event Name:", eventName);
    console.log("Winning Team Name:", winningTeamName);
    console.log("Losing Team Name:", losingTeamName);
    console.log("Winning Team Score:", winningTeamScore);
    console.log("Losing Team Score:", losingTeamScore);
  };

  const handleTournamentSubmit = (e) => {
    e.preventDefault(); 
    // Handle form submission for Tournament tab
    console.log("Tournament ID:", tournamentID);
    console.log("Tournament Name:", tournamentName);
    console.log("Start Date:", tournamentStartDate);
    console.log("End Date:", tournamentEndDate);
  };

  const handleStatisticSubmit = (e) => {
    e.preventDefault(); 
    // Handle form submission for Statistic tab
    console.log("Statistic ID:", statisticID);
    console.log("Player ID:", playerID);
    console.log("Most Used Weapon:", mostUsedWeapon);
    console.log("Most Played Character:", mostPlayedCharacter);
    console.log("Accuracy:", accuracy);
    console.log("K/D Ratio:", kdRatio);
    console.log("Win Rate:", winRate);
  };

  return (
    <div>
      <ul className="nav nav-tabs mx-5">
        <li className="nav-item">
          <div
            className={`nav-link ${activeTab === "tab1" ? "active" : ""}`}
            onClick={() => handleTabChange("tab1")}
          >
            Outcome
          </div>
        </li>
        <li className="nav-item">
          <div
            className={`nav-link ${activeTab === "tab2" ? "active" : ""}`}
            onClick={() => handleTabChange("tab2")}
          >
            Tournament
          </div>
        </li>
        <li className="nav-item">
          <div
            className={`nav-link ${activeTab === "tab3" ? "active" : ""}`}
            onClick={() => handleTabChange("tab3")}
          >
            Statistic
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
            <label className="col-form-label">Outcome ID:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={outcomeID}
              onChange={(e) => setOutcomeID(e.target.value)}
            />
            <label className="col-form-label">Sponsor ID:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={sponsorID}
              onChange={(e) => setSponsorID(e.target.value)}
            />
            <label className="col-form-label">Event Name:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
            <label className="col-form-label">Winning Team Name:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={winningTeamName}
              onChange={(e) => setWinningTeamName(e.target.value)}
            />
            <label className="col-form-label">Losing Team Name:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={losingTeamName}
              onChange={(e) => setLosingTeamName(e.target.value)}
            />
            <label className="col-form-label">Winning Team Score:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={winningTeamScore}
              onChange={(e) => setWinningTeamScore(e.target.value)}
            />
            <label className="col-form-label">Losing Team Score:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={losingTeamScore}
              onChange={(e) => setLosingTeamScore(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-outline-dark btn-sm mt-3"
              onClick={handleOutcomeSubmit}
            >
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
            <button
              type="button"
              className="btn btn-outline-dark btn-sm mt-3"
              onClick={handleTournamentSubmit}
            >
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
            <label className="col-form-label">Statistic ID:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={statisticID}
              onChange={(e) => setStatisticID(e.target.value)}
            />
            <label className="col-form-label">Player ID:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={playerID}
              onChange={(e) => setPlayerID(e.target.value)}
            />
            <label className="col-form-label">Most Used Weapon:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={mostUsedWeapon}
              onChange={(e) => setMostUsedWeapon(e.target.value)}
            />
            <label className="col-form-label">Most Played Character:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={mostPlayedCharacter}
              onChange={(e) => setMostPlayedCharacter(e.target.value)}
            />
            <label className="col-form-label">Accuracy:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={accuracy}
              onChange={(e) => setAccuracy(e.target.value)}
            />
            <label className="col-form-label">K/D Ratio:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={kdRatio}
              onChange={(e) => setKDRatio(e.target.value)}
            />
            <label className="col-form-label">Win Rate:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={winRate}
              onChange={(e) => setWinRate(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-outline-dark btn-sm mt-3"
              onClick={handleStatisticSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticianForm;
