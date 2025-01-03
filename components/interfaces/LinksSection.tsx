"use client";

import { Box, Text, HStack, SimpleGrid } from "@chakra-ui/react";
import {
  IconBrandDiscordFilled,
  IconBrandGithub,
  IconBrandX,
  IconClipboard,
  IconExternalLink,
} from "@tabler/icons-react";
import { Button } from "components/ui/button";
import ContentGroup from "components/ui/ContentGroup";
import { FC } from "react";

const LinksSection: FC = () => {
  const handleDiscordCopy = () => {
    navigator.clipboard.writeText("itta.dev");
  };

  return (
    <ContentGroup
      title="Links"
      backgroundImage='url("/img/discord-arrow.svg")'
      backgroundRepeat="no-repeat"
      backgroundPositionY="bottom 14px"
      backgroundPositionX="100px"
    >
      <SimpleGrid gridTemplateColumns="2fr 1fr" gap={2} maxWidth={400}>
        <HStack>
          <IconBrandGithub />
          GitHub
        </HStack>
        <a href="https://github.com/itta611" target="_blank" rel="noreferrer">
          <Button variant="subtle">
            @itta611
            <IconExternalLink size={20} />
          </Button>
        </a>
        <HStack>
          <IconBrandX />
          Twitter(X)
        </HStack>
        <a
          href="https://twitter.com/IttaFunahashi"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="subtle">
            @IttaFunahashi
            <IconExternalLink size={20} />
          </Button>
        </a>
        <HStack>
          <IconBrandDiscordFilled />
          Discord
        </HStack>
        <Box>
          <Button onClick={handleDiscordCopy} variant="subtle">
            @itta.dev
            <IconClipboard size={20} />
          </Button>
        </Box>
      </SimpleGrid>
    </ContentGroup>
  );
};

export default LinksSection;
