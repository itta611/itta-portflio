import { Box, Heading, HTMLChakraProps } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

export interface ContentGroupProps extends HTMLChakraProps<"div"> {
  title: string;
  children: ReactNode;
}

const ContentGroup: FC<ContentGroupProps> = ({ title, children, ...props }) => {
  return (
    <Box as="article" position="relative" mt={10} {...props}>
      <Heading
        as="h2"
        fontWeight="extrabold"
        fontSize="3xl"
        mb={4}
        display="inline-block"
        position="relative"
        _before={{
          content: '""',
          background: "gray.700",
          position: "absolute",
          borderRadius: 3,
          height: 4,
          left: -3,
          right: -3,
          bottom: 0,
        }}
      >
        <Box position="relative" display="inline">
          {title}
        </Box>
      </Heading>
      {children}
    </Box>
  );
};

export default ContentGroup;
