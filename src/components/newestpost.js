import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const NewestPost = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          limit: 1
          sort: { fields: [frontmatter___date], order: DESC}
          filter: { frontmatter: { published: {eq: true}}}
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
                      <Link to={node.frontmatter.path} >
                          {node.frontmatter.title}
                          <span class="ml-1">{node.frontmatter.date}</span>
                      </Link>
                    </div>
                ))}
            </div>
        )}
    />
)

export default NewestPost
