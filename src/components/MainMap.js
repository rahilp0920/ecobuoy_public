import { Box, Text } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

/**
 * MainMap: Map showing buoy location and detected plastic markers.
 * @param {object} props
 * @param {{lat: number, lng: number}} props.location - Buoy location (lat/lng)
 * @param {Array<{lat: number, lng: number, type: string, timestamp: string}>} props.plasticMarkers - Array of plastic marker data
 */
const MainMap = ({ location, plasticMarkers }) => (
  <Box bg="white" boxShadow="lg" rounded="xl" p="4" my="6" w="100%">
    <Text fontWeight="bold" color="teal.600" mb="2">Buoy Location & Plastic Detections</Text>
    <MapContainer center={[location.lat, location.lng]} zoom={15} style={{ height: "250px", width: "100%", borderRadius: "12px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[location.lat, location.lng]}>
        <Tooltip>Buoy Location</Tooltip>
      </Marker>
      {plasticMarkers.map((m, idx) => (
        <Marker key={idx} position={[m.lat, m.lng]}>
          <Tooltip>
            {m.type} <br />
            {m.timestamp}
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  </Box>
);

export default MainMap;
