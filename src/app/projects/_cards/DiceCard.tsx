import { Card, CardActionArea, CardContent, CardHeader } from "@mui/material";
import NextLink from "next/link";

import ItemLabel from "@/components/ItemLabel";

export default function DiceCard() {
  return (
    <Card>
      <CardActionArea LinkComponent={NextLink} href="/projects/dice">
        <CardContent sx={{ pb: 0 }}>
          <ItemLabel title="js" />
        </CardContent>
        <CardHeader title="Dice" />
        <CardContent>
          A 3d dice throwing simulator using three.js and rapier physics. Assets
          authored in Blender. It would look nicer if I were a better artist.
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
