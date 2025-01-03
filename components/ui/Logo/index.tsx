"use client";

// cf. ../interfaces/Header.tsx

import { FC, useEffect, useRef } from "react";
import { AspectRatio, Box, BoxProps, chakra } from "@chakra-ui/react";
import LogoWithoutHammer from "./LogoWithoutHammer";
import kawaiiLogoHammer from "./kawaii-logo-hammer.json";
import kawaiiLogoHammerShadow from "./kawaii-logo-hammer-shadow.json";
import lottie, { AnimationItem } from "lottie-web";

const Logo: FC<BoxProps> = (props: BoxProps) => {
  const player = useRef<AnimationItem | null>(null);
  const shadowPlayer = useRef<AnimationItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const shadowContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !shadowContainerRef.current) return;

    player.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      autoplay: true,
      loop: false,
      animationData: kawaiiLogoHammer,
    });

    shadowPlayer.current = lottie.loadAnimation({
      container: shadowContainerRef.current,
      renderer: "svg",
      autoplay: true,
      loop: false,
      animationData: kawaiiLogoHammerShadow,
      path: "/lottie/kawaii-logo-hammer-shadow.json",
    });

    return () => {
      player.current?.destroy();
      shadowPlayer.current?.destroy();
    };
  });

  const handleClick = () => {
    if (player.current && shadowPlayer.current) {
      player.current.goToAndPlay(0);
      shadowPlayer.current.goToAndPlay(0);
    }
  };

  return (
    <Box position="relative" onClick={handleClick} {...props}>
      <Box ref={shadowContainerRef} width="full" />
      <AspectRatio ratio={562.5 / 220} width="full" position="absolute" top={0}>
        <LogoWithoutHammer />
      </AspectRatio>
      <chakra.div position="absolute" top={0} left={0} ref={containerRef} />
    </Box>
  );
};

export default Logo;
