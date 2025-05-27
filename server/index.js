const express = require('express');
const cors = require('cors');
const cameraRouter = require('./camera');

const app = express();
const PORT = 5000;

const dataRouter = require('./data');
app.use('/api', dataRouter);

app.use(cors());
app.use('/api', cameraRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
