import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const SecondaryPost = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          limit: 5
          sort: { fields: [frontmatter___date], order: DESC}
          filter: { frontmatter: { published: {eq: true}}}
          skip: 1
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                path
                date(formatString: "MMMM Do, YYYY")
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => (
            <div>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id}>
                      <Link to={node.frontmatter.path}>{node.frontmatter.title}
                        <span>{node.frontmatter.date}</span>
                       </Link>                           
                    </div>
                ))}
            </div>
        )}
    />
)

export default SecondaryPost
