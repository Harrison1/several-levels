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

// export default class NavBar extends Component {
//     state = { activeItem: 'home' }
  
//     handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
//     render() {
//       const { activeItem } = this.state
  
//       return (
//         <Sticky>
//             <Segment>
//                 <Menu pointing secondary>
//                     <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}><Link className="nav-item nav-link text-white" to="/">Services</Link></Menu.Item>
//                     <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}><Link className="nav-item nav-link text-white" to="/page-2/">Tutorials</Link></Menu.Item>
//                     <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
//                 </Menu>
//             </Segment>
//         </Sticky>
//       )
//     }
//   }

  
//   <Link className="nav-item nav-link text-white" to="/page-2/">Tutorials</Link>
//   <Link className="nav-item nav-link text-white" to="/">Contact</Link>