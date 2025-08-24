import React from "react"
import { ResponsiveBar } from "@nivo/bar"
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { mockData } from "../data/mockData"

export const PriorityBar = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <Box 
      bg={bgColor} 
      p={6} 
      borderRadius="lg" 
      boxShadow="lg"
      h="300px"
      minW="400px"
      width="100%"
    >
      <Text 
        fontSize="lg" 
        fontWeight="medium" 
        color={textColor} 
        mb={2}
      >
        Priority breakdown
      </Text>
      <Text 
        fontSize="sm" 
        color="gray.500" 
        mb={4}
      >
        Get a holistic view of how work is being prioritized.
      </Text>
      <Box h="200px">
        <ResponsiveBar
          data={mockData.priorityBreakdown}
          keys={['count']}
          indexBy="priority"
          margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={({ data }) => data.color}
          borderRadius={2}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          role="application"
          ariaLabel="Priority breakdown chart"
          theme={{
            axis: {
              ticks: {
                text: {
                  fill: useColorModeValue('#4A5568', '#A0AEC0'),
                }
              }
            },
            grid: {
              line: {
                stroke: useColorModeValue('#EDF2F7', '#2D3748'),
              }
            }
          }}
        />
      </Box>
    </Box>
  )
}