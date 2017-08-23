import React from 'react'
import Title from './Title'
import Tagline from './Tagline'
import logo from '../img/several-levels-logo.svg'

const Header = () =>
    <div className="sl-header d-flex align-items-center">
        <div className="container">
            <img src={logo} className="header-logo-img" alt="several levels logo" />
            <Title />
            <Tagline />
        </div>
    </div>

export default Header