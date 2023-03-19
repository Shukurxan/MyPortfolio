import React, { Component } from 'react'
import '../css/about.css';

export class about extends Component {
  render() {
    return (
      <div id='abdiv' className='p-3'>
        <div id='abdiv1'>
          <h3>About me</h3>
          <hr />
        </div>
        <div id='abdiv99' className='mt-4 d-flex'>
          <div id='picdiv'>
            <img src="/assets/IMG_20221127_145241_192.jpg" alt="" />
          </div>
          <div id='indiv'>
            <h3>UI/UX Designer & Web Developer.</h3>
            <p>Some information about me</p>
            <div id='abin'>
              <div>
                <span className='text-white'><i class="fa-solid text-primary fa-chevron-right"></i> Birthday: <span className='ms-2' id='absp'>05 January 2001</span></span><br />
                <span className='text-white'><i class="fa-solid text-primary fa-chevron-right"></i> Website: <span className='ms-2' id='absp'>https://creative-daffodil-f44511.netlify.app/</span></span><br />
                <span className='text-white'><i class="fa-solid text-primary fa-chevron-right"></i> Phone: <span className='ms-2' id='absp'>+998 94 000 8 333</span></span><br />
                <span className='text-white'><i class="fa-solid text-primary fa-chevron-right"></i> City: <span className='ms-2' id='absp'>Kokand city, Uzbekistan</span></span>
              </div>
              <div className='ms-lg-5'>
                <span className='text-white'><i class="fa-solid text-primary fa-chevron-right"></i> Age: <span className='ms-2' id='absp'>22</span></span><br />
                <span className='text-white'><i class="fa-solid text-primary fa-chevron-right"></i> Degree: <span className='ms-2' id='absp'>Junior</span></span><br />
                <span className='text-white'><i class="fa-solid text-primary fa-chevron-right"></i> Email: <span className='ms-2' id='absp'>shukurulloabduqayumov881@gmail.com</span></span><br />
                <span className='text-white'><i class="fa-solid text-primary fa-chevron-right"></i> Freelance: <span className='ms-2' id='absp'>Aviable</span></span><br />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about