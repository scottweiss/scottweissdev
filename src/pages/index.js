import React from "react"

import { graphql, Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import Accordion from "../components/accordion"
import RecentPosts from "../components/recentposts.js"
import colorMouse from "../components/colorMouse.js"


import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div class="p-hero py-2">
     <div class="about"><h1>Hello world, it is me, apple head <i className="fas fa-times"></i></h1>
     	<p>theres a lot of things happening, all good things, and placeholder text. and sometimes theres enough content for the text to wrap to multiple lines.</p>
	
     </div>
      <RecentPosts /> 
    </div>
    

  </Layout>
)


export default IndexPage



