"use client";

import ItemLabel from "@/components/ItemLabel";
import PageContainer from "@/components/PageContainer";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid2,
  Link,
  Typography,
} from "@mui/material";
import NextLink from "next/link";

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
          <Card>
            <CardActionArea
              LinkComponent={NextLink}
              href={"/about"}
              sx={{ height: "100%" }}
            >
              <CardContent sx={{ pb: 0 }}>
                <ItemLabel title="about" />
              </CardContent>
              <CardHeader title="About Me" />
              <CardContent>
                <Box height={10} />A little bit about myself. Something to think
                about.
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
      </Grid2>
    </PageContainer>
  );
}
