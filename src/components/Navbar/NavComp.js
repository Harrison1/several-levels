import React, { Component } from 'react'

class NavComp extends React.Component{

    burgerToggle() {
		let linksEl = document.querySelector('.navbar-collapse');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
    }
    
	render() {
		return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" onClick={this.burgerToggle}>
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home</a>
                        <a className="nav-item nav-link" href="#">Features</a>
                        <a className="nav-item nav-link" href="#">Pricing</a>
                        <a className="nav-item nav-link disabled" href="#">Disabled</a>
                    </div>
                </div>
            </nav>
			// <nav>
			// 	<div classNameName="navWide">
			// 		<div classNameName="wideDiv">
			// 			<a href="#">Link 1</a>
			// 			<a href="#">Link 2</a>
			// 			<a href="#">Link 3</a>
			// 		</div>
			// 	</div>
			// 	<div classNameName="navNarrow">
			// 		<i classNameName="fa fa-bars fa-2x" onClick={this.burgerToggle}>HELLO</i>
			// 		<div classNameName="narrowLinks">
			// 			<a href="#" onClick={this.burgerToggle}>Link 1</a>
			// 			<a href="#" onClick={this.burgerToggle}>Link 2</a>
			// 			<a href="#" onClick={this.burgerToggle}>Link 3</a>
			// 		</div>
			// 	</div>
			// </nav>
        );
    }
}

export default NavComp