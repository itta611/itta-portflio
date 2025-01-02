"use client";

import { ColorModeProvider } from "@/components/ui/color-mode";
import { Provider } from "../components/ui/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <Provider forcedTheme="dark">
          <ColorModeProvider>{children}</ColorModeProvider>
        </Provider>
      </body>
    </html>
  );
}
