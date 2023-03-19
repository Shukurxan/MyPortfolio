import React, { Component } from 'react';
import Nav1 from '../components/nav1';
import Foot from '../components/foot';
export default class header extends Component {
  render() {
    return (
      <div>
        <Nav1 />
        <Foot />
      </div>
    )
  }
}

