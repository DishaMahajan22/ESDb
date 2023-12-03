import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const ManagerExpertForm = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
    // Tab 1 - Team
    const [teamID, setTeamID] = useState("");
    const [teamName, setTeamName] = useState("");
    const [ownerName, setOwnerName] = useState("");
  
    // Tab 2 - Tournament
    const [tournamentID, setTournamentID] = useState("");
    const [tournamentName, setTournamentName] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
  
    // Tab 3 - Statistic
    const [statisticID, setStatisticID] = useState("");
    const [playerID, setPlayerID] = useState("");
    const [mostUsedWeapon, setMostUsedWeapon] = useState("");
    const [mostPlayedCharacter, setMostPlayedCharacter] = useState("");
    const [accuracy, setAccuracy] = useState("");
    const [kdRatio, setKDRatio] = useState("");
    const [winRate, setWinRate] = useState("");

    //Tab 1
    const handleTeamSubmit = (e) => {
        e.preventDefault(); 
        console.log("team ID:", teamID);
        console.log("team Name:", teamName);
        console.log("owner Name:", ownerName);
      };
        // Tab 2 - Tournament
  const handleTournamentSubmit = (e) => {
    e.preventDefault(); 
    console.log("Tournament ID:", tournamentID);
    console.log("Tournament Name:", tournamentName);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
  };

  // Tab 3 - Statistic
  const handleStatisticSubmit = (e) => {
    e.preventDefault(); 
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
          Team
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
          <label className="col-form-label">
            Team ID:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            value={teamID}
            onChange={(e) => setTeamID(e.target.value)}
          />
          <label className="col-form-label">
            Team Name:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
          />
          <label className="col-form-label">
            Owner Name:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
          />
          <button type="button" className="btn btn-outline-dark btn-sm mt-3" onClick={handleTeamSubmit}>
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
          <label className="col-form-label">
            Tournament ID:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            value={tournamentID}
              onChange={(e) => setTournamentID(e.target.value)}
          />
          <label className="col-form-label">
            Tournament Name:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            value={tournamentName}
              onChange={(e) => setTournamentName(e.target.value)}
          />
          <label className="col-form-label">
            Start Date:
          </label>
          <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="form-control mb-3"
              dateFormat="MM/dd/yyyy"
              placeholderText="MM/DD/YYYY"
            />
           <label className="col-form-label">
            End Date:
          </label>
          <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="form-control mb-3"
              dateFormat="MM/dd/yyyy"
              placeholderText="MM/DD/YYYY"
            />
          <button type="button" className="btn btn-outline-dark btn-sm mt-3" onClick={handleTournamentSubmit}>
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
          <label className="col-form-label">
            Statistic ID:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            value={statisticID}
              onChange={(e) => setStatisticID(e.target.value)}
          />
          <label className="col-form-label">
            Player ID:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            value={playerID}
              onChange={(e) => setPlayerID(e.target.value)}
          />
          <label className="col-form-label">
            Most Used Weapon:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            value={mostUsedWeapon}
              onChange={(e) => setMostUsedWeapon(e.target.value)}
          />
           <label className="col-form-label">
            Most Played Character:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            value={mostPlayedCharacter}
            onChange={(e) => setMostPlayedCharacter(e.target.value)}
          />
            <label className="col-form-label">
            Accuracy:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            value={accuracy}
              onChange={(e) => setAccuracy(e.target.value)}
          />
            <label className="col-form-label">
            K/D Ratio:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            value={kdRatio}
              onChange={(e) => setKDRatio(e.target.value)}
          />
            <label className="col-form-label">
            Win Rate:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            value={winRate}
            onChange={(e) => setWinRate(e.target.value)}
          />
          <button type="button" className="btn btn-outline-dark btn-sm mt-3" onClick={handleStatisticSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ManagerExpertForm;
