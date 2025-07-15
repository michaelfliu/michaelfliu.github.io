import type { Metadata } from "next";

// Imports for Material UI
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { Roboto } from "next/font/google";
import MyAppBar from "@/components/MyAppBar";
import { CssBaseline } from "@mui/material";
import "katex/dist/katex.min.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Michael Liu's Personal Website",
  description:
    "My personal website, where I post computer-science related shenanigans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: "100vh" }}>
      <body
        className={`${roboto.variable}`}
        style={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <>
                <MyAppBar />
                {children}
              </>
            </ThemeProvider>
          </AppRouterCacheProvider>
      </body>
    </html>
  );
}
