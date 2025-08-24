import React from "react";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { TopBar } from "./components/topBar";
import { RecentActivities } from "./components/recentActivity";
import { StatusOverviewBar } from "./components/statusOverviewBar";
import { PriorityBar } from "./components/priorityBar";
import { WorkTypesBar } from "./components/workTypesBar";
import { TeamWorkloadChart } from "./components/teamWorkloadChart";
import { EpicProgress } from "./components/epicProgress";

const App = () => {
  const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
  };

  const theme = extendTheme({ config });

  return (
    <ChakraProvider theme={theme}>
      <Box p={8}>
        <TopBar />
        <Box display="flex" my={6} justifyContent="space-between">
          <Box width="49%">
            <StatusOverviewBar />
          </Box>
          <Box width="49%">
            <RecentActivities />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box width="49%">
            <PriorityBar />
          </Box>
          <Box width="49%">
            <WorkTypesBar />
          </Box>
        </Box>
        <Box display="flex" my={6} justifyContent="space-between">
          <Box width="49%">
            <TeamWorkloadChart />
          </Box>
          <Box width="49%">
            <EpicProgress />
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default App;
