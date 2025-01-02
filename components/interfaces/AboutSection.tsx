import { Box, Text, VStack, Stack, HStack } from "@chakra-ui/react";
import {
  IconBuilding,
  IconCake,
  IconHammer,
  IconHeartCode,
  IconMapPin,
} from "@tabler/icons-react";
import ContentGroup from "components/ui/ContentGroup";
import DinamicShadowImage from "components/ui/DinamicShadowImage";
import { FC } from "react";

const AboutSection: FC = () => {
  return (
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
            <Text color="gray.400" as="span">
              (@itta611)
            </Text>
          </Text>
          <VStack spaceY={2} color="teal.200" alignItems="start">
            <HStack>
              <IconCake size={18} />
              <Text
                as="span"
                ml={2}
                color="white"
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
                color="white"
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
                color="white"
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
                color="white"
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
                color="white"
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
  );
};

export default AboutSection;
