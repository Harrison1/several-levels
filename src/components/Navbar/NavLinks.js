import React from 'react'
import Link from 'gatsby-link'

const NavLinks = () =>
    <div className="collapse navbar-collapse justify-content-end">
        <div className="navbar-nav">
            <a className="nav-item nav-link text-white" href="#services">Services</a>
            <Link className="nav-item nav-link text-white" to="https://blog.severallevels.io">Blog</Link>
            <a className="nav-item nav-link text-white" href="#contact">Contact</a>
        </div>
    </div>

export default NavLinks