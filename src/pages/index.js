import React from 'react'
import Link from 'gatsby-link'
import Tagline from '../components/Tagline'

const IndexPage = () =>
  <div>
    <h1>Hi people</h1>
    <Tagline>
      Web and App Development
    </Tagline>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <code>My code here</code>
    <pre>My pre here</pre>
    <button type="button" className="btn btn-primary">Hello</button>
    <Link to="/page-2/">Go to page 2</Link>
  </div>

export default IndexPage
