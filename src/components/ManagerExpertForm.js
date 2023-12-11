import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const ManagerExpertForm = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [insertedData, setInsertedData] = useState(false);
  useEffect(() => {
    console.log("INSERTED!!!!");
  }, [insertedData]);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  // Tab 0 - Player
  const [playerID, setPlayerID] = useState("");
  const [playerStatisticID, setPlayerStatisticID] = useState(0);
  const [name, setName] = useState("");
  const [gamerTag, setGamerTag] = useState("");
  const [dob, setDob] = useState(null);
  const [birthplace, setBirthplace] = useState("");
  const [numberOfPlayers, setNumberOfPlayers] = useState("");
  const handleInsertPlayer = async () => {
    console.log("Inserting Player");
    console.log('Data to be sent:', {
      Player_ID: playerID,
      Statistic_ID: playerStatisticID,
      Name: name,
      GamerTag: gamerTag,
      DOB: dob,
      Birthplace: birthplace,
      Number_Of_Players: numberOfPlayers
    });
    try {
      const response = await fetch("https://esdb-backend.onrender.com/insertPlayer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Player_ID: playerID,
          Statistic_ID: playerStatisticID,
          Name: name,
          GamerTag: gamerTag,
          DOB: dob,
          Birthplace: birthplace,
          Number_Of_Players: numberOfPlayers
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Inserted Player:", data);
      setInsertedData(true);
      setTimeout(() => {
        setInsertedData(false);
      }, 3000);
    } catch (error) {
      console.error("Error inserting player:", error);
    }
  };

  // Tab 1 - Team
  const [teamID, setTeamID] = useState("");
  const [teamName, setTeamName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [teamGameName, setTeamGameName] = useState("");
  const [matchDate, setMatchDate] = useState(null);
  const handleInsertTeam = async () => {
    console.log("Inserting Team");
    console.log("Data to be sent:", {
      Team_ID: teamID,
      Name: teamName,
      Owner_Name: ownerName,
      Game_name: teamGameName,
      Match_date: matchDate,
    });
    try {
      const response = await fetch("https://esdb-backend.onrender.com/insertTeam", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Team_ID: teamID, //assuming this is a variable
          Name: teamName,
          Owner_Name: ownerName,
          Game_name: teamGameName,
          Match_date: matchDate,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Inserted Team:", data);
      setInsertedData(true);
      setTimeout(() => {
        setInsertedData(false);
      }, 3000);
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
    console.log("Data to be sent:", {
      Tournament_ID: tournamentID,
      Name: tournamentName,
      Start_date: startDate,
      End_date: endDate,
    });
    try {
      const response = await fetch("https://esdb-backend.onrender.com/insertTournament", {
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

  // Tab 3 - Event
  const [eventName, setEventName] = useState("");
  const [sponsorID, setSponsorID] = useState("");
  const [eventTournamentID, setEventTournamentID] = useState("");
  const [location, setLocation] = useState("");
  const [seats, setSeats] = useState("");
  const [eventGameName, setEventGameName] = useState("");
  const [eventStartDate, setEventStartDate] = useState(null);
  const [eventEndDate, setEventEndDate] = useState(null);
  const [eventContractStartDate, setEventContractStartDate] = useState(null);
  const [eventCntractEndDate, setEventContractEndDate] = useState(null);
  const [sectionNum, setSectionNum] = useState("");
  const handleInsertEvent = async () => {
    console.log("Inserting Event");
    console.log('Data to be sent:', {
      Event_name: eventName,
      Sponsor_ID: sponsorID,
      Tournament_ID: eventTournamentID,
      Game_name: eventGameName,
      Location: location,
      Seats: seats,
      Start_date: eventStartDate,
      End_date: eventEndDate,
      Contract_start_date: eventContractStartDate,
      Contract_end_date: eventCntractEndDate,
      Section_Num: sectionNum
    });
    try {
      const response = await fetch("https://esdb-backend.onrender.com/insertEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Event_name: eventName,
          Sponsor_ID: sponsorID,
          Tournament_ID: eventTournamentID,
          Game_name: eventGameName,
          Location: location,
          Seats: seats,
          Start_date: eventStartDate,
          End_date: eventEndDate,
          Contract_start_date: eventContractStartDate,
          Contract_end_date: eventCntractEndDate,
          Section_Num: sectionNum
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Inserted Event:", data);
      setInsertedData(true);
      setTimeout(() => {
        setInsertedData(false);
      }, 3000);
    } catch (error) {
      console.error("Error inserting event:", error);
    }
  };

  // Tab 4 - Statistic
  const [statisticID, setStatisticID] = useState(0);
  const [statisticPlayerID, setStatisticPlayerID] = useState(0);
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
      Player_ID: statisticPlayerID,
      Most_used_weapon: mostUsedWeapon,
      Most_played_character: mostPlayedCharacter,
      Accuracy: accuracy,
      K_D_ratio: kdRatio,
      Win_rate: winRate,
      Stat_Date: statDate
    });
    try {
      const response = await fetch("https://esdb-backend.onrender.com/insertStatistic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Statistic_ID: statisticID,
          Player_ID: statisticPlayerID,
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

  // Tab 5 - Game
  const [gameName, setGameName] = useState("");
  const [sequelNumber, setSequelNumber] = useState("");
  const [genre, setGenre] = useState("");
  const [creator, setCreator] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const handleInsertGame = async () => {
    console.log("Inserting Game");
    console.log("Data to be sent:", {
      Game_Name: gameName,
      Sequel_Number: sequelNumber,
      Genre: genre,
      Creator: creator,
      Team_size: teamSize,
    });
    try {
      const response = await fetch("https://esdb-backend.onrender.com/insertGame", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Game_Name: gameName, //assuming this is a variable
          Sequel_Number: sequelNumber,
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
      setInsertedData(true);
      setTimeout(() => {
        setInsertedData(false);
      }, 3000);
    } catch (error) {
      console.error("Error inserting game:", error);
    }
  };

  return (
    <>
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
              Insert Statistic For Player
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
          {insertedData && (
            <div class="alert alert-success" role="alert">
              Successfully Inserted!
            </div>
          )}
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
                type="number"
                className="form-control mb-3"
                value={playerID}
                onChange={(e) => setPlayerID(e.target.value)}
              />
              <label className="col-form-label">Statistic ID (For No Statistic Give Value 0):</label>
              <input
                type="number"
                className="form-control mb-3"
                value={playerStatisticID}
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
              <label className="col-form-label">DOB:</label>
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
              <label className="col-form-label">Number of Players:</label>
              <input
                type="number"
                className="form-control mb-3"
                value={numberOfPlayers}
                onChange={(e) => setNumberOfPlayers(e.target.value)}
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
              <label className="col-form-label">Name:</label>
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
              <label className="col-form-label">Game Name:</label>
              <input
                type="text"
                className="form-control mb-3"
                value={teamGameName}
                onChange={(e) => setTeamGameName(e.target.value)}
              />
              <label className="col-form-label">Match Date:</label>
              <DatePicker
                selected={matchDate}
                onChange={(date) => setMatchDate(date)}
                className="form-control mb-3"
                dateFormat="MM/dd/yyyy"
                placeholderText="MM/DD/YYYY"
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
              value={sponsorID}
              onChange={(e) => setSponsorID(e.target.value)}
            />
            <label className="col-form-label">Tournament ID:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={eventTournamentID}
              onChange={(e) => setEventTournamentID(e.target.value)}
            />
            <label className="col-form-label">Event Game Name:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={eventGameName}
              onChange={(e) => setEventGameName(e.target.value)}
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
              type="number"
              className="form-control mb-3"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
            />
            <label className="col-form-label">Start Date:</label>
            <DatePicker
              selected={eventStartDate}
              onChange={(date) => setEventStartDate(date)}
              className="form-control mb-3"
              dateFormat="MM/dd/yyyy"
              placeholderText="MM/DD/YYYY"
            />
            <label className="col-form-label">End Date:</label>
            <DatePicker
              selected={eventEndDate}
              onChange={(date) => setEventEndDate(date)}
              className="form-control mb-3"
              dateFormat="MM/dd/yyyy"
              placeholderText="MM/DD/YYYY"
            />
            <label className="col-form-label">Contract Start Date:</label>
            <DatePicker
              selected={eventContractStartDate}
              onChange={(date) => setEventContractStartDate(date)}
              className="form-control mb-3"
              dateFormat="MM/dd/yyyy"
              placeholderText="MM/DD/YYYY"
            />
            <label className="col-form-label">Contract End Date:</label>
            <DatePicker
              selected={eventCntractEndDate}
              onChange={(date) => setEventContractEndDate(date)}
              className="form-control mb-3"
              dateFormat="MM/dd/yyyy"
              placeholderText="MM/DD/YYYY"
            />
            <label className="col-form-label">Section Number:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={sectionNum}
              onChange={(e) => setSectionNum(e.target.value)}
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
                type="number"
                className="form-control mb-3"
                value={statisticID}
                onChange={(e) => setStatisticID(e.target.value)}
              />
              <label className="col-form-label">Player ID:</label>
              <input
                type="number"
                className="form-control mb-3"
                value={statisticPlayerID}
                onChange={(e) => setStatisticPlayerID(e.target.value)}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagerExpertForm;