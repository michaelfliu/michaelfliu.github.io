import { Card, CardActionArea, CardContent, CardHeader } from "@mui/material";
import NextLink from "next/link";

import ItemLabel from "@/components/ItemLabel";

export default function GraphsSandboxCard() {
  return (
    <Card>
      <CardActionArea LinkComponent={NextLink} href="/projects/graphs-sandbox">
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
  );
}
