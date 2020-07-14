import React  from "react";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import SEO from "../../components/seo";
import { Heading } from "@chakra-ui/core";

const Post = ({ pageContext }) => {
  const post = pageContext.post;

  return (
    <DefaultLayout>
      <SEO title={post.title} />
      <Heading as="h1">{post.title}</Heading>
      <div dangerouslySetInnerHTML={{__html: post.content}} />
    </DefaultLayout>
  );
}

export default Post;
