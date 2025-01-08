"use client";

import { Box, HStack, VStack } from "@chakra-ui/react";
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
      <VStack gap={-1} py={2}>
        <Box fontWeight="bold" fontSize="3xl" color={tempretureColor}>
          {temperature}
        </Box>
        <Box marginTop={0}>{hostname}</Box>
      </VStack>
      <Box borderWidth={1} borderTopColor="gray.600" width="full" />
      <VStack p={2} alignItems="start">
        <HStack alignItems="center">
          <IconCpu size={20} strokeWidth={1.5} />
          <Box fontSize="sm" my={0}>
            {cpuUsage}%
          </Box>
        </HStack>
        <HStack alignItems="center">
          <IconRuler3
            size={20}
            strokeWidth={1.5}
            style={{ transform: "rotate(180deg)" }}
          />
          <Box fontSize="sm" my={0}>
            {memoryUsage} / {totalMemory}GB
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ServerStats;
