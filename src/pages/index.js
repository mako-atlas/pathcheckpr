import React from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import SEO from "../components/seo";
import { Heading } from "@chakra-ui/core";

const Homepage = () => (
  <DefaultLayout>
    <SEO title="Homepage" />
    <Heading as="h1">Homepage</Heading>
  </DefaultLayout>
);

export default Homepage;
