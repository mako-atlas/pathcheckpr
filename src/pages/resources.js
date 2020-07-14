import React from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import SEO from "../components/seo";
import { Heading } from "@chakra-ui/core";

const Resources = () => (
  <DefaultLayout>
    <SEO title="Resources" />
    <Heading as="h1">Resources</Heading>
  </DefaultLayout>
);

export default Resources;
