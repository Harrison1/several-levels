import React from 'react'
import { Link } from 'gatsby'

const Brand = ({ brand }) =>
    <Link className="navbar-brand" to="/">{ brand }</Link>

export default Brand