const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// CHANGE THIS PATH if your data files are elsewhere
const DATA_PATH = 'C:/Users/sriva/OneDrive/Desktop/Data';

// Serve the latest environmental data
router.get('/latest-data', (req, res) => {
  fs.readdir(DATA_PATH, (err, files) => {
    if (err) return res.status(500).json({ error: 'Unable to read data files' });

    // Only pick files matching data_YYYY-MM-DD_HH-MM-SS.txt
    const dataFiles = files.filter(f => /^data_\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2}\.txt$/.test(f));
    if (dataFiles.length === 0) return res.json(null);

    // Find the newest file by mtime
    const latest = dataFiles
      .map(f => ({
        file: f,
        time: fs.statSync(path.join(DATA_PATH, f)).mtime.getTime(),
      }))
      .sort((a, b) => b.time - a.time)[0].file;

    const content = fs.readFileSync(path.join(DATA_PATH, latest), 'utf8').trim();
    // Expected: "TDS,Temperature,Battery,Bottle,Bag,Other" (all numbers except temperature may be decimal)
    // Example: "350,27.2,80,4,1,0"
    const [tds, temperature, battery, bottle, bag, other] = content.split(',').map(v => v.trim());
    const plastic = [bottle, bag, other].map(Number).reduce((a, b) => a + b, 0);

    // Extract timestamp from filename
    const match = latest.match(/data_(\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2})\.txt/);
    let timestamp = "";
    if (match) {
      timestamp = match[1].replace('_', ' ');
    }

    res.json({
      tds: parseInt(tds),
      temperature: parseFloat(temperature),
      battery: parseInt(battery),
      bottle: parseInt(bottle),
      bag: parseInt(bag),
      other: parseInt(other),
      plastic,
      timestamp
    });
  });
});

module.exports = router;
