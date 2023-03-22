import React, { Component } from 'react';
import '../css/skills.css';

export default class skills extends Component {
  render() {
    return (
        <div className='p-3'>
            <div id='skdiv'>
                <h3>Skills</h3>
                <hr />
            </div>
            <div className='mt-3'>
                <h4 className='text-center text-white'>On FrontEnd</h4>
            </div>
            <div className='row mt-5'>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                    <div class="container">
                        <div className='d-flex justify-content-between'>
                            <span className='text-white'>HTML</span>
                            <span className='text-white'>100%</span>
                        </div>
                        <div class="progress progress-striped">
                            <div class="progress-bar">
                            </div>                       
                        </div> 
                    </div>
                    <div class="container"> 
                        <div className='d-flex justify-content-between'>
                            <span className='text-white'>CSS</span>
                            <span className='text-white'>90%</span>
                        </div>  
                        <div class="progress progress-striped1">
                            <div class="progress-bar1">
                            </div>                       
                        </div>
                    </div>
                    <div class="container">
                        <div className='d-flex justify-content-between'>
                            <span className='text-white'>SASS</span>
                            <span className='text-white'>70%</span>
                        </div>
                        <div class="progress progress-striped2">
                            <div class="progress-bar2">
                            </div>                       
                        </div> 
                    </div>
                    <div class="container">
                        <div className='d-flex justify-content-between'>
                            <span className='text-white'>BOOTSTRAP</span>
                            <span className='text-white'>100%</span>
                        </div>
                        <div class="progress progress-striped3">
                            <div class="progress-bar3">
                            </div>                       
                        </div> 
                    </div>
                </div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                    <div class="container">
                        <div className='d-flex justify-content-between'>
                            <span className='text-white'>JAVASCRIPT</span>
                            <span className='text-white'>80%</span>
                        </div>
                        <div class="progress progress-striped4">
                            <div class="progress-bar4">
                            </div>                       
                        </div> 
                    </div>
                    <div class="container">
                        <div className='d-flex justify-content-between'>
                            <span className='text-white'>JQUERY</span>
                            <span className='text-white'>70%</span>
                        </div>
                        <div class="progress progress-striped5">
                            <div class="progress-bar5">
                            </div>                       
                        </div> 
                    </div>
                    <div class="container">
                        <div className='d-flex justify-content-between'>
                            <span className='text-white'>REACTJS</span>
                            <span className='text-white'>80%</span>
                        </div>
                        <div class="progress progress-striped6">
                            <div class="progress-bar6">
                            </div>                       
                        </div> 
                    </div>
                    <div class="container">
                        <div className='d-flex justify-content-between'>
                            <span className='text-white'>GITHUB</span>
                            <span className='text-white'>90%</span>
                        </div>
                        <div class="progress progress-striped7">
                            <div class="progress-bar7">
                            </div>                       
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
