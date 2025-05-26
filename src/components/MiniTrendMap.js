import React from 'react';
import { Box, Text } from "@chakra-ui/react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const metricLabels = {
  plastic: "Plastic",
  tds: "TDS",
  temp: "Temperature"
};

/**
 * MiniTrendMap: Shows a mini area chart for the given metric and data.
 * @param {object} props
 * @param {string} props.metric - The metric name ('plastic', 'tds', 'temp')
 * @param {Array<number>} props.data - Data array for this metric
 */
const MiniTrendMap = ({ metric, data }) => (
  <Box bg="white" boxShadow="md" rounded="xl" p="3" w="100%">
    <Text fontWeight="semibold" color="teal.500" mb="2" fontSize="sm">
      {metricLabels[metric]} Trend
    </Text>
    <Box w="100%" h="80px">
      <ResponsiveContainer width="100%" height={80}>
        <AreaChart data={data.map((v, i) => ({ value: v, i }))}>
          <XAxis dataKey="i" hide />
          <YAxis hide />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#319795"
            fill="#B2F5EA"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  </Box>
);

export default MiniTrendMap;
