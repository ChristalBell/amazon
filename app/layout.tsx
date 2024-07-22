import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material";
import theme from "@/styles/theme";
import { COLORS } from "@/styles/colors";
import Header from "@/components/shared/Header";
import { store } from ".//../store/index";
import { Provider as ReduxProvider } from "react-redux";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ backgroundColor: COLORS.lightGrey, margin: 0 }}
      >
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ReduxProvider store={store}>
            <ThemeProvider theme={theme}>
              <Header /> {children}
            </ThemeProvider>
          </ReduxProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
