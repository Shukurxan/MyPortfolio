import React, { Component } from 'react';
import '../css/foot.css';

export default class foot extends Component {
  render() {
    return (
      <div id='footbg' className='fixed-bottom'>
        <hr className='border-warning' />
        <div className='d-flex justify-content-between ps-5 pe-5'>
            <div>
                <p id='p'>© Copyright iPortfolio</p>
                <p id='p'>Designed by Shukurxan</p>
            </div>
            <div>
                <p id='p'>Social medias</p>
                <div className='d-flex justify-content-between'>
                    <a href="https://www.telegram.me/kali_pro"><i class="fa-brands fa-telegram fs-2"></i></a>
                    <a href="https://www.instagram.com/shukurxan777"><i class="fa-brands fa-instagram fs-2 text-danger"></i></a>
                    <a href="https://www.twitter.com/shukurxan777"><i class="fa-brands fa-twitter fs-2"></i></a>
                    <a href="https://uz.linkedin.com/in/shukurulloh-abduqayumov-6a77a8250?trk=people_directory"><i class="fa-brands fa-linkedin-in fs-2"></i></a>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
