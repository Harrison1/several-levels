import React from 'react'
import Link from 'gatsby-link'
// import Navbar from '../components/Navbar'
import Tagline from '../components/Tagline'
import Header from '../components/Header'

const IndexPage = () =>
  <div>
    <Header />
      <div className="container">
      <h1>Hi people</h1>
      <Tagline />
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <code>My code here</code>
      <pre>My pre here</pre>
      <button type="button" className="btn btn-primary">Hello</button>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </div>

export default IndexPage
