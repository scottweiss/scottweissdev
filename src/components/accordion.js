/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {  graphql } from "gatsby"


// import "./layout.scss"


const Accordion = ({data}) => (
  {data.allMarkdownRemark.map(post => (
  	<p>{post.allMarkdownRemark.group}</p>
  	))}
)

export const pageQuery = graphql`
  query IndexQuery {
   allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___type) {
        fieldValue
        totalCount
      }
    }
  }
`

export default Accordion

