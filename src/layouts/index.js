import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.styl'

const Header = () =>
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          several levels
        </Link>
      </h1>
    </div>
  </div>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="several levels"
      meta={[
        { name: 'description', content: 'web and app development' },
        { name: 'keywords', content: 'several levels, web, app, development' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
