import React from "react"
import DefaultLayout from "../components/layouts/DefaultLayout"
import SEO from "../components/seo"
import { Heading } from "@chakra-ui/core"

const NotFoundPage = () => (
  <DefaultLayout>
    <SEO title="404: Not found" />
    <Heading as="h1">Not Found</Heading>
    <p>This site is under construction.</p>
  </DefaultLayout>
)

export default NotFoundPage
