import React from 'react'

const Portfolio = ({link, title, description, img}) =>
    <div>
        <a href={ link }>
            <img src={ img } className="w-100" alt={ title } />
        </a>
        <h4><a href={ link } className="portfolio-link">{ title }</a></h4>
        <p>{ description }</p>
    </div>

export default Portfolio