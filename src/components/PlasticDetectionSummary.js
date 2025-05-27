import React from "react";
import { Box, Text, SimpleGrid, Stat, StatLabel, StatNumber } from "@chakra-ui/react";

const PlasticDetectionSummary = ({ data }) => {
  // Expecting data = { bottle: number, bag: number, other: number }
  const { bottle = 0, bag = 0, other = 0 } = data || {};
  const total = bottle + bag + other;

  return (
    <Box bg="white" boxShadow="md" p={4} rounded="lg" mb={6}>
      <Text fontWeight="bold" mb={2} color="teal.600">
        Plastic Detection Summary
      </Text>
      <SimpleGrid columns={2} spacing={4} mb={2}>
        <Stat>
          <StatLabel>Bottles</StatLabel>
          <StatNumber>{bottle}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Bags</StatLabel>
          <StatNumber>{bag}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Other</StatLabel>
          <StatNumber>{other}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Total</StatLabel>
          <StatNumber>{total}</StatNumber>
        </Stat>
      </SimpleGrid>
    </Box>
  );
};

export default PlasticDetectionSummary;
