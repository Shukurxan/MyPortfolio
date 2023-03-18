import React, { Component } from 'react'
import '../css/about.css';

export class about extends Component {
  render() {
    return (
      <div className='p-3'>
        <div id='abdiv1'>
          <h3>About me</h3>
          <hr />
        </div>
        <div className='mt-4 d-flex'>
          <div id='picdiv'>
            <img src="/assets/IMG_20221127_145241_192.jpg" alt="" />
          </div>
          <div id='indiv' className='ms-5'>
            <h3>UI/UX Designer & Web Developer.</h3>
            <p>Some information about me</p>
            <div>
              <div>
                <span className='text-white'><i class="fa-solid text-primary fa-chevron-right"></i> Birthday: <span className='ms-2' id='absp'>05 January 2001</span></span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about