import React from "react";
import { Box, Text, HStack, Circle, useColorModeValue } from "@chakra-ui/react";
import { ResponsiveBar } from "@nivo/bar";
import { mockData } from "../data/mockData";

export const EpicProgress = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Box
      bg={bgColor}
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      minW="400px"
      width="100%"
      height="300px"
    >
      <Text fontSize="lg" fontWeight="medium" color={textColor} mb={2}>
        Epic progress
      </Text>
      <Text fontSize="sm" color="gray.500" mb={4}>
        See how your epics are progressing at a glance.
      </Text>

      <HStack spacing={4} mb={4}>
        <HStack spacing={2}>
          <Circle size={3} bg="#36B37E" />
          <Text fontSize="sm">Done</Text>
        </HStack>
        <HStack spacing={2}>
          <Circle size={3} bg="#4C9AFF" />
          <Text fontSize="sm">In progress</Text>
        </HStack>
        <HStack spacing={2}>
          <Circle size={3} bg="#6B778C" />
          <Text fontSize="sm">To do</Text>
        </HStack>
      </HStack>

      <Box h="150px">
        <ResponsiveBar
          data={mockData.epicProgressData}
          keys={["done", "inProgress", "toDo"]}
          indexBy="epic"
          layout="horizontal"
          margin={{ top: 10, right: 10, bottom: 20, left: 70 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={["#36B37E", "#4C9AFF", "#6B778C"]}
          borderRadius={0}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            format: (v) => `${v}%`,
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            renderTick: (tick) => (
              <g transform={`translate(${tick.x},${tick.y})`}>
                <text
                  x={-10}
                  y={0}
                  textAnchor="end"
                  dominantBaseline="middle"
                  style={{
                    fill: textColor,
                    fontSize: 12,
                  }}
                >
                  <tspan style={{ fill: "#9747FF" }}>⬡</tspan> {tick.value}
                </text>
              </g>
            ),
          }}
          enableGridX={false}
          enableGridY={false}
          enableLabel={false}
          role="application"
          ariaLabel="Epic progress chart"
          tooltip={({ id, value, color }) => (
            <Box
              bg="white"
              p={2}
              boxShadow="md"
              borderRadius="md"
              fontSize="sm"
            >
              <Text color="gray.800">
                {id}: {value}%
              </Text>
            </Box>
          )}
        />
      </Box>
    </Box>
  );
};
