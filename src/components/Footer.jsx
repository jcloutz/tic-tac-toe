import React from 'react'

export default () => (
  <div>
    <ul className='footer__links'>
      <li className='footer__link-item'>
        <a href='https://github.com/jcloutz' className='footer__link'>
          <i className='footer__link-icon ion-logo-github'></i>
          <span className='footer__link-text'>Github</span>
        </a>
      </li>
      <li className='footer__link-item'>
        <a href='https://twitter.com/elevenStx' className='footer__link'>
          <i className='footer__link-icon ion-logo-twitter'></i>
          <span className='footer__link-text'>Twitter</span>
        </a>
      </li>
      <li className='footer__link-item'>
        <a href='http://codepen.io/elemental-shift/' className='footer__link'>
          <i className='footer__link-icon ion-logo-codepen'></i>
          <span className='footer__link-text'>Codepen</span>
        </a>
      </li>
      <li className='footer__link-item'>
        <a href='http://www.freecodecamp.com/jcloutz' className='footer__link'>
          <i className='footer__link-icon ion-ios-flame'></i>
          <span className='footer__link-text'>freeCodeCamp</span>
        </a>
      </li>
      <li className='footer__link-item'>
        <a href='https://www.linkedin.com/in/jeremy-cloutier-68a25031' className='footer__link'>
          <i className='footer__link-icon ion-logo-linkedin'></i>
          <span className='footer__link-text'>LinkedIn</span>
        </a>
      </li>
    </ul>
    <a href='https://github.com/jcloutz/fcc-tic-tac-toe' className='footer__source-link'>View source on github</a>
  </div>

)
