import React, { Component } from 'react'
import '../css/nav.css';
import '../js/nav.js';

export default class nav extends Component {
  render() {
    return (
      <div className='navbar'>
          <div className='container-fluid'>
            <div>
              <h1 id='anim-color' className='text-warning'>My Portfolio</h1>
            </div>
            <div>
              <ul className='list-unstyled d-flex'>
                <a id='menu-none' className='text-decoration-none ms-3 text-warning' href=""><li>Home</li></a>
                <a id='menu-none' className='text-decoration-none ms-3 text-warning' href=""><li>About</li></a>
                <a id='menu-none' className='text-decoration-none ms-3 text-warning' href=""><li>Resume</li></a>
                <a id='menu-none' className='text-decoration-none ms-3 text-warning' href=""><li>Portfolio</li></a>
                <a id='menu-none' className='text-decoration-none ms-3 text-warning' href=""><li>Contact</li></a>
                <select id='select' className='ms-3 text-warning'>
                  <option value=""><a href="">EN</a></option>
                  <option value=""><a href="#">RU</a></option>
                  <option value=""><a href="#">UZ</a></option>
                </select>

                <span id='menu-bar' className='text-warning ms-3 fs-5' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-bars"></i></span>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title text-warning" id="offcanvasRightLabel">Menu</h5>
                    <button type="button" class="btn-close bg-warning" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div id='bar-body' class="offcanvas-body">
                    <ul id='bar-ul' className='list-unstyled mt-5'>
                      <a className='text-decoration-none text-warning' href=""><li>Home</li></a>
                      <a className='text-decoration-none text-warning' href=""><li>About</li></a>
                      <a className='text-decoration-none text-warning' href=""><li>Resume</li></a>
                      <a className='text-decoration-none text-warning' href=""><li>Portfolio</li></a>
                      <a className='text-decoration-none text-warning' href=""><li>Contact</li></a>
                      <select id='bar-select' className='text-warning'>
                        <option value=""><a href="">EN</a></option>
                        <option value=""><a href="#">RU</a></option>
                        <option value=""><a href="#">UZ</a></option>
                      </select>
                    </ul>
                  </div>
                </div>

              </ul>
            </div>
          </div>
      </div>
    )
  }
}
