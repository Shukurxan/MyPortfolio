import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/nav.css';
import '../js/nav.js';



function nav() {
  return(
    <div id='bg-col' className='navbar shadow-sm sticky-top'>
      <div className='container-fluid'>
        <div>
          <h1 id='anim-color' className='text-warning'>My Portfolio</h1>
        </div>
        <div>
          <ul className='list-unstyled d-flex mt-3'>
            <li id='menu-none' className='ms-3'>
              <a href="/" id='navlink' className='text-decoration-none'>Home</a>
            </li>
            <li id='menu-none' className='ms-3'>
              <NavLink id='navlink' className='text-decoration-none' to="/about">About</NavLink>
            </li>
            <li id='menu-none' className='ms-3'>
              <NavLink id='navlink' className='text-decoration-none' to="/skills">Skills</NavLink>
            </li>
            <li id='menu-none' className='ms-3'>
              <NavLink id='navlink' className='text-decoration-none' to="/resume">Resume</NavLink>
            </li>
            <li id='menu-none' className='ms-3'>
              <a href="/portfolio" id='navlink' className='text-decoration-none'>Portfolio</a>
            </li>
            <li id='menu-none' className='ms-3'>
              <NavLink id='navlink' className='text-decoration-none' to="/services">Services</NavLink>
            </li>
            <li id='menu-none' className='ms-3'>
              <NavLink id='navlink' className='text-decoration-none' to="/contact">Contact</NavLink>
            </li>
            {/* <select id='select' className='ms-3 text-warning' onChange={countryHandler(this.value)}>
              <option value="/">EN</option>
              <option value=""><a href="/">RU</a></option>
              <option value="contact">UZ</option>
            </select> */}

            <span id='menu-bar' className='text-warning ms-3 fs-5' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-bars"></i></span>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title text-warning" id="offcanvasRightLabel">Menu</h5>
                <button type="button" class="btn-close bg-warning" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div id='bar-body' class="offcanvas-body">
                <ul id='bar-ul' className='list-unstyled mt-5'>
                  <li className='ms-3' data-bs-dismiss="offcanvas">
                    <a href="/" id='navlink' className='text-decoration-none'>Home</a>
                  </li>
                  <li className='ms-3' data-bs-dismiss="offcanvas">
                    <NavLink id='navlink' className='text-decoration-none' to="/about">About</NavLink>
                  </li>
                  <li className='ms-3' data-bs-dismiss="offcanvas">
                    <NavLink id='navlink' className='text-decoration-none' to="/skills">Skills</NavLink>
                  </li>
                  <li className='ms-3' data-bs-dismiss="offcanvas">
                    <NavLink id='navlink' className='text-decoration-none' to="/resume">Resume</NavLink>
                  </li>
                  <li className='ms-3' data-bs-dismiss="offcanvas">
                    <NavLink id='navlink' className='text-decoration-none' to="/portfolio">Portfolio</NavLink>
                  </li>
                  <li className='ms-3' data-bs-dismiss="offcanvas">
                    <NavLink id='navlink' className='text-decoration-none' to="/services">Services</NavLink>
                  </li>
                  <li className='ms-3' data-bs-dismiss="offcanvas">
                    <NavLink id='navlink' className='text-decoration-none' to="/contact">Contact</NavLink>
                  </li>
                  {/* <select id='bar-select' className='text-warning'>
                    <option value=""><a href="">EN</a></option>
                    <option value=""><a href="#">RU</a></option>
                    <option value=""><a href="#">UZ</a></option>
                  </select> */}
                </ul>
              </div>
            </div>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default nav