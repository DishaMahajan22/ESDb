import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";
import App from "./App";
import { UserProvider } from "./components/UserRole";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//endpoint for handling insert requests for inserting a new tournament [Tournament_ID, Name, Start_date, End_date]
App.get("/insertTournament", async (req, res) => {
  console.log("Request received at /insert");
  try {
    //insert a new tournament
    const result = await connection.query(
      "INSERT INTO Tournament VALUES ($1, $2, $3, $4)",
      [req.Tournament_ID, req.Name, req.Start_date, req.End_date]
    );
    const rows = result.rows; //access the 'rows' of the data

    //log the result to the console
    console.log("Tournament:", rows);

    //send the retrieved tournament as JSON in the response
    res.json(rows);
  } catch (error) {
    //log errors
    console.error("Error inserting in the database:", error);

    //send error message in the response to frontend
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

//endpoint for handling insert requests for inserting a new team [Team_ID, Name, Owner_Name]
App.get("/insertTeam", async (req, res) => {
  console.log("Request received at /insertTeam");
  try {
    //insert a new team
    const result = await connection.query(
      "INSERT INTO Team VALUES ($1, $2, $3)",
      [req.Team_ID, req.Name, req.Owner_Name]
    );
    const rows = result.rows; //access the 'rows' of the data

    //log the result to the console
    console.log("Team:", rows);

    //send the retrieved team as JSON in the response
    res.json(rows);
  } catch (error) {
    //log errors
    console.error("Error inserting in the database:", error);

    //send error message in the response to frontend
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

//endpoint for handling insert requests for inserting a new outcome [Outcome_ID, Sponsor_ID, Event_Name, Winning_Team, Losing_Team, Winning_Score, Losing_Score]
App.get("/insertOutcome", async (req, res) => {
  console.log("Request received at /insertOutcome");
  try {
    //insert a new outcome
    const result = await connection.query(
      "INSERT INTO Outcome VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [
        req.Outcome_ID,
        req.Sponsor_ID,
        req.Event_Name,
        req.Winning_Team,
        req.Losing_Team,
        req.Winning_Score,
        req.Losing_Score,
      ]
    );
    const rows = result.rows; //access the 'rows' of the data

    //log the result to the console
    console.log("Outcome:", rows);

    //send the retrieved outcome as JSON in the response
    res.json(rows);
  } catch (error) {
    //log errors
    console.error("Error inserting in the database:", error);

    //send error message in the response to frontend
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

//endpoint for handling insert requests for inserting a new statistic [Statistic_ID, Player_ID, Most_used_weapon, Most_played_character, Accuracy, K_D_Ratio, Win_Rate]
App.get("/insertStatistic", async (req, res) => {
  console.log("Request received at /insertStatistic");
  try {
    //insert a new statistic
    const result = await connection.query(
      "INSERT INTO Statistic VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [
        req.Statistic_ID,
        req.Player_ID,
        req.Most_used_weapon,
        req.Most_played_character,
        req.Accuracy,
        req.K_D_Ratio,
        req.Win_Rate,
      ]
    );
    const rows = result.rows; //access the 'rows' of the data

    //log the result to the console
    console.log("Statistic:", rows);

    //send the retrieved statistic as JSON in the response
    res.json(rows);
  } catch (error) {
    //log errors
    console.error("Error inserting in the database:", error);

    //send error message in the response to frontend
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

//Endpoint for handling insert requests for inserting a new player [Player_id, Statistic_id, Name, GamerTag, DOB, Birthplace]
App.get("/insertPlayer", async (req, res) => {
  console.log("Request received at /insertPlayer");
  try {
    //insert a new player
    const result = await connection.query(
      "INSERT INTO Player VALUES ($1, $2, $3, $4, $5, $6)",
      [
        req.Player_id,
        req.Statistic_id,
        req.Name,
        req.GamerTag,
        req.DOB,
        req.Birthplace,
      ]
    );
    const rows = result.rows; //access the 'rows' of the data

    //log the result to the console
    console.log("Player:", rows);

    //send the retrieved player as JSON in the response
    res.json(rows);
  } catch (error) {
    //log errors
    console.error("Error inserting in the database:", error);

    //send error message in the response to frontend
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

//endpoint for handling insert requests for inserting a new sponsor [Sponsor_ID, Name, Owner_Name, Location]
App.get("/insertSponsor", async (req, res) => {
  console.log("Request received at /insertSponsor");
  try {
    //insert a new sponsor
    const result = await connection.query(
      "INSERT INTO Sponsor VALUES ($1, $2, $3, $4)",
      [req.Sponsor_ID, req.Name, req.Owner_Name, req.Location]
    );
    const rows = result.rows; //access the 'rows' of the data

    //log the result to the console
    console.log("Sponsor:", rows);

    //send the retrieved sponsor as JSON in the response
    res.json(rows);
  } catch (error) {
    //log errors
    console.error("Error inserting in the database:", error);

    //send error message in the response to frontend
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

// Endpoint for handling insert requests for inserting a new Game [Game_Name, Sequel_Number, Genre, Creator, Team_size]
App.get("/insertGame", async (req, res) => {
  console.log("Request received at /insertGame");
  try {
    // Insert a new game
    const result = await connection.query(
      "INSERT INTO Game VALUES ($1, $2, $3, $4, $5)",
      [req.Game_Name, req.Sequel_Number, req.Genre, req.Creator, req.Team_size]
    );
    const rows = result.rows; // Access the 'rows' of the data

    // Log the result to the console
    console.log("Game:", rows);

    // Send the retrieved game as JSON in the response
    res.json(rows);
  } catch (error) {
    // Log errors
    console.error("Error inserting in the database:", error);

    // Send error message in the response to frontend
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

