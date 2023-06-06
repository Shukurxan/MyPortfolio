import React, { Component } from 'react';
import '../css/resume.css';

export default class resume extends Component {
  render() {
    return (
        <section id="resume" class="resume">
            <div class="p-3">
            <div id='rsdiv'>
                <h3>Resume</h3>
                <hr />
            </div>

                <div class="row">
                    <div class="col-lg-6" data-aos="fade-up">
                    <h3 class="resume-title">My Education</h3>
                        <div class="resume-item pb-0">
                            <h5>Microsoft Office</h5>
                            <p>In 2019 I completed 2 months training course on Microsoft Office software and now I have good experience</p>
                            <ul className='list-unstyled'>
                                <li><i class="fa-solid fa-check-double text-danger"></i> WORD</li>
                                <li><i class="fa-solid fa-check-double text-danger"></i> EXCEL</li>
                                <li><i class="fa-solid fa-check-double text-danger"></i> POWER POINT</li>
                            </ul>
                        </div>

                        <div class="resume-item">
                            <h4>Frontend</h4>
                            <h5>2021 - 2022</h5>
                            <p><em>IT EDU | Education center | Kokand</em></p>
                            <ul className='list-unstyled'>
                                <li><i class="fa-solid fa-check-double text-danger"></i> HTML 5</li>
                                <li><i class="fa-solid fa-check-double text-danger"></i> CSS 3</li>
                                <li><i class="fa-solid fa-check-double text-danger"></i> SASS</li>
                                <li><i class="fa-solid fa-check-double text-danger"></i> BOOTSTRAP</li>
                                <li><i class="fa-solid fa-check-double text-danger"></i> GIT HUB</li>
                                <li><i class="fa-solid fa-check-double text-danger"></i> JAVA SCRIPT</li>
                                <li><i class="fa-solid fa-check-double text-danger"></i> JQUERRY</li>
                                <li><i class="fa-solid fa-check-double text-danger"></i> REACT JS</li>
                            </ul>
                        </div>
                        <div class="resume-item">
                            <h4>Backend</h4>
                            <h5>2022 - 2023</h5>
                            <p><em>IT EDU | Education center | Kokand</em></p>
                            <ul className='list-unstyled'>
                                <li><i class="fa-solid fa-check-double text-danger"></i> PHP</li>
                                <li><i class="fa-solid fa-check-double text-danger"></i> TELEGRAM BOT</li>
                                <li><i class="fa-solid fa-check-double text-danger"></i> LARAVEL</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    <h3 class="resume-title">My Experience</h3>
                        <div class="resume-item">
                            <h5>1 year experience in computer services in Microsoft office</h5>
                            <h5>2021 - 2022</h5>
                            <p><em>Experion, Kokand</em></p>
                            <ul className='list-unstyled'>
                                <li><i class="fa-solid fa-check-double text-danger"></i> Preparation of data sheets for work and study in Microsoft Word, preparation of various applications, etc</li>
                                <li><i class="fa-solid fa-check-double text-danger"></i> Creating tables, charts, formulas and more in Microsoft Excel</li>
                                <li><i class="fa-solid fa-check-double text-danger"></i> Creating slides in microsoft point and etc</li>
                            </ul>
                        </div>
                        <div class="resume-item">
                            <h5>Currently a web programming teacher at IT EDU Education Center</h5>
                            <h5>Since 2022, November</h5>
                            <ul className='list-unstyled'>
                                <li><i class="fa-solid fa-check-double text-danger"></i> Teaching how to create websites</li>
                                <li><i class="fa-solid fa-check-double text-danger"></i> Teaching API, CRUD system</li>
                                <li><i class="fa-solid fa-check-double text-danger"></i> And teaching how to test a website etc.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
  }
}
