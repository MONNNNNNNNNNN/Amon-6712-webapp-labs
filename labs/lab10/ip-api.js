const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 8082;
const HTTPBIN_URL = 'https://httpbin.org/ip';


app.get('/ip', async (req, res) => {
  try {
    const response = await axios.get(HTTPBIN_URL);
    
    const userIp = response.data.origin;

    console.log(`[\({new Date().toISOString()}] GET /ip - 200 OK - Fetched IP:\){userIp}`);

    return res.status(200).json({
      ip: userIp,
      source: 'httpbin.org'
    });
  } catch (error) {
    const errorMessage = error.response
      ? `HTTP \({error.response.status}:\){error.response.statusText}`
      : error.message || 'Unable to contact external server';

    console.error(`[\({new Date().toISOString()}] GET /ip - 500 Error:\){errorMessage}`);

    return res.status(500).json({
      error: 'Failed to fetch IP address',
      message: errorMessage
    });
  }
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Access endpoint at http://localhost:${PORT}/ip`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Error: Port ${PORT} is already in use. Please terminate existing processes or choose another port.`);
  } else {
    console.error(`Server error: ${err.message}`);
  }
  process.exit(1);
});