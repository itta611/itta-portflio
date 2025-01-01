import {
  Box,
  Button,
  Container,
  Text,
  UnorderedList,
  VStack,
  Stack,
  HStack,
  Link as ChakraLink,
  Grid,
  SimpleGrid,
} from "@chakra-ui/react";
import ContentGroup from "components/ContentGroup";
import Head from "next/head";
import Logo from "components/Logo";
import ListItemWrap from "components/ListItemWrap";
import Link from "next/link";
import {
  IconBrandDiscordFilled,
  IconBrandGithub,
  IconBrandX,
  IconBuilding,
  IconCake,
  IconClipboard,
  IconExternalLink,
  IconHammer,
  IconHeartCode,
  IconMapPin,
} from "@tabler/icons-react";
import DinamicShadowImage from "components/DinamicShadowImage";
import { FC, useEffect, useState } from "react";
import ServerStats from "components/ServerStats";
import type { Stats } from "types";

const Home: FC = () => {
  const [statsList, setStats] = useState<
    { [key: string]: Stats } | undefined
  >();
  const hosts = statsList ? Object.keys(statsList) : [];
  hosts.sort();

  useEffect(() => {
    if (process.env.NODE_ENV === "development") return;

    let timerId: NodeJS.Timeout;

    const fetchStats = async () => {
      const res = await fetch("/api/getStats");
      const data = await res.json();
      setStats(data);
      timerId = setTimeout(fetchStats, 5000);
    };

    fetchStats();

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const handleDiscordCopy = () => {
    navigator.clipboard.writeText("itta.dev");
  };

  return (
    <Box bg="gray.800" color="white" minH="100vh">
      <Container maxW="container.md" pb={15}>
        <Head>
          <title>Itta&apos;s Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Itta's Portfolio Site" />
        </Head>
        <Box
          display="flex"
          alignItems="center"
          as="header"
          mx={11}
          py={{ sm: 9, base: 3 }}
        >
          <Logo mx="auto" cursor="pointer" />
        </Box>
        <Box as="main">
          <ContentGroup title="About" mt={{ md: 8, base: 2 }}>
            <Stack
              justifyContent="space-between"
              flexDir={{ md: "row", base: "column-reverse" }}
              gap={11}
              alignItems="center"
            >
              <Box w={{ base: "full", md: "auto" }}>
                <Text fontWeight="bold" mb={6}>
                  Itta Funahashi{" "}
                  <Text textColor="gray.400" as="span">
                    (@itta611)
                  </Text>
                </Text>
                <VStack spacing={2} textColor="teal.200" alignItems="start">
                  <HStack>
                    <IconCake size={18} />
                    <Text
                      as="span"
                      ml={2}
                      textColor="white"
                      fontSize="sm"
                      fontWeight="semibold"
                    >
                      2008/6/11 (16 さい)
                    </Text>
                  </HStack>
                  <HStack>
                    <IconMapPin size={18} />
                    <Text
                      as="span"
                      ml={2}
                      textColor="white"
                      fontSize="sm"
                      fontWeight="semibold"
                    >
                      Aichi, Japan
                    </Text>
                  </HStack>
                  <HStack>
                    <IconHeartCode size={18} />
                    <Text
                      as="span"
                      ml={2}
                      textColor="white"
                      fontSize="sm"
                      fontWeight="semibold"
                    >
                      Web Frontend, UI Design
                    </Text>
                  </HStack>
                  <HStack>
                    <IconHammer size={18} />
                    <Text
                      as="span"
                      ml={2}
                      textColor="white"
                      fontSize="sm"
                      fontWeight="semibold"
                    >
                      TypeScript / React / Next.js / Blender
                    </Text>
                  </HStack>
                  <HStack>
                    <IconBuilding size={18} />
                    <Text
                      as="span"
                      ml={2}
                      textColor="white"
                      fontSize="sm"
                      fontWeight="semibold"
                    >
                      Ichinomiya Sr. High
                    </Text>
                  </HStack>
                </VStack>
              </Box>
              <DinamicShadowImage
                src="/img/icon.png"
                width={201}
                height={200}
                alt="Icon"
              />
            </Stack>
          </ContentGroup>
          <ContentGroup title="What I am doing">
            <Text>
              広義のユーザーインターフェース(UI)をテーマにプロダクトを作っています。
            </Text>
            <Text>
              今では、UIといえば暗黙的にGUIのことを指すこととなりますが、いわゆる「広義のUI」を考えることが
              私が少し前に作った{" "}
              <ChakraLink href="https://chokokucad.itta.dev" target="_blank">
                Chokoku CAD
              </ChakraLink>{" "}
              という作品があります。既存の3Dモデリングソフトは非常に多くの機能を持っていますが、これらを単一の機能
              (=削ること) に集約することで使いやすくしたものです。
            </Text>
            <Text>
              現在は、LLMによる自然言語ベースのUIを搭載した、アプリケーションを作っています...{" "}
              <ChakraLink href="#3">↓</ChakraLink>
            </Text>
          </ContentGroup>
          <ContentGroup title="Certificates / Awards">
            <UnorderedList>
              <ListItemWrap>基本情報技術者試験 (FE)</ListItemWrap>
              <ListItemWrap>英検２級</ListItemWrap>
              <ListItemWrap>
                U-22 プログラミング・コンテスト 2020 経済産業省商務政策局長賞
              </ListItemWrap>
              <ListItemWrap>
                U-22 プログラミング・コンテスト 2021 経済産業大臣賞
              </ListItemWrap>
            </UnorderedList>
          </ContentGroup>
          <ContentGroup title="Server Stats">
            <Text>
              おうちのラズパイクラスタサーバーの温度です。（リアルタイム更新）
            </Text>
            <HStack spacing={5}>
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
          <ContentGroup title="Links">
            <SimpleGrid gridTemplateColumns="2fr 1fr" gap={2} maxWidth={400}>
              <HStack>
                <IconBrandGithub />
                <Text>GitHub</Text>
              </HStack>
              <a
                href="https://github.com/itta611"
                target="_blank"
                rel="noreferrer"
              >
                <Button rightIcon={<IconExternalLink size={20} />}>
                  @itta611
                </Button>
              </a>
              <HStack>
                <IconBrandX />
                <Text>Twitter(X)</Text>
              </HStack>
              <a
                href="https://twitter.com/IttaFunahashi"
                target="_blank"
                rel="noreferrer"
              >
                <Button rightIcon={<IconExternalLink size={20} />}>
                  @IttaFunahashi
                </Button>
              </a>
              <HStack>
                <IconBrandDiscordFilled />
                <Text>Discord</Text>
              </HStack>
              <Box>
                <Button
                  onClick={handleDiscordCopy}
                  rightIcon={<IconClipboard size={20} />}
                >
                  @itta.dev
                </Button>
              </Box>
            </SimpleGrid>
          </ContentGroup>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
