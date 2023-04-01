import React, { Component } from 'react';
import '../css/portfolio.css';
import '../js/portfolio.js';

export default class portfolio extends Component {
  render() {
    return (
        <div className='p-3'>
            <div id='port-div'>
                <h3>Portfolio</h3>
                <hr />
            </div>
            <div class="container">
                <div class="row">

                <div align="center">
                    <button class="btn btn-default filter-button" data-filter="all">All</button>
                    <button class="btn btn-default filter-button" data-filter="hdpe">App</button>
                    <button class="btn btn-default filter-button" data-filter="sprinkle">Card</button>
                    <button class="btn btn-default filter-button" data-filter="spray">Web</button>
                </div>
                <br/>
                    <div class="gallery_product col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 filter hdpe">
                        <img src="" class="img-fluid" />
                    </div>

                    <div class="gallery_product col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 filter sprinkle">
                        <img src="" class="img-fluid" />
                    </div>

                    <div class="gallery_product col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 filter hdpe">
                        <img src="" class="img-fluid" />
                    </div>

                    <div id='img-div' class="gallery_product col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 filter spray">
                        <div className='position-relative'>
                            <img src="assets/image_2023-03-29_15-38-28.png" class="img-fluid" />
                            <div id="overlay" className='row d-flex justify-content-between'>
                                <div className='col-6'>
                                    <span id='port-link' className='d-block text-center' data-bs-target="#exampleModalToggle" data-bs-toggle="modal"><i class="fa-solid fa-plus"></i></span>
                                </div>
                                <div className='col-6 border-start border-white'>
                                    <a id='port-link' className='d-block text-center' href="https://fastidious-taffy-917333.netlify.app"><i class="fa-solid fa-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade w-100 modal-lg mt-5" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                        <div id='web-img' class="modal-dialog modal-dialog-centered"></div>
                    </div>

                    <div class="gallery_product col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 filter sprinkle">
                        <img src="" class="img-fluid" />
                    </div>

                    <div id='img-div' class="gallery_product col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 filter spray">
                        <div className='position-relative'>
                            <img src="assets/image_2023-03-31_21-58-25.png" class="img-fluid" />
                            <div id="overlay" className='row d-flex justify-content-between'>
                                <div className='col-6'>
                                    <span id='port-link' className='d-block text-center' data-bs-target="#exampleModalToggle1" data-bs-toggle="modal"><i class="fa-solid fa-plus"></i></span>
                                </div>
                                <div className='col-6 border-start border-white'>
                                    <a id='port-link' className='d-block text-center' href="https://helpful-gecko-348301.netlify.app"><i class="fa-solid fa-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade w-100 modal-lg mt-5" id="exampleModalToggle1" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                        <div id='web-img1' class="modal-dialog modal-dialog-centered"></div>
                    </div>

                    <div class="gallery_product col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 filter hdpe">
                        <img src="" class="img-fluid" />
                    </div>

                    <div class="gallery_product col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 filter spray">
                        <img src="" class="img-fluid" />
                    </div>

                    <div class="gallery_product col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 filter sprinkle">
                        <img src="" class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
