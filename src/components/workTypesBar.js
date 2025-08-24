import React from 'react';
import { Box, Text, HStack, Icon, useColorModeValue } from '@chakra-ui/react';
import { mockData } from '../data/mockData';

export const WorkTypesBar = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.200');
  const barBgColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box 
      bg={bgColor} 
      p={6} 
      borderRadius="lg" 
      boxShadow="lg"
      maxH="300px"
    >
      <Text 
        fontSize="lg" 
        fontWeight="medium" 
        color={textColor} 
        mb={1}
      >
        Types of work
      </Text>
      <Text 
        fontSize="sm" 
        color="gray.500" 
        mb={3}
      >
        Get a breakdown of issues by their types.
      </Text>

      <Box>
        {mockData.typesOfWork.map((item) => (
          <Box key={item.type} mb={2}>
            <HStack spacing={2} mb={1.5}>
              <Icon 
                as={item.icon} 
                color={item.color} 
                boxSize={4}
              />
              <Text fontSize="xs" color={textColor}>
                {item.type}
              </Text>
              <Text 
                fontSize="xs" 
                color="gray.500" 
                ml="auto"
              >
                {item.percentage}%
              </Text>
            </HStack>
            <Box
              w="full"
              h="8px"
              bg={barBgColor}
              borderRadius="full"
              overflow="hidden"
            >
              <Box
                h="full"
                w={`${item.percentage}%`}
                bg={item.color}
                transition="width 0.3s ease-in-out"
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};