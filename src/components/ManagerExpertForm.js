import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const ManagerExpertForm = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  // Tab 0 - Player
  const [playerID, setPlayerID] = useState("");
  const [playerStatisticID, setPlayerStatisticID] = useState("");
  const [name, setName] = useState("");
  const [gamerTag, setGamerTag] = useState("");
  const [dob, setDob] = useState(null);
  const [birthplace, setBirthplace] = useState("");
  const handleInsertPlayer = async () => {
    console.log("Inserting Player");
    console.log('Data to be sent:', {Player_ID: playerID, Name: name, Gamer_tag: gamerTag, DOB: dob, Birthplace: birthplace});
    try {
      const response = await fetch("http://localhost:5000/insertPlayer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Player_ID: playerID, //assuming this is a variable
          Name: name,
          Gamer_tag: gamerTag,
          DOB: dob,
          Birthplace: birthplace,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Inserted Player:", data);
    } catch (error) {
      console.error("Error inserting player:", error);
    }
  }

  // Tab 1 - Team
  const [teamID, setTeamID] = useState("");
  const [teamName, setTeamName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const handleInsertTeam = async () => {
    console.log("Inserting Team");
    console.log('Data to be sent:', {Team_ID: teamID, Name: teamName, Owner_name: ownerName});
    try {
      const response = await fetch("http://localhost:5000/insertTeam", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Team_ID: teamID, //assuming this is a variable
          Name: teamName,
          Owner_name: ownerName,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Inserted Team:", data);
    } catch (error) {
      console.error("Error inserting team:", error);
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

  // Tab 3 - Event
  const [eventName, setEventName] = useState("");
  const [sponsorId, setSponsorId] = useState("");
  const [tournamentId, setTournamentId] = useState("");
  const [location, setLocation] = useState("");
  const [seats, setSeats] = useState(0);
  const [eventStartDate, setEventStartDate] = useState(null);
  const [eventEndDate, setEventEndDate] = useState(null);
  const handleInsertEvent = async () => {
    console.log("Inserting Event");
    console.log('Data to be sent:', {Event_name: eventName, Sponsor_ID: sponsorId, Tournament_ID: tournamentId, Location: location, Seats: seats, Start_date: eventStartDate, End_date: eventEndDate});
    try {
      const response = await fetch("http://localhost:5000/insertEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Event_name: eventName, //assuming this is a variable
          Sponsor_ID: sponsorId,
          Tournament_ID: tournamentId,
          Location: location,
          Seats: seats,
          Start_date: eventStartDate,
          End_date: eventEndDate,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Inserted Event:", data);
    } catch (error) {
      console.error("Error inserting event:", error);
    }
  }

  // Tab 4 - Statistic
  const [statisticID, setStatisticID] = useState("");
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

  // Tab 5 - Game
  const [gameName, setGameName] = useState("");
  const [sequelNumber, setSequelNumber] = useState("");
  const [genre, setGenre] = useState("");
  const [creator, setCreator] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const handleInsertGame = async () => {
    console.log("Inserting Game");
    console.log('Data to be sent:', {Game_name: gameName, Sequel_number: sequelNumber, Genre: genre, Creator: creator, Team_size: teamSize});
    try {
      const response = await fetch("http://localhost:5000/insertGame", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Game_name: gameName, //assuming this is a variable
          Sequel_number: sequelNumber,
          Genre: genre,
          Creator: creator,
          Team_size: teamSize,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Inserted Game:", data);
    } catch (error) {
      console.error("Error inserting game:", error);
    }
  }

  // Tab 6 - Player to Team
const [PlayerToTeamPlayerID, setPlayerToTeamPlayerID] = useState("");
const [PlayerToTeamTeamID, setPlayerToTeamTeamID] = useState("");
const [PlayerToTeamSeats, setPlayerToTeamSeats] = useState("");
const handleInsertPlayerToTeam = async () => {
  console.log("Inserting Player To Team");
  console.log('Data to be sent:', {Player_ID: PlayerToTeamPlayerID, Team_ID: PlayerToTeamTeamID, Seats: PlayerToTeamSeats});
  try {
    const response = await fetch("http://localhost:5000/insertPlayerToTeam", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Player_ID: PlayerToTeamPlayerID, //assuming this is a variable
        Team_ID: PlayerToTeamTeamID,
        Seats: PlayerToTeamSeats,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Inserted Player To Team:", data);
  } catch (error) {
    console.error("Error inserting player to team:", error);
  }
}
  

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

  // Tab 4 - Game
  const handleGameSubmit = (e) => {
    e.preventDefault();
    console.log("Game Name:", gameName);
    console.log("Sequel Number:", sequelNumber);
    console.log("Genre:", genre);
    console.log("Creator:", creator);
    console.log("Team Size:", teamSize);
  };

  // Tab 5 - Player
  const handlePlayerSubmit = (e) => {
    e.preventDefault();
    console.log("Player ID:", playerID);
    console.log("Name:", name);
    console.log("Gamer Tag:", gamerTag);
    console.log("DOB:", dob);
    console.log("Birthplace:", birthplace);
  };

  // Tab 6 - Event
  const handleEventSubmit = (e) => {
    e.preventDefault();
    console.log("Event Name:", eventName);
    console.log("Sponsor ID:", sponsorId);
    console.log("Tournament ID:", tournamentId);
    console.log("Location:", location);
    console.log("Seats:", seats);
    console.log("Start Date:", eventStartDate);
    console.log("End Date:", eventEndDate);
  };

  // Tab 7 - Player to Team
  const handlePlayerToTeamSubmit = (e) => {
    e.preventDefault();
    console.log("Player ID:", playerID);
    console.log("Team ID:", teamID);
    console.log("Number of Players:", seats);
  };
  return (
    <div>
      <ul className="nav nav-tabs mx-5">
        <li className="nav-item">
          <div
            className={`nav-link ${activeTab === "tab0" ? "active" : ""}`}
            onClick={() => handleTabChange("tab0")}
          >
            Player
          </div>
        </li>
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
            Event
          </div>
        </li>
        <li className="nav-item">
          <div
            className={`nav-link ${activeTab === "tab4" ? "active" : ""}`}
            onClick={() => handleTabChange("tab4")}
          >
            Statistic
          </div>
        </li>
        <li className="nav-item">
          <div
            className={`nav-link ${activeTab === "tab5" ? "active" : ""}`}
            onClick={() => handleTabChange("tab5")}
          >
            Game
          </div>
        </li>
        <li className="nav-item">
          <div
            className={`nav-link ${activeTab === "tab6" ? "active" : ""}`}
            onClick={() => handleTabChange("tab6")}
          >
            Add Player To Team
          </div>
        </li>
      </ul>

      <div className="tab-content">
        <div
          className={`tab-pane fade ${
            activeTab === "tab0" ? "show active" : ""
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
              onChange={(e) => setPlayerStatisticID(e.target.value)}
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
            <button
              type="button"
              className="btn btn-outline-dark btn-sm mt-3"
              onClick={handleInsertPlayer}
            >
              Submit
            </button>
          </div>
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "tab1" ? "show active" : ""
          }`}
        >
          <div className="d-flex flex-column mx-5 my-5">
            <label className="col-form-label">Team ID:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={teamID}
              onChange={(e) => setTeamID(e.target.value)}
            />
            <label className="col-form-label">Team Name:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
            <label className="col-form-label">Owner Name:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-outline-dark btn-sm mt-3"
              onClick={handleInsertTeam}
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
            <label className="col-form-label">
            Start Date:
          </label>
          <DatePicker
              selected={eventStartDate}
              onChange={(date) => setEventStartDate(date)}
              className="form-control mb-3"
              dateFormat="MM/dd/yyyy"
              placeholderText="MM/DD/YYYY"
            />
           <label className="col-form-label">
            End Date:
          </label>
          <DatePicker
              selected={eventEndDate}
              onChange={(date) => setEventEndDate(date)}
              className="form-control mb-3"
              dateFormat="MM/dd/yyyy"
              placeholderText="MM/DD/YYYY"
            />
            <button
              type="button"
              className="btn btn-outline-dark btn-sm mt-3"
              onClick={handleInsertEvent}
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
            activeTab === "tab5" ? "show active" : ""
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
            <button
              type="button"
              className="btn btn-outline-dark btn-sm mt-3"
              onClick={handleInsertGame}
            >
              Submit
            </button>
          </div>
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "tab6" ? "show active" : ""
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
            <label className="col-form-label">Team ID:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={teamID}
              onChange={(e) => setTeamID(e.target.value)}
            />
            <label className="col-form-label">Number of Players:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
            />
              <button
              type="button"
              className="btn btn-outline-dark btn-sm mt-3"
              onClick={handleInsertPlayerToTeam}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerExpertForm;
