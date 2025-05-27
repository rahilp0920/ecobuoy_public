import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

/**
 * CameraSnapshot: Displays a live camera image and timestamp.
 * @param {object} props
 * @param {string} props.image - Image URL or import
 * @param {string} props.timestamp - Timestamp string
 */
const CameraSnapshot = ({ image, timestamp }) => (
  <Box bg="white" boxShadow="lg" rounded="xl" p="4" mb="6" textAlign="center">
    <Text fontWeight="bold" mb="2" color="teal.600">Live Camera</Text>
    <Image
      src={image}
      alt="Camera Snapshot"
      maxH="220px"
      maxW="100%"
      objectFit="contain"
      mx="auto"
      borderRadius="md"
      fallbackSrc="https://via.placeholder.com/220x150?text=No+Image"
    />
    <Text color="gray.400" fontSize="sm" mt="2">
      {timestamp}
    </Text>
  </Box>
);

export default CameraSnapshot
