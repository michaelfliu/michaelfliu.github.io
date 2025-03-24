import ItemLabel from "@/components/ItemLabel";
import PageContainer from "@/components/PageContainer";
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid2,
  Typography,
} from "@mui/material";
import NextLink from "next/link";

export default function Projects() {
  return (
    <PageContainer>
      <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
        Projects
      </Typography>
      <Typography gutterBottom>
        This page is not complete! More past projects will be added as I get to
        writing them up.
      </Typography>

      <Grid2 container spacing={2}>
        <Grid2>
          <Card>
            <CardActionArea
              LinkComponent={NextLink}
              href="/projects/personal-website"
            >
              <CardContent sx={{ pb: 0 }}>
                <ItemLabel title="js" />
              </CardContent>
              <CardHeader title="Personal Website" />
              <CardContent>
                Interested in how I created this website? A sneak peek: I&apos;m
                using React, Material UI, and Next.js.
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
        <Grid2>
          <Card>
            <CardActionArea
              LinkComponent={NextLink}
              href="/projects/graphs-sandbox"
            >
              <CardContent sx={{ pb: 0 }}>
                <ItemLabel title="js" />
              </CardContent>
              <CardHeader title="Graphs Sandbox" />
              <CardContent>
                A playground for building graphs and then visualizing various
                algorithms running on them.
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
      </Grid2>
    </PageContainer>
  );
}
