const express = require('express');
const mssql = require('mssql');
require('dotenv').config({ path: '../.env' });
const app = express();
// Middleware to parse JSON requests
app.use(express.json());

// Database configuration
const dbConfig = {
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  server: process.env.SERVER_ADDRESS,
  database: process.env.DATABASE_NAME,
  options: {
    encrypt: true, 
  },
};

// Test route to check database connection
app.get('/test-database-connection', async (req, res) => {
  try {
    // Connect to the database using dbConfig
    const pool = await mssql.connect(dbConfig);

    // Query the database example to test
    const result = await pool.request().query('SELECT top 10 * FROM dbo.Player');

    // Log the result to the console
    console.log(result);

    // Respond with a success message
    res.status(200).send('Connected to the database successfully');
  } catch (error) {
    // Log any errors
    console.error('Error connecting to the database:', error);

    // Respond with a server error
    res.status(500).send('Internal Server Error');
  }
});
// Endpoint for handling search requests
app.get('/search', async (req, res) => {
  const searchQuery = req.query.query;

  try {
    // Connect to the database 
    const pool = await mssql.connect(dbConfig);

    // Execute a query
    const result = await pool
      .request()
      .query(`SELECT top 10 * FROM dbo.Player`);

    // Send the search results as JSON
    res.json(result.recordset);
  } catch (error) {
    // Log any errors
    console.error('Error searching in the database:', error);
    res.status(500).send('Internal Server Error');
  }
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("db name: " + process.env.DATABASE_NAME);
  console.log(`Server is running on port ${PORT}`);
});
