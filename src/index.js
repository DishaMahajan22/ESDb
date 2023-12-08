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

//endpoint for handling insert requests
App.get("/insert", async (req, res) => {
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
