import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import NextLink from "next/link";

import ItemLabel from "@/components/ItemLabel";

export default function Calculus2Card() {
  return (
    <Card>
      <CardActionArea LinkComponent={NextLink} href="/notes/math/calculus-2">
        <CardContent sx={{ pb: 0 }}>
          <ItemLabel title="math" />
        </CardContent>
        <CardHeader title="Integral Calculus" sx={{ pb: 0 }} />
        <CardContent>
          <Typography>
            Condensed notes on everything* taught in a generic second course in
            calculus. Riemann integration, fundamental theorem of calculus,
            sequences and series, and theorems thereof.
          </Typography>
          <Typography variant="body2">* actually only some things</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
