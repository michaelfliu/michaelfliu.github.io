"use client";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import NextLink from "next/link";

export default function MyAppBar() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography
            color="inherit"
            variant="h5"
            component={NextLink}
            href="/"
            margin={0}
            sx={{ textDecoration: "none" }}
          >
            Michael&nbsp;Liu
          </Typography>
          <Box flexGrow={1} />
          <Button color="inherit" LinkComponent={NextLink} href="/about">
            About
          </Button>
          <Button color="inherit" LinkComponent={NextLink} href="/projects">
            Projects
          </Button>
          <Button color="inherit" LinkComponent={NextLink} href="/notes">
            Notes
          </Button>
          <Button color="inherit" LinkComponent={NextLink} href="/photos">
            Photos
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
