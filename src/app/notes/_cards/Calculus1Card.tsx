import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import NextLink from "next/link";

import ItemLabel from "@/components/ItemLabel";

export default function AboutCard() {
  return (
    <Card>
      <CardActionArea LinkComponent={NextLink} href="/notes/math/calculus-1">
        <CardContent sx={{ pb: 0 }}>
          <ItemLabel title="math" />
        </CardContent>
        <CardHeader title="Differential Calculus" sx={{ pb: 0 }} />
        <CardContent>
          <Typography>
            Condensed notes on everything* taught in a generic first course in
            calculus. Limits, continuity, derivatives, approximations, and
            theorems thereof.
          </Typography>
          <Typography variant="body2">* actually only some things</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
