import ItemLabel from "@/components/ItemLabel";
import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid2,
  Typography,
} from "@mui/material";
import NextLink from "next/link";

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
      <Grid2 container spacing={2}>
        <Grid2>
          <Card>
            <CardActionArea
              LinkComponent={NextLink}
              href="/notes/math/calculus-1"
            >
              <CardContent sx={{ pb: 0 }}>
                <ItemLabel title="math" />
              </CardContent>
              <CardHeader title="Differential Calculus" sx={{ pb: 0 }} />
              <CardContent>
                <Typography>
                  Condensed notes on everything* taught in a generic first
                  course in calculus. Limits, continuity, derivatives,
                  approximations, and theorems thereof.
                </Typography>
                <Typography variant="body2">
                  * actually only some things
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>

        <Grid2>
          <Card>
            <CardActionArea
              LinkComponent={NextLink}
              href="/notes/math/calculus-2"
            >
              <CardContent sx={{ pb: 0 }}>
                <ItemLabel title="math" />
              </CardContent>
              <CardHeader title="Integral Calculus" sx={{ pb: 0 }} />
              <CardContent>
                <Typography>
                  Condensed notes on everything* taught in a generic second
                  course in calculus. Riemann integration, fundamental theorem
                  of calculus, sequences and series, and theorems thereof.
                </Typography>
                <Typography variant="body2">
                  * actually only some things
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
      </Grid2>
    </PageContainer>
  );
}
