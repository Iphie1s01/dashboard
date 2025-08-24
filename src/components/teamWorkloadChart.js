import React from 'react';
import { Box, Text, HStack, Avatar, useColorModeValue } from '@chakra-ui/react';
import { mockData } from "../data/mockData"

export const TeamWorkloadChart = () => {
  const color = useColorModeValue('gray.100', 'gray.700');
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <Box 
      bg={bgColor} 
      p={6} 
      borderRadius="lg" 
      boxShadow="lg"
      h={"300px"}
      minW="400px"
      width={"100%"}
    >
      <Text 
        fontSize="md" 
        fontWeight="medium" 
        color={textColor} 
        mb={1}
      >
        Team workload
      </Text>
      <Text 
        fontSize="xs" 
        color="gray.500" 
        mb={2}
      >
        Monitor the capacity of your team.
      </Text>

      <Box>
        {mockData.teamWorkload.map((item) => (
          <Box key={item.assignee} mb={2}>
            <HStack spacing={2} mb={2}>
              <Avatar
                size="xs"
                name={item.initials}
                src={""}
                bg={item.bgColor}
                color="white"
              />
              <Text fontSize="xs" color={textColor}>
                {item.assignee}
              </Text>
              <Text 
                fontSize="xs" 
                color="gray.500" 
                ml="auto"
              >
                {item.distribution}%
              </Text>
            </HStack>
            <Box
              w="full"
              h="4px"
              bg={color}
              borderRadius="full"
              overflow="hidden"
            >
              <Box
                h="full"
                w={`${item.distribution}%`}
                bg={item.bgColor}
                transition="width 0.3s ease-in-out"
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}