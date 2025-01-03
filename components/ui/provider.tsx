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
    semanticTokens: {
      colors: {
        button: {
          // solid: { value: "{colors.gray.500}" },
          // contrast: { value: "{colors.gray.100}" },
          // fg: { value: "{colors.gray.700}" },
          muted: { value: "{colors.gray.600}" },
          subtle: {
            value: "{colors.gray.700}",
          },
          // emphasized: { value: "{colors.gray.300}" },
          // focusRing: { value: "{colors.gray.500}" },
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
