import React from "react"
import Helmet from "react-helmet"

import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({data}) {
	const {markdownRemark: post} = data;

	return (
		<Layout>
    	<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<div>
			<div dangerouslySetInnerHTML={{__html: post.html}} />
		</div>
		</Layout>
	)
}

export const postQuery = graphql`
	query BlogPostByPath($path: String!){
		markdownRemark(frontmatter: { path: { eq: $path} }){
			html
			frontmatter{
				title
				path
			}
		}
	}
`