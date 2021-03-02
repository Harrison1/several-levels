import React from 'react'
import Nav from './Nav'
import Brand from './Brand'
import ToggleNav from './ToggleNav'
import NavLinks from './NavLinks'

const Navbar = () =>
    <Nav>
        <Brand brand="several levels" />
        <ToggleNav />
        <NavLinks />
    </Nav>

export default Navbar