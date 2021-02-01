import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`ailurus`, `blog`, `post`]} />
    <LandingBio />
  </Layout>
)

export default IndexPage
