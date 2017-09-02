import React from 'react'
import Container from '../utils/Container'

const Nav = ({ children }) =>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        { children }
    </nav>

export default Nav