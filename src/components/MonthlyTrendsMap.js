import React, { useState } from "react";
import { Box, Text, ButtonGroup, Button, Flex } from "@chakra-ui/react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const metricLabels = {
  plastic: "Plastic",
  tds: "TDS",
  temp: "Temperature"
};

const chartColors = {
  plastic: "#319795",
  tds: "#4299E1",
  temp: "#ED8936"
};

/**
 * MonthlyTrendsMap: Interactive chart for monthly plastic, tds, temp trends.
 * @param {object} props
 * @param {object} props.data - { plastic: [], tds: [], temp: [] }
 */
const MonthlyTrendsMap = ({ data }) => {
  const [selected, setSelected] = useState("plastic");
  const chartData = data[selected]?.map((v, i) => ({ value: v, i })) || [];

  return (
    <Box bg="white" boxShadow="lg" rounded="xl" p="4" my="6" w="100%">
      <Flex align="center" justify="space-between" mb="2">
        <Text fontWeight="bold" color="teal.600">Monthly Trends Map</Text>
        <ButtonGroup size="sm" variant="outline">
          {["plastic", "tds", "temp"].map((k) => (
            <Button
              key={k}
              colorScheme={selected === k ? "teal" : "gray"}
              onClick={() => setSelected(k)}
              variant={selected === k ? "solid" : "outline"}
            >
              {metricLabels[k]}
            </Button>
          ))}
        </ButtonGroup>
      </Flex>
      <Box w="100%" h="180px">
        <ResponsiveContainer width="100%" height={180}>
          <AreaChart data={chartData}>
            <XAxis dataKey="i" tickFormatter={i => `M${i+1}`} />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke={chartColors[selected]}
              fill={chartColors[selected] + "55"}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default MonthlyTrendsMap;
