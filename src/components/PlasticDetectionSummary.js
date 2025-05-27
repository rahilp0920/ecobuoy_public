import React from "react";
import { Box, Text, SimpleGrid, Stat, StatLabel, StatNumber } from "@chakra-ui/react";

const ICONS = {
  bottle: "🍼",
  bag: "🛍️",
  other: "🔎"
};

/**
 * PlasticDetectionSummary
 * @param {object} props
 * @param {object} props.data - { bottle: number, bag: number, other: number }
 */
const PlasticDetectionSummary = ({ data }) => {
  const { bottle = 0, bag = 0, other = 0 } = data || {};

  return (
    <Box bg="white" boxShadow="md" p={4} rounded="lg" mb={6}>
      <Text fontWeight="bold" mb={2} color="teal.600">
        Plastic Detection Summary
      </Text>
      <SimpleGrid columns={3} spacing={4} mb={2}>
        <Stat>
          <StatLabel>Bottles {ICONS.bottle}</StatLabel>
          <StatNumber>{bottle}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Bags {ICONS.bag}</StatLabel>
          <StatNumber>{bag}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Other {ICONS.other}</StatLabel>
          <StatNumber>{other}</StatNumber>
        </Stat>
      </SimpleGrid>
    </Box>
  );
};

export default PlasticDetectionSummary;
