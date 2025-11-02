import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import { Grid, Typography } from "@mui/material";

import Calculus1Card from "./_cards/Calculus1Card";
import Calculus2Card from "./_cards/Calculus2Card";
import LimitsCard from "./_cards/LimitsCard";

export default function NotesPage() {
  return (
    <PageContainer>
      <PageTitle>Notes</PageTitle>
      <Typography>
        Occasionally I will gain a passing interest in a topic and try to learn
        as much as I can about it before I inevitably burn out. It might be a
        good idea to keep some notes on these bits of knowledge so that if they
        ever become useful to me (or anyone else), the work in researching them
        will already have been done. I give no guarantees on the quality of any
        of these notes; they will probably be mostly my internal ramblings, but
        every so often, maybe I will write something useful.
      </Typography>
      <Grid container spacing={2}>
        <Grid>
          <Calculus1Card />
        </Grid>
        <Grid>
          <Calculus2Card />
        </Grid>
        <Grid>
          <LimitsCard />
        </Grid>
      </Grid>
    </PageContainer>
  );
}
