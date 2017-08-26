import React from 'react'
import Container from '../utils/Container'

const Nav = ({ children }) =>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor: 'rgba(39, 207, 230, 1)', paddingLeft: '5%', paddingRight: '5%'}}>
        { children }
    </nav>

export default Nav