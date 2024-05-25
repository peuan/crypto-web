"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import NextLink from "next/link";
import { forwardRef } from "react";
import { LinkProps as NextLinkProps } from "next/link";

const LinkBehavior = forwardRef<HTMLAnchorElement, NextLinkProps>(
  function LinkBehavior(props, ref) {
    return <NextLink ref={ref} {...props} />;
  }
);

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#cddf52",
    },
    secondary: {
      main: "#1b1a16",
    },
    text: {
      secondary: "#6e6c62",
      custom: {
        gray: "#d4d0c5",
        lightGray: "#fcf9f2",
        black: "#0e0e07",
        white: "#fff",
      },
    },
    background: {
      gray: "#f0ebde",
      custom: {
        primary: "#1b1a16",
        secondary: "#fcf9f2",
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
});

// override component
theme.components = {
  MuiLink: {
    defaultProps: {
      component: LinkBehavior,
    },
    styleOverrides: {
      root: {
        textDecoration: "unset",

        ":hover": {
          color: theme.palette.primary.light,
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
      },
    },
    defaultProps: {
      disableElevation: true,
      LinkComponent: LinkBehavior,
    },
  },
};

export default theme;
