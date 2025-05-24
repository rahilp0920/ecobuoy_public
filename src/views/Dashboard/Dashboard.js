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

import {
  buoyLocation,
  plasticMarkers,
  cameraSnapshot,
  metricTrends,
  plasticSummary,
  monthlyTrends
} from "../../data/mockData";

const Dashboard = () => (
  <Box px={{ base: 2, md: 8 }} py={6} bg="gray.100" minH="100vh">
    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} mb={6}>
      <MetricCard
        icon={FaTint}
        label="TDS"
        value={metricTrends.tds[metricTrends.tds.length - 1]}
        unit="ppm"
        trendData={metricTrends.tds}
        accentColor="blue.400"
      />
      <MetricCard
        icon={FaThermometerHalf}
        label="Temperature"
        value={metricTrends.temp[metricTrends.temp.length - 1]}
        unit="°C"
        trendData={metricTrends.temp}
        accentColor="orange.400"
      />
      <MetricCard
        icon={FaBatteryHalf}
        label="Battery"
        value={metricTrends.battery[metricTrends.battery.length - 1]}
        unit="%"
        trendData={metricTrends.battery}
        accentColor="green.400"
      />
      <MetricCard
        icon={MdDeleteSweep}
        label="Plastic"
        value={metricTrends.plastic[metricTrends.plastic.length - 1]}
        unit="detections"
        trendData={metricTrends.plastic}
        accentColor="teal.400"
      />
    </SimpleGrid>

    <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={6}>
      <GridItem>
        <CameraSnapshot image={cameraSnapshot.image} timestamp={cameraSnapshot.timestamp} />
        <MainMap location={buoyLocation} plasticMarkers={plasticMarkers} />
        <MonthlyTrendsMap data={monthlyTrends} />
      </GridItem>
      <GridItem>
        <SimpleGrid columns={1} spacing={4} mb={6}>
          <MiniTrendMap metric="plastic" data={monthlyTrends.plastic} />
          <MiniTrendMap metric="tds" data={monthlyTrends.tds} />
          <MiniTrendMap metric="temp" data={monthlyTrends.temp} />
        </SimpleGrid>
        <PlasticDetectionSummary data={plasticSummary} />
      </GridItem>
    </Grid>

    <TrendGraphs data={metricTrends} />

    <Footer />
  </Box>
);

export default Dashboard;
