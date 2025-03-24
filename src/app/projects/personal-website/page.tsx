import { Typography } from "@mui/material";

import BulletedList from "@/components/BulletedList";
import BulletedListItem from "@/components/BulletedListItem";
import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import SectionTitle from "@/components/SectionTitle";

export default function PersonalWebsite() {
  return (
    <PageContainer>
      <PageTitle>My Personal Website</PageTitle>
      <Typography gutterBottom>
        These days, it feels like nearly everyone working in tech has their own
        website.Some are made using templating software, like Weebly or
        Wordpress, while others are built from scratch, as a project themselves.
        It is this latter option which I took in creating my website. If
        you&#39;re just interested in the different bits, of tech that make up
        this site, here&#39;s a summary:
      </Typography>
      <BulletedList>
        <BulletedListItem>
          <a href="https://typescriptlang.org">Typescript</a> &ndash; for
          explicit types, type-checking
        </BulletedListItem>
        <BulletedListItem>
          <a href="https://react.dev">React</a> &ndash; for JSX, state
        </BulletedListItem>
        <BulletedListItem>
          <a href="https://mui.com/material-ui">Material UI</a> &ndash; for
          pretty components
        </BulletedListItem>
        <BulletedListItem>
          <a href="https://nextjs.org">Next.js</a> &ndash; for static site
          generation
        </BulletedListItem>
      </BulletedList>
      <SectionTitle>Why static?</SectionTitle>
      <Typography>
        When creating my website, there were a few design goals I wanted to
        achieve. First and foremost, I decided that my site would be fully
        static; I did not want to have to run my own web server constantly to
        keep the site up. When I started, I was still in university and had the
        ability to host such a static site on department servers. While that is
        no longer an option for me, there are plenty of static-site hosting
        services available. For my website, I chose to stick with{" "}
        <a href="https://pages.github.com">GitHub Pages</a> because it&#39;s
        free and relatively easy to use.
      </Typography>
      <Typography>
        The features offered by sites backed by a server were not necessary for
        this project. Nevertheless, there were some compromises that were made
        so that the site could be fully static. The Next.js{" "}
        <Typography display="inline" fontFamily="monospace" component="span">
          {"<Image />"}
        </Typography>{" "}
        component requests an appropriately downscaled image from the server
        when rendered. The server can then generate (or retrieve from a cache)
        such an image to avoid sending the full resolution image to the client.
        This approach greatly speeds up page loading, but is unfortunately not
        an option for my statically generated site. For now, all image
        optimization on my site is disabled, but this is slated to change...
        eventually.
      </Typography>
      <SectionTitle>Why React?</SectionTitle>
      <Typography>
        Simply put, I chose to build my personal website in React just to get
        some practice in using the framework. While my focus in computer science
        is now on machine learning, I had done some frontend development work in
        the past and wanted to keep my options open. React doesn&#39;t get me
        the most optimized website, both in bundle size and load times, nor does
        it particularly speed up development time. What it does do, however, is
        let me use technology that I have worked with before &ndash; Material
        UI. I like how good the text and buttons and myriad of other widgets
        look in MUI without much design work on my part.
      </Typography>
      <Typography>
        Another motivation for using React is so that more complex pages can be
        seamlessly supported on the site. Some of the projects that I have
        planned will require significant client state to be managed, an area
        where React excels. While it is true that these projects could be
        separated into their own sites and then incorporated into my personal
        website using links or an{" "}
        <Typography display="inline" fontFamily="monospace" component="span">
          {"<iframe />"}
        </Typography>{" "}
        element, I would prefer to have a consistent style across the entire
        site.
      </Typography>
    </PageContainer>
  );
}
