import React, { Component }  from 'react'

class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isAActive: false
        }

    }


    componentDidMount() {
        const _this = this
        window.addEventListener('scroll', function(e) {
            if(window.scrollY>25) {
                if(!_this.state.isAActive) {
                    _this.setState ({
                        isAActive: true
                    })
                }
            } else {
                _this.setState ({
                    isAActive: false
                })
            }
        })
    }

    render() {
        return (
            <nav className={'navbar navbar-expand-lg navbar-dark fixed-top ' + (this.state.isAActive ? 'fill-bg' : '')}>
                { this.props.children }
            </nav>
        )
    }
}

export default Nav