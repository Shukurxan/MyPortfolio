import React, { Component } from 'react';
import '../css/contact.css';

export class contact extends Component {
  render() {
    return (
      <div className='p-3'>
        <div id='codiv'>
          <h3>Contact me</h3>
          <hr />
        </div>
        <section id="contact" class="contact">
          <div class="container">

            <div class="row" data-aos="fade-in">

              <div class="col-lg-5 d-flex align-items-stretch">
                <div class="info">
                  <div class="address">
                    <i class="fa-solid fa-location-dot"></i>
                    <h4>Location:</h4>
                    <p>Uzbekistan, Kokand city</p>
                  </div>

                  <div class="email">
                    <i class="fa-regular fa-envelope"></i>
                    <h4>Email:</h4>
                    <p>shukurxandev@gmail.com</p>
                  </div>

                  <div class="phone">
                    <i class="fa-solid fa-mobile-screen-button"></i>
                    <h4>Call:</h4>
                    <p>+99894 000 8 333</p>
                  </div>
                </div>

              </div>

              <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form action="" method="" role="form" class="php-email-form">
                  <div class="row">
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                      <input name='name' type="text" class="form-control" placeholder="Name" aria-label="Name" />
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                      <input name='email' type="email" class="form-control" placeholder="Email" aria-label="Email" />
                    </div>
                  </div>
                  <div id='con-div' class="form-floating mt-3">
                    <textarea name='area' class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                    <label for="floatingTextarea2">Comments</label>
                  </div>
                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div class="text-center"><button name='btn' type="submit">Send Message</button></div>
                </form>
              </div>

            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default contact