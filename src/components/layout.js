
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import '../components/bootstrap.min.css'
import "./layout.css"
import Navbar from '../components/Globals/Navbar'
import Footer from '../components/Globals/Footer'
const Layout = ({ children }) => (
 <>
 <Navbar />
 {children}
 <Footer />
 </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
