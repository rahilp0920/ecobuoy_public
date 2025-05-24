// Mock data for EcoBuoy dashboard demo

import camImg from "../assets/camera-sample.jpg";

// Buoy's latest location
export const buoyLocation = {
  lat: 19.0798,
  lng: 72.8777
};

// Markers for plastic detections (lat/lng, type, timestamp)
export const plasticMarkers = [
  { lat: 19.0801, lng: 72.8775, type: "Bottle", timestamp: "2025-05-24 14:22" },
  { lat: 19.0803, lng: 72.8781, type: "Bag", timestamp: "2025-05-24 15:02" }
];

// For the camera snapshot
export const cameraSnapshot = {
  image: camImg,
  timestamp: "2025-05-24 21:45"
};

// Trend data for metric cards and graphs
export const metricTrends = {
  tds: [350, 355, 360, 340, 330, 339, 345, 352, 340, 335],
  temp: [27, 26.8, 27.1, 27.3, 27.2, 27.0, 27.4, 27.5, 27.3, 27.2],
  battery: [98, 97, 97, 96, 96, 95, 95, 94, 94, 94],
  plastic: [2, 1, 0, 3, 2, 1, 2, 3, 2, 2]
};

// Plastic detection summary (types, icon, count, percent)
export const plasticSummary = [
  { type: "Bottle", icon: "🧴", count: 14, percent: 58 },
  { type: "Bag", icon: "🛍️", count: 7, percent: 29 },
  { type: "Other", icon: "🧃", count: 3, percent: 13 }
];

// Mock monthly trends (not visualized)
export const monthlyTrends = {
  plastic: [1, 3, 2, 4, 2, 1, 3, 2, 2, 1, 2, 3],
  tds: [340, 345, 350, 355, 350, 345, 340, 335, 332, 334, 336, 338],
  temp: [27, 27.2, 27.1, 26.9, 26.8, 27, 27.1, 27.2, 27.3, 27.2, 27.4, 27.5]
};
