import React from "react";
import { Box, Flex, Text, HStack, VStack, useColorModeValue } from "@chakra-ui/react";
import { mockData } from "../data/mockData";

export const RecentActivities = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Box
      bg={bgColor}
      p={4}
      borderRadius="lg"
      boxShadow="lg"
      width="100%"
      height="300px"
      overflow="auto"
    >
      <VStack align="start" spacing={3}>
        <Box>
          <Text fontSize="md" fontWeight="semibold" color={textColor}>
            Recent activity
          </Text>
          <Text fontSize="xs" color="gray.400">
            Stay up to date with what's happening across the project.
          </Text>
        </Box>

        <VStack align="start" spacing={3} width="100%">
          <Box width="100%">
            <Text fontSize="xs" fontWeight="medium" color="gray.400" mb={2}>
              Today
            </Text>
            {mockData.recentActivity
              .filter(activity => activity.isToday)
              .map((activity, index) => (
                <Box key={index} mb={2}>
                  <Flex gap={2}>
                    <Box
                      bg="blue.500"
                      color="white"
                      borderRadius="full"
                      w="6"
                      h="6"
                      fontSize="xs"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                    >
                      {activity.userInitials}
                    </Box>
                    <Box flex={1}>
                      <Text fontSize="xs" color="gray.400" display="inline">
                        <Text as="span" color={textColor}>
                          {activity.user}
                        </Text>
                        {" changed the status to Development on "}
                        <HStack 
                          as="span" 
                          display="inline-flex" 
                          alignItems="center"
                          spacing={1}
                        >
                          <Box
                            as="span"
                            w="2"
                            h="2"
                            borderRadius="sm"
                            bg="green.500"
                          />
                          <Text as="span" color="blue.400">
                            {activity.taskId} - {activity.task}
                          </Text>
                        </HStack>
                      </Text>
                      <Text fontSize="x-small" color="gray.500" mt={0.5}>
                        {activity.timeAgo}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              ))}
          </Box>

          <Box width="100%">
            <Text fontSize="xs" fontWeight="medium" color="gray.400" mb={2}>
              Yesterday
            </Text>
            {mockData.recentActivity
              .filter(activity => !activity.isToday)
              .map((activity, index) => (
                <Box key={index} mb={2}>
                  <Flex gap={2}>
                    <Box
                      bg="pink.500"
                      color="white"
                      borderRadius="full"
                      w="6"
                      h="6"
                      fontSize="xs"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                    >
                      {activity.userInitials}
                    </Box>
                    <Box flex={1}>
                      <Text fontSize="xs" color="gray.400" display="inline">
                        <Text as="span" color={textColor}>
                          {activity.user}
                        </Text>
                        {activity.action === 'commented' ? ' commented on ' : ' changed the status to Development on '}
                        <HStack 
                          as="span" 
                          display="inline-flex" 
                          alignItems="center"
                          spacing={1}
                        >
                          <Box
                            as="span"
                            w="2"
                            h="2"
                            borderRadius="sm"
                            bg="green.500"
                          />
                          <Text as="span" color="blue.400">
                            {activity.taskId} - {activity.task}
                          </Text>
                        </HStack>
                      </Text>
                      <Text fontSize="x-small" color="gray.500" mt={0.5}>
                        {activity.timeAgo}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              ))}
          </Box>
        </VStack>
      </VStack>
    </Box>
  );
};