import { Box, Text } from "@chakra-ui/react";

const metricLabels = {
  plastic: "Plastic",
  tds: "TDS",
  temp: "Temperature"
};

/**
 * MiniTrendMap: Placeholder for showing mini map trends per metric.
 * @param {object} props
 * @param {string} props.metric - The metric name ('plastic', 'tds', 'temp')
 * @param {Array<number>} props.data - Data for this metric (not visualized here)
 */
const MiniTrendMap = ({ metric, data }) => (
  <Box bg="white" boxShadow="md" rounded="xl" p="3" w="100%">
    <Text fontWeight="semibold" color="teal.500" mb="2" fontSize="sm">{metricLabels[metric]} Trend</Text>
    <Box w="100%" h="80px" bg="gray.50" borderRadius="md" display="flex" alignItems="center" justifyContent="center">
      <Text color="gray.300">[MiniMap: {metric}]</Text>
    </Box>
  </Box>
);

export default MiniTrendMap;
