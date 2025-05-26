import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Chart from "react-apexcharts";

const MiniTrendline = ({ data = [], color, label }) => {
  const values = data.map((item) => item.value);

  const options = {
    chart: {
      type: "line",
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: [color || "#3182CE"],
    },
    tooltip: {
      enabled: false,
    },
  };

  const series = [
    {
      data: values,
    },
  ];

  return (
    <Box>
      <Text fontSize="sm" color="gray.500" mb={2}>
        {label}
      </Text>
      <Chart
        options={options}
        series={series}
        type="line"
        height={50}
        width="100%"
      />
    </Box>
  );
};

export default MiniTrendline;
