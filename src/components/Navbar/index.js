import React, { Component } from 'react'
import Nav from './Nav'
import Brand from './Brand'
import ToggleNav from './ToggleNav'
import NavLinks from './NavLinks'
import Link from 'gatsby-link'

const Navbar = () =>
    <Nav>
        <Brand brand="several levels" />
        <ToggleNav />
        <NavLinks />
    </Nav>

export default Navbar