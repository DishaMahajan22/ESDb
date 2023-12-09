import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const StatisticianForm = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  // Tab 1 - Outcome
  const [outcomeID, setOutcomeID] = useState("");
    //get sponsor id from other state
  const [eventName, setEventName] = useState("");
  const [winningTeamName, setWinningTeamName] = useState("");
  const [losingTeamName, setLosingTeamName] = useState("");
  const [winningTeamScore, setWinningTeamScore] = useState("");
  const [losingTeamScore, setLosingTeamScore] = useState("");
  const handleInsertOutcome = async () => {
    console.log("Inserting Outcome");
    console.log('Data to be sent:', {Outcome_ID: outcomeID, Sponsor_ID: sponsorID, Event_Name: eventName, Winning_Team_Name: winningTeamName, Losing_Team_Name: losingTeamName, Winning_Team_Score: winningTeamScore, Losing_Team_Score: losingTeamScore});
    try {
      const response = await fetch("http://localhost:5000/insertOutcome", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Outcome_ID: outcomeID, //assuming this is a variable
          Sponsor_ID: sponsorID,
          Event_Name: eventName,
          Winning_Team_Name: winningTeamName,
          Losing_Team_Name: losingTeamName,
          Winning_Team_Score: winningTeamScore,
          Losing_Team_Score: losingTeamScore,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Inserted Outcome:", data);
    } catch (error) {
      console.error("Error inserting outcome:", error);
    }
  };


  // Tab 2 - Tournament
  const [tournamentID, setTournamentID] = useState("");
  const [tournamentName, setTournamentName] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleInsertTournament = async () => {
    console.log("Inserting Tournament");
    console.log('Data to be sent:', {Tournament_ID: tournamentID,Name: tournamentName, Start_date: startDate, End_date: endDate});
    try {
      const response = await fetch("http://localhost:5000/insertTournament", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Tournament_ID: tournamentID, //assuming this is a variable
          Name: tournamentName,
          Start_date: startDate,
          End_date: endDate,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Inserted Tournament:", data);
    } catch (error) {
      console.error("Error inserting tournament:", error);
    }
  };

  // Tab 3 - Statistic
  const [statisticID, setStatisticID] = useState("");
  const [playerID, setPlayerID] = useState("");
  const [mostUsedWeapon, setMostUsedWeapon] = useState("");
  const [mostPlayedCharacter, setMostPlayedCharacter] = useState("");
  const [accuracy, setAccuracy] = useState("");
  const [kdRatio, setKDRatio] = useState("");
  const [winRate, setWinRate] = useState("");
  const handleInsertStatistic = async () => {
    console.log("Inserting Statistic");
    console.log('Data to be sent:', {Statistic_ID: statisticID, Player_ID: playerID, Most_used_weapon: mostUsedWeapon, Most_played_character: mostPlayedCharacter, Accuracy: accuracy, K_D_ratio: kdRatio, Win_rate: winRate});
    try {
      const response = await fetch("http://localhost:5000/insertStatistic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Statistic_ID: statisticID, //assuming this is a variable
          Player_ID: playerID,
          Most_used_weapon: mostUsedWeapon,
          Most_played_character: mostPlayedCharacter,
          Accuracy: accuracy,
          K_D_ratio: kdRatio,
          Win_rate: winRate,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Inserted Statistic:", data);
    } catch (error) {
      console.error("Error inserting statistic:", error);
    }
  }
  
  // Tab 4 - Sponsor
  const [sponsorID, setSponsorID] = useState("");
  const [sponsorName, setSponsorName] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const handleInsertSponsor = async () => {
    console.log("Inserting Sponsor");
    console.log('Data to be sent:', {Sponsor_ID: sponsorID, Name: sponsorName, State: state, Zip_code: zipCode, Address: address});
    try {
      const response = await fetch("http://localhost:5000/insertSponsor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Sponsor_ID: sponsorID, //assuming this is a variable
          Name: sponsorName,
          State: state,
          Zip_code: zipCode,
          Address: address,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Inserted Sponsor:", data);
    } catch (error) {
      console.error("Error inserting sponsor:", error);
    }
  }

  // Tab 5 - Sponsors Relationship
  const [contractStartDate, setContractStartDate] = useState(null);
  const [contractEndDate, setContractEndDate] = useState(null);
  const handleInsertSponsorRelationship = async () => {
    console.log("Inserting Sponsor Relationship");
    console.log('Data to be sent:', {Event_Name: eventName, Sponsor_ID: sponsorID, Contract_Start_Date: contractStartDate, Contract_End_Date: contractEndDate});
    try {
      const response = await fetch("http://localhost:5000/insertSponsorRelationship", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Event_Name: eventName, //assuming this is a variable
          Sponsor_ID: sponsorID,
          Contract_Start_Date: contractStartDate,
          Contract_End_Date: contractEndDate,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Inserted Sponsor Relationship:", data);
    } catch (error) {
      console.error("Error inserting sponsor relationship:", error);
    }
  }

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
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
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
        <li className="nav-item">
          <div
            className={`nav-link ${activeTab === "tab4" ? "active" : ""}`}
            onClick={() => handleTabChange("tab4")}
          >
            Sponsor
          </div>
        </li>
        <li className="nav-item">
          <div
            className={`nav-link ${activeTab === "tab5" ? "active" : ""}`}
            onClick={() => handleTabChange("tab5")}
          >
            Add Sponsor To Event
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
              onClick={handleInsertOutcome}
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
              selected={startDate}
              onChange={(date) => startDate(date)}
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
            <button
              type="button"
              className="btn btn-outline-dark btn-sm mt-3"
              onClick={handleInsertTournament}
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
              onClick={handleInsertStatistic}
            >
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
            <label className="col-form-label">Sponsor ID:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={sponsorID}
              onChange={(e) => setSponsorID(e.target.value)}
            />
            <label className="col-form-label">Name:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={sponsorName}
              onChange={(e) => setSponsorName(e.target.value)}
            />
            <label className="col-form-label">State:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <label className="col-form-label">Zip Code:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
            <label className="col-form-label">Address:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-outline-dark btn-sm mt-3"
              onClick={handleInsertSponsor}
            >
              Submit
            </button>
          </div>
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "tab5" ? "show active" : ""
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
              value={sponsorID}
              onChange={(e) => setSponsorID(e.target.value)}
            />
            <label className="col-form-label">Contract Start Date:</label>
            <DatePicker
              selected={contractStartDate}
              onChange={(date) => setContractStartDate(date)}
              className="form-control mb-3"
              dateFormat="MM/dd/yyyy"
              placeholderText="MM/DD/YYYY"
            />
            <label className="col-form-label">Contract End Date:</label>
            <DatePicker
              selected={contractEndDate}
              onChange={(date) => setContractEndDate(date)}
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

export default StatisticianForm;
