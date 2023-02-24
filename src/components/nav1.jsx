import React, { Component } from 'react';
import '../css/nav1.css';
import '../js/nav1.js';

export default class nav1 extends Component {
  render() {
    return (
      <div class="d-inline-block">
        <h1 class="d-block">
          <span id='anim-write' class="typewrite text-warning d-block" data-period="2000" data-type='[ "Hi, Im Shukurkhan.", "I am Frontend Developer.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'>
              <span class="wrap"></span>
          </span>
        </h1>
      </div>
    )
  }
}
