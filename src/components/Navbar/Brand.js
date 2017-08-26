import React from 'react'
import Link from 'gatsby-link'

const Brand = ({brand}) =>
    <Link className="navbar-brand" to="/page-2/">{ brand }</Link>

export default Brand

