
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import '../components/bootstrap.min.css'
import "./layout.css"
import Navbar from '../components/Globals/Navbar'
const Layout = ({ children }) => (
 <>
 <Navbar />
 {children}</>
 
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
