/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  const HeaderStyle = styled.div`
        margin: 0 auto;
        maxWidth: 960;
        padding: 0 1.0875rem 1.45rem;
  `;

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)  

  return (
    <>
     <Helmet title={'title'}
     meta={
       [{
         name: 'this is title page',
         content: 'This is all about this page'
       },{
        name: 'this is second title page',
        content: 'This is all about this second page'
       }]
     }>
       
     </Helmet>
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
     
      <HeaderStyle>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Shahab Younas
        </footer>
      </HeaderStyle>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
