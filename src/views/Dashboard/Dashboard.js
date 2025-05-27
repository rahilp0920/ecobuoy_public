import React from 'react';
import { Box, SimpleGrid, Grid, GridItem } from "@chakra-ui/react";
import { FaTint, FaThermometerHalf, FaBatteryHalf } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

import MetricCard from "../../components/MetricCard";
import MiniTrendMap from "../../components/MiniTrendMap";
import CameraSnapshot from "../../components/CameraSnapshot";
import MainMap from "../../components/MainMap";
import MonthlyTrendsMap from "../../components/MonthlyTrendsMap";
import PlasticDetectionSummary from "../../components/PlasticDetectionSummary";
import TrendGraphs from "../../components/TrendGraphs";
import Footer from "../../components/Footer";
import useLatestCamera from "../../hooks/useLatestCamera";
import useLatestData from "../../hooks/useLatestData";

import {
  buoyLocation,
  plasticMarkers,
  metricTrends,
  plasticSummary,
  monthlyTrends
} from "../../data/mockData";

const Dashboard = () => {
  const { image, timestamp: cameraTimestamp } = useLatestCamera();
  const {
    tds,
    temperature,
    battery,
    bottle,
    bag,
    other,
    plastic,
    timestamp: dataTimestamp
  } = useLatestData();

  return (
    <Box px={{ base: 2, md: 8 }} pt={20} bg="gray.100" minH="100vh">
      <CameraSnapshot image={image} timestamp={cameraTimestamp || dataTimestamp} />

      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} mb={6}>
        <MetricCard
          icon={FaTint}
          label="TDS"
          value={tds !== null ? tds : "-"}
          unit="ppm"
          trendData={[]} // You can add trend logic if you want
          accentColor="blue.400"
        />
        <MetricCard
          icon={FaThermometerHalf}
          label="Temperature"
          value={temperature !== null ? temperature : "-"}
          unit="°C"
          trendData={[]}
          accentColor="orange.400"
        />
        <MetricCard
          icon={FaBatteryHalf}
          label="Battery"
          value={battery !== null ? battery : "-"}
          unit="%"
          trendData={[]}
          accentColor="green.400"
        />
        <MetricCard
          icon={MdDeleteSweep}
          label="Plastic"
          value={plastic !== null ? plastic : "-"}
          unit="detections"
          trendData={[]}
          accentColor="teal.400"
        />
      </SimpleGrid>

      <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={6}>
        <GridItem>
          {/* CameraSnapshot already rendered above */}
          <MainMap location={buoyLocation} plasticMarkers={plasticMarkers} />
          <MonthlyTrendsMap data={monthlyTrends} />
        </GridItem>
        <GridItem>
          <SimpleGrid columns={1} spacing={4} mb={6}>
            <MiniTrendMap metric="plastic" data={monthlyTrends.plastic} />
            <MiniTrendMap metric="tds" data={monthlyTrends.tds} />
            <MiniTrendMap metric="temp" data={monthlyTrends.temp} />
          </SimpleGrid>
          <PlasticDetectionSummary data={{
            bottle: bottle !== null ? bottle : 0,
            bag: bag !== null ? bag : 0,
            other: other !== null ? other : 0
          }} />
        </GridItem>
      </Grid>

      <TrendGraphs data={metricTrends} />

      <Footer />
    </Box>
  );
};

export default Dashboard;
