import {  Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// import Search from "./search"

const Header = ({ siteTitle }) => (
  <header>
    <div>
 
        <Link
          to="/"
          
        >
          {siteTitle}
        </Link>

    
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Home`,
}

export default Header
