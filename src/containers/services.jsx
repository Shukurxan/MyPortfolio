import React, { Component } from 'react';
import '../css/services.css';

export default class services extends Component {
  render() {
    return (
      <div id='servi' className='p-3'>
        <div id='ser-div'>
          <h3>Services</h3>
          <hr />
        </div>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-3'>
            <h4>Hello there</h4>
            <p className='mt-3'>I am a web developer and I invite you to use my services. I provide services to improve, update and make your website more user-friendly. I offer you the following services:</p>
            <ul className='list-unstyled mt-5'>
              <li><i class="fa-solid fa-check-double text-danger"></i> Createing your website Update and change</li>
              <li><i class="fa-solid fa-check-double text-danger"></i> Providing SEO services for your site</li>
              <li><i class="fa-solid fa-check-double text-danger"></i> Creating different types of records for your site</li>
              <li><i class="fa-solid fa-check-double text-danger"></i> Buying hosting and domain name</li>
            </ul>
            <p className='mt-5'>I am ready to help you recommend your services to others, which will help you grow your business.
            Email me if you have any further questions.</p>
          </div>
          <div className='d-none d-lg-block col-lg-6 col-xl-6 mt-3'>
            <img className='img-fluid w-100 rounded' src="assets/services1.webp" alt="" />
          </div>
        </div>
      </div>
    )
  }
}
