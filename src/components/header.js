import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ menuLinks, siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: "flex",
        flex: 1,
        margin: `0 0`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h3>
      <div style={{
         padding: `0 4.0875rem`
      }}>
        <nav>
          <ul style={{display: "flex" , flex: 1}}>
            {menuLinks.map(link => (
              <li key={link.name} style={{
                listStyleType: 'none',
                padding: '1rem'
              }}>
                <Link style={{color: `white` , textDecoration: 'none'}} to={link.link}>{link.name} </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
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
