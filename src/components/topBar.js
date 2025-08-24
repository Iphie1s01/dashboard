import React from "react";
import { Box, Text, Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import { CheckCircleIcon, EditIcon, AddIcon, CalendarIcon } from "@chakra-ui/icons";
import { mockData } from "../data/mockData"

export const TopBar = () => {
  const { completed, updated, created, due } = mockData.summary;
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.200");

  const stats = [
    {
      label: "completed",
      value: completed,
      timeframe: "in the last 7 days",
      icon: CheckCircleIcon,
      color: "green.400",
    },
    {
      label: "updated",
      value: updated,
      timeframe: "in the last 7 days",
      icon: EditIcon,
      color: "blue.400",
    },
    {
      label: "created",
      value: created,
      timeframe: "in the last 7 days",
      icon: AddIcon,
      color: "gray.400",
    },
    {
      label: "due",
      value: due,
      timeframe: "in the next 7 days",
      icon: CalendarIcon,
      color: "gray.400",
    },
  ];

  return (
    <Box>
      <Box mb={4}>
        <Text fontSize="sm" color="gray.400" mb={1}>
          Projects / Lets Create
        </Text>
        <Text fontSize="xl" fontWeight="semibold" color={textColor}>
          Summary
        </Text>
      </Box>
      <HStack spacing={4} align="stretch">
        {stats.map((stat) => (
          <Box
            display="flex"
            key={stat.label}
            bg={bgColor}
            borderRadius="md"
            boxShadow="lg"
            p={2}
            pl={4}
            gap={4}
            flex="1"
            position="relative"
          >
            <Flex mb={1} align="center">
              <stat.icon color={stat.color} mt={1} w="auto" h="20px" />
            </Flex>
            <Box>
              <Text fontSize="md" fontWeight="semibold" color={textColor}>
                {stat.value} {stat.label}
              </Text>
              <Text fontSize="sm" color="gray.400">
                {stat.timeframe}
              </Text>
            </Box>
          </Box>
        ))}
      </HStack>
    </Box>
  );
};