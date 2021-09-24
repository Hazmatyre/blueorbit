import * as React from "react"
import { Link } from "gatsby"
import theme from "gatsby-plugin-theme-ui"
import { ThemeProvider } from "theme-ui"

import Header from "./header"
import Footer from "./blueorbit/footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <main>{children}</main>
      <Footer/>
      {/* <div className="global-wrapper" data-is-root-path={isRootPath}> */}
        {/* Reuse default header below for blog posts? */}
        {/* <header className="global-header">{header}</header> */}
        {/* <footer> */}
        {/*   © {new Date().getFullYear()}, Built with */}
        {/*   {` `} */}
        {/*   <a href="https://www.gatsbyjs.com">Gatsby</a> */}
        {/* </footer> */}
      {/* </div> */}
    </ThemeProvider>
  )
}

export default Layout
