// import {
//   ChakraProvider,
//   createSystem,
//   defaultConfig,
//   defaultSystem,
// } from "@chakra-ui/react";
import { Provider } from "../components/ui/provider";

// const system = createSystem(defaultConfig, {
// components: {
//   Text: {
//     baseStyle: {
//       my: { value: 2 },
//     },
//   },
//   Link: {
//     baseStyle: {
//       color: { value: "teal.200" },
//       textDecoration: { value: "underline" },
//     },
//   },
// },
// config: {
//   initialColorMode: "dark",
//   useSystemColorMode: false,
// },
// styles: {
//   global: () => ({
//     body: {
//       bg: "gray.800",
//       color: "white",
//       fontSize: "lg",
//     },
//   }),
// },
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
