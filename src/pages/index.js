import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />


    <ul>
    {data.allMarkdownRemark.edges.map(post => (
        <li key={post.node.id}>
       <Link 
       to={post.node.frontmatter.path} className="hello">
          <div className="blog preview">
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

// export const typeQuery = graphql`
//   query TypeQuery {
//    allMarkdownRemark(limit: 2000) {
//       group(field: frontmatter___type) {
//         fieldValue
//         totalCount
//       }
//     }
//   }
// `

export default IndexPage



