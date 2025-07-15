"use client";

import { Grid2, Link, Typography } from "@mui/material";
import NextLink from "next/link";

import PageContainer from "@/components/PageContainer";
import PersonalWebsiteCard from "./projects/_cards/PersonalWebsiteCard";
import AboutCard from "./_cards/AboutCard";

export default function Home() {
  return (
    <PageContainer>
      <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
        Welcome
      </Typography>
      <Typography variant="body1" gutterBottom>
        Hello! You have somehow found your way onto my personal website. Please
        make yourself at home. Once you&apos;re ready to have a look around,
        feel free to make use of the top navigation bar. You can find out more
        information about me in the{" "}
        <Link component={NextLink} href="/about">
          about
        </Link>{" "}
        page, and what I&apos;ve been up to in the{" "}
        <Link component={NextLink} href="/projects">
          projects
        </Link>{" "}
        and{" "}
        <Link component={NextLink} href="/photos">
          photos
        </Link>{" "}
        pages.
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
        Highlights
      </Typography>
      <Grid2 container spacing={2}>
        <Grid2>
          <AboutCard />
        </Grid2>
        <Grid2>
          <PersonalWebsiteCard />
        </Grid2>
      </Grid2>
    </PageContainer>
  );
}
