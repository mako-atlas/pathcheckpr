import React from "react"
import PlainLayout from "../../../components/layouts/PlainLayout"
import SEO from "../../../components/seo"
import { Box, Heading, Text } from "@chakra-ui/core"
import parse from "html-react-parser"
import policy from "../../../data/privacy-policy.en.json"

const PrivacyPolicy = ({ location }) => {
  return (
    <PlainLayout location={location} lang="en">
      <SEO title="PrivacyPolicy" />
      <Heading as="h1" size="2xl">
        {policy.title}
      </Heading>
      <Text>Updated: {policy.updated}</Text>
      {policy.sections.map(({ title, items }, i) => (
        <Box as="section" key={i}>
          <Heading>{title}</Heading>
          {items.map(item => parse(item))}
        </Box>
      ))}
    </PlainLayout>
  )
}

export default PrivacyPolicy
