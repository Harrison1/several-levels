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

// {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
// {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
// {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
// {rel: 'manifest', href: '/manifest.json' },
// {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
