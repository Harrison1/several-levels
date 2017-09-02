import React, { Component }  from 'react'

class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isActive: false
        }

        this.toggleBG = this.toggleBG.bind(this);
    }

    toggleBG() {
        console.log('hello')
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }))
    }

    componentDidMount() {
        const _this = this
        window.addEventListener('scroll', function(e) {
            if(window.scrollY>25) {
                _this.setState ({
                    isActive: true
                })
            } else {
                _this.setState ({
                    isActive: false
                })
            }
        })
    }

    render() {
        return (
            <nav className={'navbar navbar-expand-lg navbar-dark fixed-top ' + (this.state.isActive ? 'fill-bg' : '')}>
                { this.props.children }
            </nav>
        )
    }
}

export default Nav