import React  from "react";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import SEO from "../../components/seo";
import { Heading } from "@chakra-ui/core";

const Page = ({ pageContext }) => {
  const page = pageContext.page;

  return (
    <DefaultLayout>
      <SEO title={page.title} />
      <Heading as="h1">{page.title}</Heading>
      <div dangerouslySetInnerHTML={{__html: page.content}} />
    </DefaultLayout>
  );
}

export default Page;
