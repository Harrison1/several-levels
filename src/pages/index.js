import React from 'react'
import Link from 'gatsby-link'
import Vivus from 'vivus'
import Tagline from '../components/Tagline'
import Header from '../components/Header'
import Container from '../components/utils/Container'

const IndexPage = () =>
  <div>
    <Header />
      <Container>
        <h1>Hi people</h1>
        <Tagline />
        <h1>Hi people</h1>
        <h1>Hi people</h1>
        <h1>Hi people</h1>
        <h1>Hi people</h1>
        <h1>Hi people</h1>
        <h1>Hi people</h1>
        <h1>Hi people</h1>
        <h1>Hi people</h1>
        <h1>Hi people</h1>
        <h1>Hi people</h1>
        <h1>Hi people</h1>
        <h1>Hi people</h1>
        <h1>Hi people</h1>
        <h1>Hi people</h1>
        <h1>Hi people</h1>
        <h1>Hi people</h1>
        <h1>Hi people</h1>
        <h1>Hi people</h1>
        <h1>Hi people</h1>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <code>My code here</code>
        <pre>My pre here</pre>
        <button type="button" className="btn btn-primary">Hello</button>
        <Link to="/page-2/">Go to page 2</Link>
      </Container>
  </div>

export default IndexPage