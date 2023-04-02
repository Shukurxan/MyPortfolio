import React, { Component } from 'react';
import '../css/portfolio.css';
import '../js/portfolio.js';

export default class portfolio extends Component {
  render() {
    return (
            <div class="container mt-5">
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



            //new


    //         <section id="portfolio" class="portfolio section-bg">
    //   <div class="container">

    //     <div class="section-title">
    //       <h2>Portfolio</h2>
    //       <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    //     </div>

    //     <div class="row" data-aos="fade-up">
    //       <div class="col-lg-12 d-flex justify-content-center">
    //         <ul id="portfolio-flters">
    //           <li data-filter="*" class="filter-active">All</li>
    //           <li data-filter=".filter-app">App</li>
    //           <li data-filter=".filter-card">Card</li>
    //           <li data-filter=".filter-web">Web</li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

    //       <div class="col-lg-4 col-md-6 portfolio-item filter-app">
    //         <div class="portfolio-wrap">
    //           <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="" />
    //           <div class="portfolio-links">
    //             <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
    //             <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
    //           </div>
    //         </div>
    //       </div>

    //       <div class="col-lg-4 col-md-6 portfolio-item filter-web">
    //         <div class="portfolio-wrap">
    //           <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="" />
    //           <div class="portfolio-links">
    //             <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
    //             <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
    //           </div>
    //         </div>
    //       </div>

    //       <div class="col-lg-4 col-md-6 portfolio-item filter-app">
    //         <div class="portfolio-wrap">
    //           <img src="assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt="" />
    //           <div class="portfolio-links">
    //             <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 2"><i class="bx bx-plus"></i></a>
    //             <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
    //           </div>
    //         </div>
    //       </div>

    //       <div class="col-lg-4 col-md-6 portfolio-item filter-card">
    //         <div class="portfolio-wrap">
    //           <img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt="" />
    //           <div class="portfolio-links">
    //             <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 2"><i class="bx bx-plus"></i></a>
    //             <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
    //           </div>
    //         </div>
    //       </div>

    //       <div class="col-lg-4 col-md-6 portfolio-item filter-web">
    //         <div class="portfolio-wrap">
    //           <img src="assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt="" />
    //           <div class="portfolio-links">
    //             <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></a>
    //             <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
    //           </div>
    //         </div>
    //       </div>

    //       <div class="col-lg-4 col-md-6 portfolio-item filter-app">
    //         <div class="portfolio-wrap">
    //           <img src="assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt="" />
    //           <div class="portfolio-links">
    //             <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 3"><i class="bx bx-plus"></i></a>
    //             <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
    //           </div>
    //         </div>
    //       </div>

    //       <div class="col-lg-4 col-md-6 portfolio-item filter-card">
    //         <div class="portfolio-wrap">
    //           <img src="assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt="" />
    //           <div class="portfolio-links">
    //             <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 1"><i class="bx bx-plus"></i></a>
    //             <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
    //           </div>
    //         </div>
    //       </div>

    //       <div class="col-lg-4 col-md-6 portfolio-item filter-card">
    //         <div class="portfolio-wrap">
    //           <img src="assets/img/portfolio/portfolio-8.jpg" class="img-fluid" alt="" />
    //           <div class="portfolio-links">
    //             <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 3"><i class="bx bx-plus"></i></a>
    //             <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
    //           </div>
    //         </div>
    //       </div>

    //       <div class="col-lg-4 col-md-6 portfolio-item filter-web">
    //         <div class="portfolio-wrap">
    //           <img src="assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt="" />
    //           <div class="portfolio-links">
    //             <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
    //             <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
    //           </div>
    //         </div>
    //       </div>

    //     </div>

    //   </div>
    // </section>
    )
  }
}
