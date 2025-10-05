import { Card, CardActionArea, CardContent, CardHeader } from "@mui/material";
import NextLink from "next/link";

import ItemLabel from "@/components/ItemLabel";

export default function AboutCard() {
  return (
    <Card>
      <CardActionArea LinkComponent={NextLink} href="/about">
        <CardContent sx={{ pb: 0 }}>
          <ItemLabel title="about" />
        </CardContent>
        <CardHeader title="About Me" />
        <CardContent>
          Click this card to learn just a little bit more about who I am and
          what I&#39;ve done.
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
