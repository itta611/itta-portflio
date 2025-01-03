"use client";

import { Box, Spinner } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { FC } from "react";

const LogoWithLottie = dynamic(() => import("@/components/ui/Logo"), {
  ssr: false,
  loading: () => (
    <Box
      h="176px"
      w="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner size="xl" color="white" />
    </Box>
  ),
});

const Header: FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      as="header"
      mx={11}
      py={{ sm: 9, base: 3 }}
    >
      <LogoWithLottie mx="auto" cursor="pointer" />
    </Box>
  );
};

export default Header;
