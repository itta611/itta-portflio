import { Box } from "@chakra-ui/react";
import Image from "next/image";
import type { ImageProps } from "next/image";
import { FC } from "react";

const DinamicShadowImage: FC<ImageProps> = ({
  width,
  height,
  alt,
  ...props
}) => {
  return (
    <Box position="relative" width={width} height={height}>
      <Box
        position="absolute"
        inset={0}
        filter="blur(10px)"
        transform="scale(1.05, 1.05)"
        userSelect="none"
        pointerEvents="none"
      >
        <Box overflow="hidden" rounded="2xl">
          <Image width={width} height={height} alt={alt} {...props} />
        </Box>
      </Box>
      <Box
        rounded="2xl"
        position="relative"
        inset={0}
        overflow="hidden"
        shadow="lg"
      >
        <Image width={width} height={height} alt={alt} {...props} />
      </Box>
    </Box>
  );
};

export default DinamicShadowImage;
