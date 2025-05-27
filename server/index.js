const express = require('express');
const cors = require('cors');

const cameraRouter = require('./camera');
const dataRouter = require('./data');

const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors());

// Mount both routers at /api
app.use('/api', cameraRouter);
app.use('/api', dataRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
