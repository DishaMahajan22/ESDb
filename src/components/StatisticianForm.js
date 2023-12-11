import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const StatisticianForm = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [insertedData, setInsertedData] = useState(false);

// Tab 1 - Outcome
const [outcomeID, setOutcomeID] = useState(0);
const [outcomeSponsorID, setOutcomeSponsorID] = useState(0);
const [eventName, setEventName] = useState("");
const [winningTeam, setWinningTeam] = useState("");
const [losingTeam, setLosingTeam] = useState("");
const [winningScore, setWinningScore] = useState(0);
const [losingScore, setLosingScore] = useState(0);
const [duration, setDuration] = useState("");
const [winner, setWinner] = useState("");

const handleInsertOutcome = async () => {
  console.log("Inserting Outcome");
  console.log('Data to be sent:', {
    Outcome_ID: outcomeID,
    Sponsor_ID: outcomeSponsorID,
    Event_Name: eventName,
    Winning_Team: winningTeam,
    Losing_Team: losingTeam,
    Winning_Score: winningScore,
    Losing_Score: losingScore,
    Duration: duration,
  });
  try {
    const response = await fetch("http://localhost:5000/insertOutcome", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Outcome_ID: outcomeID,
        Sponsor_ID: outcomeSponsorID,
        Event_Name: eventName,
        Winning_Team: winningTeam,
        Losing_Team: losingTeam,
        Winning_Score: winningScore,
        Losing_Score: losingScore,
        Duration: duration,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Inserted Outcome:", data);
    setInsertedData(true);
    setTimeout(() => {
      setInsertedData(false);
    }, 3000);
  } catch (error) {
    console.error("Error inserting outcome:", error);
  }
};


  // Tab 2 - Tournament
  const [tournamentID, setTournamentID] = useState(0);
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
      setInsertedData(true);
      setTimeout(() => {
        setInsertedData(false);
      }, 3000);
    } catch (error) {
      console.error("Error inserting tournament:", error);
    }
  };

  // Tab 3 - Statistic
  const [statisticID, setStatisticID] = useState(0);
  const [playerID, setPlayerID] = useState(0);
  const [mostUsedWeapon, setMostUsedWeapon] = useState("");
  const [mostPlayedCharacter, setMostPlayedCharacter] = useState("");
  const [accuracy, setAccuracy] = useState("");
  const [kdRatio, setKDRatio] = useState("");
  const [winRate, setWinRate] = useState("");
  const [statDate, setStatDate] = useState(null);
  const handleInsertStatistic = async () => {
    console.log("Inserting Statistic");
    console.log('Data to be sent:', {
      Statistic_ID: statisticID,
      Player_ID: playerID,
      Most_used_weapon: mostUsedWeapon,
      Most_played_character: mostPlayedCharacter,
      Accuracy: accuracy,
      K_D_ratio: kdRatio,
      Win_rate: winRate,
      Stat_Date: statDate
    });
    try {
      const response = await fetch("http://localhost:5000/insertStatistic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Statistic_ID: statisticID,
          Player_ID: playerID,
          Most_used_weapon: mostUsedWeapon,
          Most_played_character: mostPlayedCharacter,
          Accuracy: accuracy,
          K_D_ratio: kdRatio,
          Win_rate: winRate,
          Stat_Date: statDate
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Inserted Statistic:", data);
      setInsertedData(true);
      setTimeout(() => {
        setInsertedData(false);
      }, 3000);
    } catch (error) {
      console.error("Error inserting statistic:", error);
    }
  };
  
  // Tab 4 - Sponsor
  const [sponsorID, setSponsorID] = useState("");
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const handleInsertSponsor = async () => {
    console.log("Inserting Sponsor");
    console.log('Data to be sent:', {
      Sponsor_ID: sponsorID,
      Name: name,
      State: state,
      Zipcode: zipcode,
      Address: address
    });
    try {
      const response = await fetch("http://localhost:5000/insertSponsor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Sponsor_ID: sponsorID,
          Name: name,
          State: state,
          Zipcode: zipcode,
          Address: address
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Inserted Sponsor:", data);
      setInsertedData(true);
      setTimeout(() => {
        setInsertedData(false);
      }, 3000);
    } catch (error) {
      console.error("Error inserting sponsor:", error);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  /*const handleOutcomeSubmit = (e) => {
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
  };*/

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
        {insertedData && (
            <div class="alert alert-success" role="alert">
              Successfully Inserted!
            </div>
          )}
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
        type="number"
        className="form-control mb-3"
        value={outcomeID}
        onChange={(e) => setOutcomeID(e.target.value)}
      />
      <label className="col-form-label">Sponsor ID:</label>
      <input
        type="number"
        className="form-control mb-3"
        value={outcomeSponsorID}
        onChange={(e) => setOutcomeSponsorID(e.target.value)}
      />
      <label className="col-form-label">Event Name:</label>
      <input
        type="text"
        className="form-control mb-3"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <label className="col-form-label">Winning Team:</label>
      <input
        type="text"
        className="form-control mb-3"
        value={winningTeam}
        onChange={(e) => setWinningTeam(e.target.value)}
      />
      <label className="col-form-label">Losing Team:</label>
      <input
        type="text"
        className="form-control mb-3"
        value={losingTeam}
        onChange={(e) => setLosingTeam(e.target.value)}
      />
      <label className="col-form-label">Winning Score:</label>
      <input
        type="number"
        className="form-control mb-3"
        value={winningScore}
        onChange={(e) => setWinningScore(e.target.value)}
      />
      <label className="col-form-label">Losing Score:</label>
      <input
        type="number"
        className="form-control mb-3"
        value={losingScore}
        onChange={(e) => setLosingScore(e.target.value)}
      />
      <label className="col-form-label">Duration:</label>
      <input
        type="text"
        className="form-control mb-3"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
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
                type="number"
                className="form-control mb-3"
                value={statisticID}
                onChange={(e) => setStatisticID(e.target.value)}
              />
              <label className="col-form-label">Player ID:</label>
              <input
                type="number"
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
                type="number"
                className="form-control mb-3"
                value={accuracy}
                onChange={(e) => setAccuracy(e.target.value)}
              />
              <label className="col-form-label">K/D Ratio:</label>
              <input
                type="number"
                className="form-control mb-3"
                value={kdRatio}
                onChange={(e) => setKDRatio(e.target.value)}
              />
              <label className="col-form-label">Win Rate:</label>
              <input
                type="number"
                className="form-control mb-3"
                value={winRate}
                onChange={(e) => setWinRate(e.target.value)}
              />
              <label className="col-form-label">Stat Date:</label>
              <DatePicker
                selected={statDate}
                onChange={(date) => setStatDate(date)}
                className="form-control mb-3"
                dateFormat="MM/dd/yyyy"
                placeholderText="MM/DD/YYYY"
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
            type="number"
            className="form-control mb-3"
            value={sponsorID}
            onChange={(e) => setSponsorID(e.target.value)}
          />
          <label className="col-form-label">Name:</label>
          <input
            type="text"
            className="form-control mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="col-form-label">State:</label>
          <input
            type="text"
            className="form-control mb-3"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <label className="col-form-label">Zipcode:</label>
          <input
            type="text"
            className="form-control mb-3"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
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
        </div>
      </div>
    </div>
  );
};

export default StatisticianForm;
