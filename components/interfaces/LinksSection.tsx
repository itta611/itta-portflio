import { Box, Button, Text, HStack, SimpleGrid } from "@chakra-ui/react";
import {
  IconBrandDiscordFilled,
  IconBrandGithub,
  IconBrandX,
  IconClipboard,
  IconExternalLink,
} from "@tabler/icons-react";
import ContentGroup from "components/ui/ContentGroup";
import { FC } from "react";

const LinksSection: FC = () => {
  const handleDiscordCopy = () => {
    navigator.clipboard.writeText("itta.dev");
  };

  return (
    <ContentGroup title="Links">
      <SimpleGrid gridTemplateColumns="2fr 1fr" gap={2} maxWidth={400}>
        <HStack>
          <IconBrandGithub />
          <Text>GitHub</Text>
        </HStack>
        <a href="https://github.com/itta611" target="_blank" rel="noreferrer">
          <Button rightIcon={<IconExternalLink size={20} />}>@itta611</Button>
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
  );
};

export default LinksSection;
