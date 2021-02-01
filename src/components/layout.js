/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"
import IconHeart from "./icon-heart"
import "./layout.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CreditInfo = styled.div`
  display: flex;
  margin-bottom: 8px;
`

const IconHeartP = styled.span`
  margin-left: 4px;
  margin-right: 4px;
`

const License = styled.div`
  display: flex;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          <main>{children}</main>
          <Footer>
            <CreditInfo>
              <span>{`© ${new Date().getFullYear()}, Crafted with `}</span>
              <IconHeartP>
                <IconHeart />
              </IconHeartP>

              <span>{` by Hy & Meo`}</span>
            </CreditInfo>

            <License>
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by-nc/4.0/"
              >
                <img
                  alt="Creative Commons License"
                  style={{ borderWidth: 0 }}
                  src="https://i.creativecommons.org/l/by-nc/4.0/80x15.png"
                />
              </a>
            </License>
          </Footer>
        </Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
