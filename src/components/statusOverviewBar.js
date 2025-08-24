import React from "react";
import { Box, Text, Link, useColorModeValue } from "@chakra-ui/react";
import { ResponsivePie } from "@nivo/pie";
import { mockData } from "../data/mockData";

export const StatusOverviewBar = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Box
      bg={bgColor}
      borderRadius="md"
      boxShadow="lg"
      p={4}
      height="300px"
      position="relative"
    >
      <Text fontSize="lg" fontWeight="semibold" color={textColor} mb={1}>
        Status overview
      </Text>
      <Box display="flex" alignItems="center" mb={4}>
        <Text fontSize="sm" color="gray.400">
          Get a snapshot of the status of your issues.
        </Text>
        <Link href="#" color="blue.400" fontSize="sm" ml={1}>
          View all issues
        </Link>
      </Box>

      <Box height="200px" position="relative">
        <ResponsivePie
          data={mockData.statusOverview}
          margin={{ top: 10, right: 120, bottom: 10, left: 10 }}
          innerRadius={0.8}
          padAngle={0.5}
          cornerRadius={0}
          activeOuterRadiusOffset={8}
          borderWidth={0}
          colors={{ datum: 'data.color' }}
          enableArcLabels={false}
          enableArcLinkLabels={false}
          legends={[
            {
              anchor: 'right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 6,
              itemWidth: 100,
              itemHeight: 20,
              itemTextColor: '#999',
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 12,
              symbolShape: 'circle'
            }
          ]}
        />
        <Box 
          position="absolute" 
          top="0" 
          left="0" 
          right="110"
          bottom="0"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pointerEvents="none"
        >
          <Text fontSize="2xl" fontWeight="bold" color={textColor}>
            63
          </Text>
          <Text fontSize="sm" color="gray.400">
            Total issues
          </Text>
        </Box>
      </Box>
    </Box>
  );
};