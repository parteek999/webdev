import React, { Component } from 'react'
import AOS from 'aos'

import './css/aos.css'
import './css/bootstrap.min.css'
import './css/bootstrap-select.min.css'
import './css/font-awesome.min.css'
import './css/slick.css'
import './css/style.css'


function Windex() {

  AOS.init();

   return (

      <div>
         <header>
            <div className="container">
               <nav className="navbar navbar-expand-md navbar-dark p-0">

                  <a className="navbar-brand" href="index.html">
                     <img className="logo" src='./img/logo.png' alt="img" />
                  </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav">
                     <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-end" id="nav">
                     <ul className="navbar-nav">
                        <li className="nav-item">
                           <a className="nav-link active" href="#">Our Work</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#">How we do it</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#">Services</a>
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
         </header>
         <div id="wrapper">
            <section className="main-banner section">
               <div className="mob-bg">
                  <div className="arrow-img-layer">
                     <div className="container">
                        <div className="banner-caption">
                           <div className="heading-grp">
                              <h2 data-aos="fade-up" data-aos-duration="400">Your Story Our Development<span className="yellow-color">.</span></h2>
                           </div>
                           <div className="main-info-row">
                              <div className="info-blk" data-aos="fade-up" data-aos-duration="300">
                                 <p>200</p>
                                 <h4>Clients</h4>
                              </div>
                              <div className="info-blk" data-aos="fade-up" data-aos-duration="300">
                                 <p>200</p>
                                 <h4>Upwork</h4>
                              </div>
                              <div className="info-blk" data-aos="fade-up" data-aos-duration="300">
                                 <p>200</p>
                                 <h4>Employee</h4>
                              </div>
                              <div className="info-blk" data-aos="fade-up" data-aos-duration="300">
                                 <p>200</p>
                                 <h4>Apps & Websites</h4>
                              </div>
                           </div>
                           <div className="row">
                              <div className="col-md-7">
                                 <p className="p16-dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                 <div className="getfree-qot-blk marginT34">
                                    <a className="btn-dark btn float-left" href="javascript://">GET FREE QUOTE</a>
                                    <a className="user-icon notification" href="javascript://">
                                    </a>
                                 </div>
                              </div>
                              <div className="col-md-5">
                                 <div className="help-blk">
                                    <div className="text-right">
                                       <p>Hi! Looking for help?</p>
                                       <div className="fig-blk">
                                          <img src="./img/query-img.png" alt="img" />
                                       </div>
                                       <div className="query-input">
                                          <input type="text" name="" placeholder="Type your querries here" />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="section brands-section white-section section-padding-top">
               <div className="container">
                  <div className="heading-grp main-heading-spacing">
                     <h2 className="mb-3">Big brands love working with us<span className="yellow-color">.</span></h2>
                     <p className="p16-dark">By choosing the best services suitable for your story, we take things to next level</p>
                  </div>
                  <div className="row">
                     <div className="col-md-3 col-6">
                        <div className="fig-blk" data-aos="fade-up" data-aos-duration="300">
                           <img className="img-fluid" src="./img/b1.png" alt="img" />
                        </div>
                     </div>
                     <div className="col-md-3 col-6">
                        <div className="fig-blk" data-aos="fade-up" data-aos-duration="600">
                           <img className="img-fluid" src="./img/b2.png" alt="img" />
                        </div>
                     </div>
                     <div className="col-md-3 col-6">
                        <div className="fig-blk" data-aos="fade-up" data-aos-duration="900">
                           <img className="img-fluid" src="./img/b3.png" alt="img" />
                        </div>
                     </div>
                     <div className="col-md-3 col-6">
                        <div className="fig-blk" data-aos="fade-up" data-aos-duration="1200">
                           <img className="img-fluid" src="./img/b4.png" alt="img" />
                        </div>
                     </div>
                     <div className="col-md-3 col-6">
                        <div className="fig-blk" data-aos="fade-up" data-aos-duration="300">
                           <img className="img-fluid" src="./img/b5.png" alt="img" />
                        </div>
                     </div>
                     <div className="col-md-3 col-6">
                        <div className="fig-blk" data-aos="fade-up" data-aos-duration="600">
                           <img className="img-fluid" src="./img/b6.png" alt="img" />
                        </div>
                     </div>
                     <div className="col-md-3 col-6">
                        <div className="fig-blk" data-aos="fade-up" data-aos-duration="900">
                           <img className="img-fluid" src="./img/b7.png" alt="img" />
                        </div>
                     </div>
                     <div className="col-md-3 col-6">
                        <div className="fig-blk" data-aos="fade-up" data-aos-duration="1200">
                           <img className="img-fluid" src="./img/b4.png" alt="img" />
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="section stories-section section-padding-top section-padding-bottom">
               <div className="container">
                  <div className="heading-grp main-heading-spacing">
                     <h2 className="mb-3">We focus on your stories<span className="yellow-color">.</span></h2>
                     <p className="p16-dark">By choosing the best services suitable for your story, we take things to next level</p>
                  </div>
                  <div className="multiple-items">
                     <div className="item">
                        <p className="count-top">01</p>
                        <div className="fig-blk">
                           <img src="./img/wd.png" alt="img" />
                        </div>
                        <div className="slide-content">
                           <h4>Web<br /> Designing</h4>
                           <div className="on-hover-layer">
                              <p>By choosing the best services suitable for your story, we take things to next level</p>
                              <ul className="ul-style">
                                 <li>Website Designing</li>
                                 <li>Content writting</li>
                              </ul>
                           </div>
                           <a className="learn-more-btn" href="javascript://">Learn more</a>
                        </div>
                        <p className="count-bottom">01</p>
                     </div>
                     <div className="item">
                        <p className="count-top">02</p>
                        <div className="fig-blk">
                           <img src="./img/android.png" alt="img" />
                           <img src="./img/apple.png" alt="img" />
                        </div>
                        <div className="slide-content">
                           <h4>IOS/Android<br /> Development</h4>
                           <div className="on-hover-layer">
                              <p>By choosing the best services suitable for your story, we take things to next level</p>
                              <ul className="ul-style">
                                 <li>Website Designing</li>
                                 <li>Content writting</li>
                              </ul>
                           </div>
                           <a className="learn-more-btn" href="javascript://">Learn more</a>
                        </div>
                        <p className="count-bottom">02</p>
                     </div>
                     <div className="item">
                        <p className="count-top">03</p>
                        <div className="fig-blk">
                           <img src="./img/diamond.png" alt="img" />
                        </div>
                        <div className="slide-content">
                           <h4>UI/UX<br /> Designing</h4>
                           <div className="on-hover-layer">
                              <p>By choosing the best services suitable for your story, we take things to next level</p>
                              <ul className="ul-style">
                                 <li>Website Designing</li>
                                 <li>Content writting</li>
                              </ul>
                           </div>
                           <a className="learn-more-btn" href="javascript://">Learn more</a>
                        </div>
                        <p className="count-bottom">03</p>
                     </div>
                     <div className="item">
                        <p className="count-top">04</p>
                        <div className="fig-blk">
                           <img src="./img/setting.png" alt="img" />
                        </div>
                        <div className="slide-content">
                           <h4>Web<br /> Development</h4>
                           <div className="on-hover-layer">
                              <p>By choosing the best services suitable for your story, we take things to next level</p>
                              <ul className="ul-style">
                                 <li>Website Designing</li>
                                 <li>Content writting</li>
                              </ul>
                           </div>
                           <a className="learn-more-btn" href="javascript://">Learn more</a>
                        </div>
                        <p className="count-bottom">04</p>
                     </div>
                     <div className="item">
                        <p className="count-top">05</p>
                        <div className="fig-blk">
                           <img src="./img/wd.png" alt="img" />
                        </div>
                        <div className="slide-content">
                           <h4>Quality<br /> Assurance</h4>
                           <div className="on-hover-layer">
                              <p>By choosing the best services suitable for your story, we take things to next level</p>
                              <ul className="ul-style">
                                 <li>Website Designing</li>
                                 <li>Content writting</li>
                              </ul>
                           </div>
                           <a className="learn-more-btn" href="javascript://">Learn more</a>
                        </div>
                        <p className="count-bottom">05</p>
                     </div>
                  </div>
               </div>
            </section>
            <section className="section success-section white-section section-padding-top section-padding-bottom">
               <div className="container">
                  <div className="heading-grp main-heading-spacing">
                     <h2 className="mb-3">These tasted success with us<span className="yellow-color">.</span></h2>
                  </div>
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="row">
                           <div className="col-md-6 order-md-2">
                              <div className="fig-blk">
                                 <img className="img-fluid" src="./img/dashboard-mob.png" alt="img" />
                              </div>
                           </div>
                           <div className="col-md-6 order-md-1">
                              <div className="success-blk" data-aos="fade-up" data-aos-duration="400">
                                 <div className="heading-grp-2 text-left">
                                    <h4>Fit Bit Amazon</h4>
                                    <p>Android/IOS</p>
                                 </div>
                                 <ul className="ul-style">
                                    <li>Website Designing</li>
                                    <li>Content writting</li>
                                 </ul>
                                 <p className="p12-light text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry which is great.</p>
                                 <ul className="ul-style">
                                    <li>Website Designing</li>
                                    <li>Content writting</li>
                                 </ul>
                                 <p className="p12-light text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry which is great.</p>
                                 <div className="mt-3 text-left">
                                    <a className="learn-more-btn" href="javascript://" tabindex="0">Learn more</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="row">
                           <div className="col-md-6 order-md-2">
                              <div className="fig-blk">
                                 <img className="img-fluid" src="./img/dashboard-mob.png" alt="img" />
                              </div>
                           </div>
                           <div className="col-md-6 order-md-1">
                              <div className="success-blk" data-aos="fade-up" data-aos-duration="800">
                                 <div className="heading-grp-2 text-left">
                                    <h4>Uber Eats</h4>
                                    <p>Android/IOS</p>
                                 </div>
                                 <ul className="ul-style">
                                    <li>Website Designing</li>
                                    <li>Content writting</li>
                                 </ul>
                                 <p className="p12-light text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry which is great.</p>
                                 <ul className="ul-style">
                                    <li>Website Designing</li>
                                    <li>Content writting</li>
                                 </ul>
                                 <p className="p12-light text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry which is great.</p>
                                 <div className="mt-3 text-left">
                                    <a className="learn-more-btn" href="javascript://" tabindex="0">Learn more</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="section checkout-section section-margin-top">
               <div className="container">
                  <div className="heading-grp main-heading-spacing">
                     <h2 className="mb-3">Checkout how things get to you<span className="yellow-color">.</span></h2>
                     <p className="p16-dark">By choosing the best services suitable for your story, we take things to next level</p>
                  </div>
                  <div className="out-container-right">
                     <div className="fig-blk">
                        <img className="img-fluid" src="./img/design.png" alt="img" />
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-md-6 order-md-1">
                        <p className="p14-dark mt-5" data-aos="fade-up" data-aos-duration="400">
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          </p>
                        <ul className="ul-style mt-5" data-aos="fade-up" data-aos-duration="400">
                           <li>Requirement Gathering</li>
                           <li>Graphics & UI/UX Designing</li>
                           <li>Mobile / Web Development</li>
                           <li>Deployment</li>
                           <li>Social Media Marketing</li>
                           <li>Maintenance & Support</li>
                        </ul>
                        <div className="mt-5 text-left">
                           <a className="learn-more-btn" href="javascript://" tabindex="0">Learn more</a>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="section owners-section">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-md-6 pr-0">
                        <div className="owner-blk">
                           <div className="fig-blk">
                              <img className="img-fluid" src="./img/ceo1.png" alt="img" />
                           </div>
                           <div className="img-content" data-aos="fade-up" data-aos-duration="400">
                              <div className="name-designation">
                                 <h5>Mr. Richard Parker</h5>
                                 <p className="designation">CEO at Clark BEE</p>
                              </div>
                              <p className="p14">Dev Story has been a great journey for  me dummy text of the printing and typesetting industry Lorem Ipsum has Dev Story has been a great journey for  me dummy text of the printing and typesetting industry </p>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-6 pl-0">
                        <div className="owner-blk">
                           <div className="fig-blk">
                              <img className="img-fluid" src="./img/ceo2.png" alt="img" />
                           </div>
                           <div className="img-content" data-aos="fade-up" data-aos-duration="800">
                              <div className="name-designation">
                                 <h5>Mr. Richard Parker</h5>
                                 <p className="designation">CEO at Clark BEE</p>
                              </div>
                              <p className="p14">Dev Story has been a great journey for  me dummy text of the printing and typesetting industry Lorem Ipsum has Dev Story has been a great journey for  me dummy text of the printing and typesetting industry </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="section estimation-section">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="fig-blk">
                           <img className="img-fluid" src="./img/estimate-img.png" alt="img" />
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="heading-grp main-heading-spacing text-right">
                           <h2 className="mb-0">Worried about cost<span className="yellow-color">?</span></h2>
                           <h2 className="mb-5">Get free estimation<span className="yellow-color">.</span></h2>
                           <p className="p14-dark text-right" data-aos="fade-up" data-aos-duration="400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and </p>
                           <ul className="ul-style bullets-right mt-5" data-aos="fade-up" data-aos-duration="400">
                              <li>Requirement Gathering</li>
                              <li>Graphics & UI/UX Designing</li>
                              <li>Mobile / Web Development</li>
                              <li>Deployment</li>
                           </ul>
                           <div className="mt-5 mr-4 text-right btn-blk">
                              <a className="learn-more-btn" href="javascript://" tabindex="0">Get Estimation</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
         <footer>
            <div className="container">
               <div className="row">
                  <div className="col-md-4 col-lg-3">
                     <div className="logo-footer">
                        <a href="index.html">
                           <img src="./img/logo-footer.png" alt="img" />
                        </a>
                     </div>
                     <div className="social-media">
                        <ul>
                           <li> <a className="fa fa-facebook" aria-hidden="true" href="javascript://"></a> </li>
                           <li> <a className="fa fa-twitter" aria-hidden="true" href="javascript://"></a> </li>
                           <li> <a className="fa fa-instagram" aria-hidden="true" href="javascript://"></a> </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                     <div className="contact-info">
                        <p className="p14-dark-2 mb-3">+98 5721912323 +91 2334782819
                        DevStory@info.com
             </p>
                        <p className="p14-dark-2">Arth Prakash Building, Sector - 29D,<br /> Chandigarh 160029</p>
                     </div>
                  </div>
                  <div className="col-md-4 col-lg-5">
                     <h5 className="footer-heading">Links</h5>
                     <div className="footer-links">
                        <ul>
                           <li> <a href="javascript://">Services</a> </li>
                           <li> <a href="javascript://">Live Support</a> </li>
                        </ul>
                        <ul>
                           <li> <a href="javascript://">Blog</a> </li>
                           <li> <a href="javascript://">How we do it</a> </li>
                        </ul>
                        <ul>
                           <li> <a href="javascript://">Support</a> </li>
                           <li> <a href="javascript://">Get Free Quote</a> </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </footer>

      </div>
   
   )
}

export default Windex


// npm aos module
