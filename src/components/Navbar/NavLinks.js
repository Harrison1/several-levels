import React from 'react'
import Link from 'gatsby-link'

const NavLinks = () =>
    <div className="collapse navbar-collapse justify-content-end">
        <div className="navbar-nav">
            <Link className="nav-item nav-link text-white" to="/">Services</Link>
            <Link className="nav-item nav-link text-white" to="/page-2/">Tutorials</Link>
            <Link className="nav-item nav-link text-white" to="/">Contact</Link>
        </div>
    </div>

export default NavLinks