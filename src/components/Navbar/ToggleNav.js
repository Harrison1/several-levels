import React from 'react'

function toggle() {
    const menu = document.querySelector('.navbar-collapse');
    const xbtn = document.querySelector('.navbar-toggler');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        xbtn.classList.remove('change');
    } else {
        menu.style.display = 'block';
        xbtn.classList.add('change');
    }
}

const ToggleNav = () =>
    <button className="navbar-toggler" type="button" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={toggle}>
        <div className="bar1"></div>
        <div className="bar2"></div>
    </button>

export default ToggleNav