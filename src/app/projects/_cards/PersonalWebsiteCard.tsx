import { Card, CardActionArea, CardContent, CardHeader } from "@mui/material";
import NextLink from "next/link";

import ItemLabel from "@/components/ItemLabel";

export default function PersonalWebsiteCard() {
  return (
    <Card>
      <CardActionArea
        LinkComponent={NextLink}
        href="/projects/personal-website"
      >
        <CardContent sx={{ pb: 0 }}>
          <ItemLabel title="js" />
        </CardContent>
        <CardHeader title="Personal Website" />
        <CardContent>
          Interested in how I created this website? A sneak peek: I&apos;m using
          React, Material UI, and Next.js.
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
