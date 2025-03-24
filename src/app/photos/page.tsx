import fs from "fs";
import path from "path";
import { Box, Grid2 } from "@mui/material";
import NextLink from "next/link";
import ExportedImage from "next-image-export-optimizer";
import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";

const IMAGE_EXTENSIONS = new Set(["png", "jpg", "jpeg", "gif"]);

export default function Photography() {
  const photos = fs
    .readdirSync("public/photos")
    .filter((photo) =>
      IMAGE_EXTENSIONS.has(path.extname(photo).slice(1).toLowerCase())
    );

  return (
    <PageContainer>
      <PageTitle>Photography</PageTitle>
      <Grid2 container>
        {photos.map((photo, index) => (
          <Grid2 key={photo} sx={{ aspectRatio: 1 }}>
            <Box
              component={NextLink}
              href={`/photos/${photo}`}
              position="relative"
              display="block"
              width="100%"
              height="100%"
            >
              <ExportedImage
                src={`/photos/${photo}`}
                alt=""
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </PageContainer>
  );
}
