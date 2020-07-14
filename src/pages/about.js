import React from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import SEO from "../components/seo";
import { Heading } from "@chakra-ui/core";

const About = () => (
  <DefaultLayout>
    <SEO title="About" />
    <Heading as="h1">About</Heading>
  </DefaultLayout>
);

export default About;
