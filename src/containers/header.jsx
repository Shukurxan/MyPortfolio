import React, { Component } from 'react';
import Nav from '../components/nav';
import Nav1 from '../components/nav1';

export default class header extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Nav1 />
      </div>
    )
  }
}

