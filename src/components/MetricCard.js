import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import MiniTrendline from "./MiniTrendline";

/**
 * MetricCard: displays a key metric with icon, value, unit, and mini trendline.
 * @param {object} props
 * @param {React.ElementType} props.icon - Icon component (e.g., from react-icons)
 * @param {string} props.label - Label for the metric (e.g., "TDS")
 * @param {number|string} props.value - Metric value
 * @param {string} props.unit - Unit for the value (e.g., "ppm")
 * @param {Array<number>} props.trendData - Array of numbers for the trendline
 * @param {string} props.accentColor - Chakra color for highlights
 */
const MetricCard = ({ icon, label, value, unit, trendData, accentColor }) => (
  <Box bg="white" boxShadow="lg" rounded="xl" p="6" w="100%" maxW="sm">
    <Flex align="center" mb="4">
      <Icon as={icon} w={8} h={8} color={accentColor} />
      <Text ml="4" fontSize="lg" color="gray.600">{label}</Text>
    </Flex>
    <Flex align="baseline" mb="2">
      <Text fontSize="3xl" fontWeight="bold" color={accentColor}>{value}</Text>
      <Text fontSize="lg" color="gray.400" ml="2">{unit}</Text>
    </Flex>
    <MiniTrendline data={trendData} color={accentColor} />
  </Box>
);

export default MetricCard;
