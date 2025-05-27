const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// UPDATE this path to match your system if different!
const CAMCAPS_PATH = 'C:/Users/sriva/OneDrive/Desktop/CamCaps';

// Serve the latest camera image and its timestamp
router.get('/latest-camera', (req, res) => {
  fs.readdir(CAMCAPS_PATH, (err, files) => {
    if (err) return res.status(500).json({ error: 'Unable to read images' });
    const jpgs = files.filter(f => f.endsWith('.jpg'));
    if (jpgs.length === 0) return res.json({ image: null, timestamp: null });

    // Find newest file
    const latest = jpgs
      .map(f => ({
        file: f,
        time: fs.statSync(path.join(CAMCAPS_PATH, f)).mtime.getTime(),
      }))
      .sort((a, b) => b.time - a.time)[0].file;

    // Extract timestamp from filename
    const match = latest.match(/camcap_(\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2})\.jpg/);
    let timestamp = "";
    if (match) {
      // Format: "2025-05-27_18-01-45" -> "2025-05-27 18:01:45"
      timestamp = match[1].replace('_', ' ').replace(/-/g, ':').replace(':', ' ', 1).replace(' ', ':');
      // (you may want to tweak this for your display)
    }

    res.json({
      image: `/camcaps/${latest}`,
      timestamp: timestamp
    });
  });
});

// Serve static images
router.use('/camcaps', express.static(CAMCAPS_PATH));

module.exports = router;
