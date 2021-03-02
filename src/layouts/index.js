import React from 'react'
import { Helmet } from 'react-helmet'
import appleIcon57 from '../favicons/apple-icon-57x57.png'
import appleIcon60 from '../favicons/apple-icon-60x60.png'
import appleIcon72 from '../favicons/apple-icon-72x72.png'
import appleIcon76 from '../favicons/apple-icon-76x76.png'
import appleIcon114 from '../favicons/apple-icon-114x114.png'
import appleIcon152 from '../favicons/apple-icon-152x152.png'
import appleIcon180 from '../favicons/apple-icon-180x180.png'
import androidChrome192 from '../favicons/android-chrome-192x192.png'
import favicon32 from '../favicons/favicon-32x32.png'
import favicon96 from '../favicons/favicon-96x96.png'
import favicon16 from '../favicons/favicon-16x16.png'

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="several levels"
      meta={[
        { name: 'description', content: 'several levels is a web and app development company dedicated to making excellent, performant, modern websites.' },
        { name: 'keywords', content: 'several, levels, web, app, development, harrison, mcguire' },
        { charSet: 'utf-8'},
        { name: 'theme-color', content: '#27cfe6'}
      ]}
      link={[
        { rel: 'apple-touch-icon', sizes: "57x57", href: appleIcon57 },
        { rel: 'apple-touch-icon', sizes: "60x60", href: appleIcon60 },
        { rel: 'apple-touch-icon', sizes: "72x72", href: appleIcon72 },
        { rel: 'apple-touch-icon', sizes: "76x76", href: appleIcon76 },
        { rel: 'apple-touch-icon', sizes: "114x114", href: appleIcon114 },
        { rel: 'apple-touch-icon', sizes: "120x120", href: appleIcon114 },
        { rel: 'apple-touch-icon', sizes: "144x144", href: appleIcon114 },
        { rel: 'apple-touch-icon', sizes: "152x152", href: appleIcon152 },
        { rel: 'apple-touch-icon', sizes: "180x180", href: appleIcon180 },
        { rel: 'icon', type: "image/png", sizes: "192x192", href: androidChrome192 },
        { rel: 'icon', type: "image/png", sizes: "32x32", href: favicon32 },
        { rel: 'icon', type: "image/png", sizes: "96x96", href: favicon96 },
        { rel: 'icon', type: "image/png", sizes: "16x16", href: favicon16 },
        { rel: 'canonical', href: 'https://severallevels.io'}
      ]}
    />
    {children()}
  </div>

export default TemplateWrapper
