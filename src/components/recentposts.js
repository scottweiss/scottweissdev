import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const RecentPosts = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          limit: 5
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
              timeToRead
            }
          }
        }
      }
    `}
    render={data => (
            <article class="recent-posts">
                {data.allMarkdownRemark.edges.map(({ node }) => (
              
                      <Link key={node.id} to={node.frontmatter.path} class="recent-post">
                      <header><h1 class="recent-post__title">{node.frontmatter.title}</h1></header>
                      <p class="recent-post__reading-time">{node.timeToRead}</p>
                        <p class="recent-post__date-published">{node.frontmatter.date}</p>
                       </Link>                           
                    
                ))}
            </article>
        )}
    />
)

export default RecentPosts
