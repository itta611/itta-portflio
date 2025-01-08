"use client";

import { Text, HStack } from "@chakra-ui/react";
import ServerStats from "components/interfaces/ServerStats";
import ContentGroup from "components/ui/ContentGroup";
import { FC, useEffect, useState } from "react";
import type { Stats } from "types";

const ServerStatsSection: FC = () => {
  const [statsList, setStats] = useState<
    { [key: string]: Stats } | undefined
  >();
  const hosts = statsList ? Object.keys(statsList) : [];
  hosts.sort();

  useEffect(() => {
    const API_ROUTE = "/api/getStats";

    let timerId: NodeJS.Timeout;

    const fetchStats = async () => {
      const res = await fetch(API_ROUTE);
      const data = await res.json();
      setStats(data);
      timerId = setTimeout(fetchStats, 5000);
    };

    fetchStats();

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <ContentGroup title="Server Stats">
      <Text>
        おうちのラズパイクラスタサーバーの温度です。（リアルタイム更新）
      </Text>
      <HStack spaceX={5} spaceY={0}>
        {statsList &&
          hosts.map((hostname) => (
            <ServerStats
              temperature={statsList[hostname].temperature}
              cpuUsage={statsList[hostname].cpuUsage}
              memoryUsage={statsList[hostname].usedMem}
              totalMemory={statsList[hostname].totalMem}
              hostname={hostname}
              key={hostname}
            />
          ))}
      </HStack>
    </ContentGroup>
  );
};

export default ServerStatsSection;
