import { Box, Text, ButtonGroup, Button, Flex } from "@chakra-ui/react";

/**
 * MonthlyTrendsMap: Placeholder for a map-based monthly trends visualization.
 * Buttons allow toggling between metrics (currently not interactive).
 * @param {object} props
 * @param {object} props.data - Data for the monthly trends (not visualized in this placeholder)
 */
const MonthlyTrendsMap = ({ data }) => (
  <Box bg="white" boxShadow="lg" rounded="xl" p="4" my="6" w="100%">
    <Flex align="center" justify="space-between" mb="2">
      <Text fontWeight="bold" color="teal.600">Monthly Trends Map</Text>
      <ButtonGroup size="sm" variant="outline">
        <Button colorScheme="blue">Plastic</Button>
        <Button colorScheme="teal">TDS</Button>
        <Button colorScheme="green">Temp</Button>
      </ButtonGroup>
    </Flex>
    <Box w="100%" h="180px" bg="blue.100" borderRadius="md" display="flex" alignItems="center" justifyContent="center">
      <Text color="gray.400">[Heatmap Placeholder]</Text>
    </Box>
  </Box>
);

export default MonthlyTrendsMap;
