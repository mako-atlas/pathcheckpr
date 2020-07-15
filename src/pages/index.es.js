import React from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import SEO from "../components/seo";
import { Heading } from "@chakra-ui/core";

const Homepage = ({ location }) => (
  <DefaultLayout location={location} lang="es">
    <SEO title="Portada" />
    <Heading as="h1">Portada</Heading>
  </DefaultLayout>
);

export default Homepage;
