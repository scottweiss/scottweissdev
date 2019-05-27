import React from "react"

import { graphql, Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import Accordion from "../components/accordion"
import NewestPost from "../components/newestpost.js"
import SecondaryPosts from "../components/secondarypost.js"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div class="p-hero">
      <h1>Hello World</h1>

    </div>
    <NewestPost /> 

    <SecondaryPosts /> 
  </Layout>
)


export default IndexPage



