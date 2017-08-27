import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.styl'

// var last_known_scroll_position = 0;
// var ticking = false;

// function doSomething(scroll_pos) {
//   console.log(scroll_pos)
// }

// window.addEventListener('scroll', function(e) {
//   last_known_scroll_position = window.scrollY;
//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       doSomething(last_known_scroll_position);
//       ticking = false;
//     });
//   }
//   ticking = true;
// });

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="several levels"
      meta={[
        { name: 'description', content: 'web and app development' },
        { name: 'keywords', content: 'several levels, web, app, development' },
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
