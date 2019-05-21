import { StaticQuery, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"

import Search from "./search"

const Header = ({ siteTitle }) => (
  <header>
    <div>
    <h1 >
        <Link
          to="/"
          
        >
          {siteTitle}
        </Link>
      </h1>
    <div>  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
        

      }
    `}
    render={data => (
  
        <Search searchIndex={data.siteSearchIndex.index} />
   
    )}
  /></div>
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
