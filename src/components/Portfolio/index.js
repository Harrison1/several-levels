import React from 'react'

const Portfolio = ({title, description, img}) =>
    <div>
        <img  src={ img } className="w-100" alt={ title } />
        <h3>{ title }</h3>
        <p>{ description }</p>
    </div>

export default Portfolio