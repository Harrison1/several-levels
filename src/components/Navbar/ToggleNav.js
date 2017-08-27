import React, { Component }  from 'react'

class ToggleNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: false
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }))

        const menu = document.querySelector('.navbar-collapse');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    }

    render() {
        return (
            <button className={this.state.isActive ? 'navbar-toggler change': 'navbar-toggler'} type="button" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={this.toggleNav}>
                <div className="bar1"></div>
                <div className="bar2"></div>
            </button>
        )
    }


}

export default ToggleNav