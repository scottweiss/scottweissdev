import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>h1 Hello world</h1>
    <h2>h2 Hello world</h2>
    <h3>h3 Hello world</h3>
    <h4>h4 Hello world</h4>
    <p>Welcome to your new Gatsby site.</p>
   <p>Welcome to your new Gatsby site.</p>
    
    <Link to="/page-2/">Go to page 2</Link>
    <ul>
    {data.allMarkdownRemark.edges.map(post => (
        <li>
       <Link key={post.node.id}
       to={post.node.frontmatter.path} class="hello">
          <div class="blog preview">
      {post.node.frontmatter.title}
          

          </div>
       </Link>
       
        </li>
      ))}
    </ul>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC}
      filter: { frontmatter: { published: {eq: true}}}

    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default IndexPage



