import { Grid2, Typography } from "@mui/material";

import PageContainer from "@/components/PageContainer";
import PersonalWebsiteCard from "./_cards/PersonalWebsiteCard";
import GraphsSandboxCard from "./_cards/GraphsSandboxCard";

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
          <PersonalWebsiteCard />
        </Grid2>
        <Grid2>
          <GraphsSandboxCard />
        </Grid2>
      </Grid2>
    </PageContainer>
  );
}
