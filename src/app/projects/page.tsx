import { Grid, Typography } from "@mui/material";

import PageContainer from "@/components/PageContainer";
import PersonalWebsiteCard from "./_cards/PersonalWebsiteCard";
import GraphsSandboxCard from "./_cards/GraphsSandboxCard";
import DiceCard from "./_cards/DiceCard";

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

      <Grid container spacing={2}>
        <Grid>
          <PersonalWebsiteCard />
        </Grid>
        <Grid>
          <GraphsSandboxCard />
        </Grid>
        <Grid>
          <DiceCard />
        </Grid>
      </Grid>
    </PageContainer>
  );
}
