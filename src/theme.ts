"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  cssVariables: true,
  typography: {
    fontFamily: "var(--font-roboto)",
    body1: {
      marginBottom: 8,
    },
  },
  palette: {
    primary: {
      main: "#4F6FFF",
    },
    background: {
      default: "#EEEEEE",
    },
  },
  components: {
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          "& .MuiTypography-root": {
            marginBottom: 0,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          height: "20em",
        },
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          height: "100%",
        },
      },
    },
    MuiGrid2: {
      defaultProps: {
        size: { xs: 12, sm: 6, md: 4, lg: 4 },
      },
    },
  },
});

export default theme;
