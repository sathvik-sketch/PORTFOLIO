const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app's build folder
app.use(express.static(path.join(__dirname, 'build')));

// Handle requests to all routes, serving the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Define the port for the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
