import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCartPlus } from 'react-icons/fa'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
   <FaCartPlus />
  </Layout>
)

export default IndexPage
