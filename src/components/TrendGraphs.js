import React from 'react';
import { Box, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Center } from "@chakra-ui/react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const labels = {
  tds: "TDS (ppm)",
  temp: "Temperature (°C)",
  battery: "Battery (%)",
  plastic: "Plastic Detections"
};

/**
 * TrendGraphs: Tabbed area charts for TDS, Temperature, Battery, and Plastic trends.
 * @param {object} props
 * @param {object} props.data - Contains arrays for tds, temp, battery, and plastic
 */
const TrendGraphs = ({ data }) => (
  <Box bg="white" boxShadow="lg" rounded="xl" p="6" my="6" w="100%">
    <Text fontWeight="bold" color="teal.600" mb="4">Trends Over Time</Text>
    <Tabs variant="soft-rounded" colorScheme="blue">
      <TabList>
        <Tab>TDS</Tab>
        <Tab>Temperature</Tab>
        <Tab>Battery</Tab>
        <Tab>Plastic</Tab>
      </TabList>
      <TabPanels>
        {["tds", "temp", "battery", "plastic"].map((key) => {
          const values = Array.isArray(data?.[key]) ? data[key] : [];
          return (
            <TabPanel key={key}>
              {values.length > 0 ? (
                <ResponsiveContainer width="100%" height={180}>
                  <AreaChart data={values.map((v, i) => ({ v, i }))}>
                    <XAxis dataKey="i" hide />
                    <YAxis hide />
                    <Tooltip />
                    <Area type="monotone" dataKey="v" stroke="#319795" fill="#B2F5EA" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <Center h="180px"><Text color="gray.400">No data available</Text></Center>
              )}
              <Text color="gray.400" mt="2">{labels[key]}</Text>
            </TabPanel>
          );
        })}
      </TabPanels>
    </Tabs>
  </Box>
);

export default TrendGraphs;
