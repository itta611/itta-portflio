"use client";

import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { IconCpu, IconRuler3 } from "@tabler/icons-react";
import { FC } from "react";

interface Props {
  temperature: number;
  cpuUsage: number;
  memoryUsage: number;
  totalMemory: number;
  hostname: string;
}

const ServerStats: FC<Props> = ({
  temperature,
  cpuUsage,
  memoryUsage,
  totalMemory,
  hostname,
}) => {
  let tempretureColor: string;

  if (temperature >= 50) {
    tempretureColor = "red.400";
  } else if (temperature >= 35) {
    tempretureColor = "yellow.400";
  } else {
    tempretureColor = "green.400";
  }

  return (
    <Box w={28} color="gray.400">
      <VStack spaceY={-1} py={2}>
        <Box fontWeight="bold" fontSize="3xl" color={tempretureColor}>
          {temperature}
        </Box>
        <Box marginTop={0}>{hostname}</Box>
      </VStack>
      <Box borderTop="1px" borderColor="gray.500" width="full" />
      <VStack p={2} spaceY={1} alignItems="start">
        <HStack alignItems="center" spaceX={2}>
          <IconCpu size={20} strokeWidth={1.5} />
          <Text fontSize="sm">{cpuUsage}%</Text>
        </HStack>
        <HStack alignItems="center" spaceX={2}>
          <IconRuler3
            size={20}
            strokeWidth={1.5}
            style={{ transform: "rotate(180deg)" }}
          />
          <Text fontSize="sm">
            {memoryUsage} / {totalMemory}GB
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ServerStats;
