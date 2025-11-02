import { Card, CardActionArea, CardContent, CardHeader } from "@mui/material";
import NextLink from "next/link";

import ItemLabel from "@/components/ItemLabel";

export default function AboutCard() {
  return (
    <Card>
      <CardActionArea LinkComponent={NextLink} href="/notes/math/limits">
        <CardContent sx={{ pb: 0 }}>
          <ItemLabel title="math" />
        </CardContent>
        <CardHeader title="Limits" sx={{ pb: 0 }} />
        <CardContent>
          A handy reference page for myself whenever I need to recall some
          definition or theorem on limits.
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
