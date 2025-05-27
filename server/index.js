const express = require('express');
const cors = require('cors');
const cameraRouter = require('./camera');

const app = express();
const PORT = 5000;

app.use(cors());
app.use('/api', cameraRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
