"use client";

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        gray: {
          50: { value: "#F7FAFC" },
          100: { value: "#EDF2F7" },
          200: { value: "#E2E8F0" },
          300: { value: "#CBD5E0" },
          400: { value: "#A0AEC0" },
          500: { value: "#718096" },
          600: { value: "#4A5568" },
          700: { value: "#2D3748" },
          800: { value: "#1A202C" },
          950: { value: "#171923" },
        },
      },
    },
    recipes: {
      a: {
        base: {
          color: "teal.400",
        },
      },
    },
  },
  globalCss: {
    body: {
      bg: "gray.800",
    },
    "*::selection": {
      bg: "teal.800",
    },
    a: {
      color: "teal.300!",
      textDecoration: "underline",
    },
    "* > p": {
      my: 2,
    },
  },
});

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
