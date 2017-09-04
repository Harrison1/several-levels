import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import {Helmet} from 'react-helmet'
import Navbar from '../components/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.styl'

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="several levels"
      meta={[
        { name: 'description', content: 'web and app development' },
        { name: 'keywords', content: 'several, levels, web, app, development, harrison, mcguire' },
        { charSet: 'utf-8'},
        { name: 'theme-color', content: '#27cfe6'}
      ]}
      link={[
        {rel: 'canonical', href: 'https://severallevels.io'}
      ]}
    />
    <Navbar />
    <div>
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper