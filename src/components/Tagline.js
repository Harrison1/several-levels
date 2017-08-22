import React, { Component } from 'react';

class Tagline extends Component {
    render() {
        return (
            <p className="text-center">
                {this.props.children}
            </p>
        );
    }
}

export default Tagline;
