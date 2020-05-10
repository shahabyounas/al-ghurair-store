import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VidoeEX from "../components/video"
import Sectors from "../components/sector/sector"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <VidoeEX/>
    <Sectors/>
  </Layout>
)

export default IndexPage
