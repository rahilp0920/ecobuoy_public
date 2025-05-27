import React from 'react';
import { Box, Text } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

/**
 * MainMap: Map showing only the buoy location.
 * @param {object} props
 * @param {{lat: number, lng: number}} props.location - Buoy location (lat/lng)
 */
const MainMap = ({ location }) => (
  <Box bg="white" boxShadow="lg" rounded="xl" p="4" my="6" w="100%">
    <Text fontWeight="bold" color="teal.600" mb="2">Buoy Location</Text>
    <MapContainer center={[location.lat, location.lng]} zoom={15} style={{ height: "250px", width: "100%", borderRadius: "12px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[location.lat, location.lng]}>
        <Tooltip>Buoy Location</Tooltip>
      </Marker>
    </MapContainer>
  </Box>
);

export default MainMap;
