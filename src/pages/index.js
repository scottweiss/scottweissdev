import React from "react"

import { graphql, Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import Accordion from "../components/accordion"
import RecentPosts from "../components/recentposts.js"


import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div class="p-hero">
      <h1>Hello World</h1>
      <RecentPosts /> 
    </div>
    

  </Layout>
)


export default IndexPage



