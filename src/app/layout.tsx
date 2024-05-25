import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import TheMainLayout from "@/components/TheMainLayout";
import { CssBaseline } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gnosis Pay",
  description: "The world's first self-custodial Visa® Debit Card",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <body className={inter.className} suppressHydrationWarning={true}>
            <TheMainLayout>{children}</TheMainLayout>
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
