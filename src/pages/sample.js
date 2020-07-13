import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the sample page</h1>
    <p>This page was created statically</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
