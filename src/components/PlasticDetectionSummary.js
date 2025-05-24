import { Box, Flex, Text, Progress } from "@chakra-ui/react";

/**
 * PlasticDetectionSummary: Shows summary with icons/percentages for types of plastic detected.
 * @param {object} props
 * @param {Array<{type: string, icon: string, count: number, percent: number}>} props.data
 */
const PlasticDetectionSummary = ({ data }) => (
  <Box bg="white" boxShadow="lg" rounded="xl" p="6" my="6" w="100%">
    <Text fontWeight="bold" color="teal.600" mb="4">Plastic Detection Summary</Text>
    <Flex direction="column" gap="3">
      {data.map((item, i) => (
        <Flex align="center" key={i}>
          <Text fontSize="2xl" mr="3">{item.icon}</Text>
          <Text fontWeight="semibold" minW="60px">{item.type}</Text>
          <Progress value={item.percent} colorScheme="blue" flex="1" mx="4" borderRadius="md" />
          <Text fontSize="md" ml="2">{item.count} <span style={{color:'#aaa'}}>{item.percent}%</span></Text>
        </Flex>
      ))}
    </Flex>
  </Box>
);

export default PlasticDetectionSummary;
