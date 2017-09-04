import React from 'react'
import Link from 'gatsby-link'
import Vivus from 'vivus'
import Tagline from '../components/Tagline'
import Header from '../components/Header'
import HeroText from '../components/HeroText'
import Container from '../components/utils/Container'
import Row from '../components/utils/Row'
import Col12 from '../components/utils/Col12'
import ColSM4 from '../components/utils/ColSM4'
import reactlogo from '../img/react-logo.svg'
import nodelogo from '../img/nodejs-logo.svg'
import wordpresslogo from '../img/wordpress-logo.svg'
import phplogo from '../img/php-logo.svg'
import shopifylogo from '../img/shopify-logo.svg'
import ioslogo from '../img/ios-logo.svg'
import androidlogo from '../img/android-logo.svg'

const IndexPage = () =>
  <div>
    <Header />
      <Container>
        <Row>
          <Col12>
            <h3 className="text-center intro-text">Hi, welcome to <span className="sl-font-color">several levels</span>. My name is Harrison McGuire and I am the founder and lead software developer. I'm dedicated to making excellent, performant, modern websites.</h3>
          </Col12>
        </Row>
        <hr />
        <h2 className="text-center f-300">The Modern Web is Built with JavaScript</h2>
        <p className="text-center sub-text mb-5">JavaScript has quickly taking over the web community with its versatility and vast range of powers</p> 
        <Row>
          <ColSM4>
            <svg xmlns="http://www.w3.org/2000/svg" className="svg-logo mx-auto" viewBox="0 0 630 630">
              <rect width="630" height="630" fill="#f7df1e"/>
              <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>
            </svg>
            <h3>JavaScript</h3>
            <p>The high-level programming language is extremely dynamic and powerful and I can make some magnificent software with JavaScript</p>
          </ColSM4>
          <ColSM4>
            <img src={ reactlogo } className="w-100 svg-logo-h" alt="react logo" />
            <h3>React</h3>
            <p>React is my preferred Javascript library. React’s flexibility and the component based structure makes it easy to work with while making extremely powerful apps.</p>
          </ColSM4>
          <ColSM4>
            <img src={ nodelogo } className="w-100 svg-logo-h" alt="nodejs logo" />
            <h3>NodeJS</h3>
            <p>NodeJS keeps my workflow in JavaScript and allows for apps to be built quickly and efficiently. Node is async by nature thus keeping sites running at optimal performance. </p>
          </ColSM4>
        </Row>
      </Container>

      <HeroText>
        <Container>
          <h1 className="f-300">several levels</h1>
          <h2 className="f-300">web and app development</h2>
          <h3 className="font-italic f-300">"I do things different striving for originality and modernity"</h3>
        </Container>
      </HeroText>

      <Container>
        <h2 className="text-center f-300">To Live and Breath With a CMS</h2>
        <p className="text-center sub-text mb-5">CMS's can make the bakend user experience incredible, but they can also add a lot of weight and unnecessary code to the project. I customize CMS themes to ensure great performance and user accessability</p> 
        <Row>
          <ColSM4>
            <div className="w-100 svg-logo-h">
              <img src={ wordpresslogo } className="svg-logo" alt="wordpress logo" />
            </div>
            <h3>WordPress</h3>
            <p>I make custom themes and plugins for the world's most popular CMS.</p>
          </ColSM4>
          <ColSM4>
            <div className="w-100 svg-logo-h d-flex">
              <img src={ phplogo } className="w-100 m-auto" alt="php logo" />
            </div>
            <h3>PHP</h3>
            <p>PHP is the backbone of most of the world's servers and it can be extremely poweful and efficient when used correctly</p>
          </ColSM4>
          <ColSM4>
            <img src={ shopifylogo } className="w-100 svg-logo-h" alt="shopify logo" />
            <h3>Shopify</h3>
            <p>Shopify is my preffered e-commerce platform. I customize themes and generate dynamic front facing stores.</p>
          </ColSM4>
        </Row>
      </Container>

      <HeroText>
        <Container>
          <h3 className="font-italic f-300">"having the world's information in your pocket is an incredible feat that takes unrelenting responsibility"</h3>
        </Container>
      </HeroText>

      <Container>
        <h2 className="text-center f-300">The World in Our Pocket</h2>
        <p className="text-center sub-text mb-5">app development can directly bring prodcuts to users' hands</p> 
        <Row>
          <ColSM4>
            <div className="w-100 svg-logo-h">
              <img src={ ioslogo } className="svg-logo" alt="ios logo" />
            </div>
            <h3>iOS</h3>
            <p>Swift is a lot of fun to make new and exciting apps for Apple's App Store</p>
          </ColSM4>
          <ColSM4>
            <div className="w-100 svg-logo-h d-flex">
              <img src={ androidlogo } className="w-100 m-auto svg-h-200" alt="android logo" />
            </div>
            <h3>Android</h3>
            <p>Android is the most popular phone in the world, let's put an app on the Play Store</p>
          </ColSM4>
        </Row>
      </Container>

      <HeroText>
        <Container>
          <div dangerouslySetInnerHTML={{__html: '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSduy4PiQModrzB5FWuYnNngsFVI27bMMQQnCdZ7SnDzAvfMdA/viewform?embedded=true" width="100%" height="1100" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>'}} />
        </Container>
      </HeroText>

      <Container>
        <Row>
          <ColSM4>
            <h2 className="text-center f-300">Founder</h2>
            <p className="text-center sub-text mb-5">Harrison McGuire</p>
          </ColSM4>
          <ColSM4>
            <h2 className="text-center f-300">Email</h2>
            <p className="text-center sub-text mb-5"><a href="mailto:harrison@severallevels.io">harrison@severallevels.io</a></p>
          </ColSM4>
          <ColSM4>
            <h2 className="text-center f-300">Location</h2>
            <p className="text-center sub-text mb-5">Boca Raton, FL</p>
          </ColSM4>
        </Row>
      </Container>
  </div>

export default IndexPage