"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NextLink from "next/link";

import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import SectionTitle from "@/components/SectionTitle";
import BulletedList from "@/components/BulletedList";
import BulletedListItem from "@/components/BulletedListItem";

export default function About() {
  return (
    <PageContainer>
      <PageTitle>About</PageTitle>
      <Typography gutterBottom>
        I am a computer scientist, recently having completed a M.Sc in the field
        with a focus on machine learning and differential privacy. While most of
        my work has been in large language models and diffusion models, I have a
        general interest in many different areas. For example, I have worked in
        firmware, games, and frontend development. The latter example is why I
        chose to create this website using React rather than from a template. I
        enjoy thinking about problems from low-level perspectives, working out
        tricky problems, and of course, writing code.
      </Typography>

      <SectionTitle>Education</SectionTitle>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: "33%" }}>M.Sc Computer Science</Typography>
          <Typography color="textSecondary" sx={{ width: "55%" }}>
            University of British Columbia
          </Typography>
          <Typography>2022 &ndash; 2024</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontWeight="bold" component="span">
            Master&apos;s Thesis:&nbsp;
          </Typography>
          <Link
            component={NextLink}
            href="https://dx.doi.org/10.14288/1.0445291"
          >
            On the Efficiency and Privacy of Foundation Models
          </Link>
          <Typography>
            <b>Supervisors: </b>
            <Link component={NextLink} href="https://www.cs.ubc.ca/~nickhar/">
              Dr. Nick Harvey
            </Link>
            ,&nbsp;
            <Link component={NextLink} href="https://lrjconan.github.io/">
              Dr. Renjie Liao
            </Link>
            ,&nbsp;
            <Link component={NextLink} href="https://www.cs.ubc.ca/~mijungp/">
              Dr. Mijung Park
            </Link>
          </Typography>
          <Typography fontWeight="bold">Highlighted Courses:</Typography>
          <BulletedList>
            <BulletedListItem>
              CPSC 532D &mdash; Statistical Learning Theory
            </BulletedListItem>
            <BulletedListItem>
              EECE 571F &mdash; Deep Learning with Structures
            </BulletedListItem>
            <BulletedListItem>
              CPSC 532P &mdash; Introduction to Differential Privacy
            </BulletedListItem>
            <BulletedListItem>MATH 544 &mdash; Probability I</BulletedListItem>
          </BulletedList>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: "33%" }}>B.Sc Computer Science</Typography>
          <Typography color="textSecondary" sx={{ width: "55%" }}>
            University of British Columbia
          </Typography>
          <Typography>2017 &ndash; 2022</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontWeight="bold">Highlighted Courses:</Typography>
          <BulletedList>
            <BulletedListItem>
              CPSC 421 &mdash; Introduction to Theory of Computing
            </BulletedListItem>
            <BulletedListItem>
              CPSC 436R &mdash; Randomized Algorithms
            </BulletedListItem>
            <BulletedListItem>
              CPSC 425 &mdash; Computer Vision
            </BulletedListItem>
            <BulletedListItem>
              CPSC 440 &mdash; Advanced Machine Learning
            </BulletedListItem>
            <BulletedListItem>
              CPSC 340 &mdash; Machine Learning and Data Mining
            </BulletedListItem>
          </BulletedList>
        </AccordionDetails>
      </Accordion>
    </PageContainer>
  );
}
