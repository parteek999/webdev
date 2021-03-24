import React from 'react'
import './css/aos.css'
import './css/bootstrap.min.css'
import './css/bootstrap-select.min.css'
import './css/font-awesome.min.css'
import './css/slick.css'
import './css/style.css'
import AOS from 'aos'



function Wui_ux() {
    AOS.init();
    return (
        <div>
        <header>
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-dark p-0">
            
              <a className="navbar-brand" href="index.html">
                <img className="logo" src="./img/logo.png" alt="img" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav">
                <span className="navbar-toggler-icon" />
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
          <section className="section inner-page-banner">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5 order-lg-2">
                  <div className="fig-blk banner-img-5">
                    <img className="img-fluid" src="./img/banner05.png" alt="img" />
                  </div>
                </div>
                <div className="col-lg-7 order-lg-1">
                  <div className="heading-grp">
                    <h2 className="mb-3" data-aos="fade-up" data-aos-duration={400}>
                      Imagine creativity<br /> beyond your<br /> imagination
                      <span className="yellow-color">.</span>
                    </h2>
                    <p className="p16-dark">By choosing the best services suitable for your story, we take things to next level</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="design-section section-padding-top section-padding-bottom  white-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-12">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="design-blk" data-aos="fade-up" data-aos-duration={200}>
                        <figure className="black-border">
                          <span> <img src="./img/ux-ux.png" alt="img" /></span>
                        </figure>
                        <figcaption>UI/UX</figcaption>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="design-blk" data-aos="fade-up" data-aos-duration={400}>
                        <figure className="yellow-border">
                          <span> <img src="./img/logo-design.png" alt="img" /></span>
                        </figure>
                        <figcaption>LOGOS</figcaption>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="design-blk" data-aos="fade-up" data-aos-duration={600}>
                        <figure className="black-border">
                          <span> <img src="./img/3d-graphic.png" alt="img" /></span>
                        </figure>
                        <figcaption>3D GRAPHICS</figcaption>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="design-blk" data-aos="fade-up" data-aos-duration={800}>
                        <figure className="yellow-border">
                          <span> <img src="./img/brochure.png" alt="img" /></span>
                        </figure>
                        <figcaption>BROCHURE</figcaption>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="design-blk" data-aos="fade-up" data-aos-duration={1000}>
                        <figure className="black-border">
                          <span> <img src="./img/catelogue.png" alt="img" /></span>
                        </figure>
                        <figcaption>CATALOGUE</figcaption>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7  mx-auto">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="design-blk" data-aos="fade-up" data-aos-duration={300}>
                        <figure className="yellow-border">
                          <span> <img src="./img/banner.png" alt="img" /></span>
                        </figure>
                        <figcaption>BANNER</figcaption>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="design-blk" data-aos="fade-up" data-aos-duration={600}>
                        <figure className="black-border">
                          <span> <img src="./img/flyer.png" alt="img" /></span>
                        </figure>
                        <figcaption>FLYER</figcaption>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="design-blk" data-aos="fade-up" data-aos-duration={900}>
                        <figure className="yellow-border">
                          <span> <img src="./img/bussiness-card.png" alt="img" /></span>
                        </figure>
                        <figcaption>BUSSINESS CARDS</figcaption>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section unique-section section-padding-top section-padding-bottom text-center">
            <div className="container">
              <div className="heading-grp main-heading-spacing">
                <h2 className="mb-3">Get Unique, visually appealing web designs.</h2>
                <p className="p16-dark">By choosing the best services suitable for your story, we take things to next level</p>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-4 col-6">
                  <div className="logo-wrap" data-aos="fade-up" data-aos-duration={300}>
                    <figure className="mb-0">
                      <img src="./img/ae.png" alt="img" />
                      <figcaption className="text-uppercase">Adobe After Effects</figcaption>
                    </figure>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="logo-wrap" data-aos="fade-up" data-aos-duration={600}>
                    <figure className="mb-0">
                      <img src="./img/sketch.png" alt="img" />
                      <figcaption className="text-uppercase">Sketch</figcaption>
                    </figure>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="logo-wrap" data-aos="fade-up" data-aos-duration={900}>
                    <figure className="mb-0">
                      <img src="./img/psd.png" alt="img" />
                      <figcaption className="text-uppercase">Adobe Photoshop</figcaption>
                    </figure>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="logo-wrap" data-aos="fade-up" data-aos-duration={400}>
                    <figure className="mb-0">
                      <img src="./img/xd.png" alt="img" />
                      <figcaption className="text-uppercase">Adobe experience design</figcaption>
                    </figure>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="logo-wrap" data-aos="fade-up" data-aos-duration={400}>
                    <figure className="mb-0">
                      <img src="./img/ai.png" alt="img" />
                      <figcaption className="text-uppercase">Adobe Illustrator</figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section white-section contact-form-center section-padding-top section-padding-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 mx-auto">
                  <div className="heading-grp text-center">
                    <h2 className="mb-5">Got an idea for your own app? Share with us!</h2>
                    <p className="p16 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum has been the industry's standard.</p>
                  </div>
                  <form>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input className="form-control" type="text" name placeholder="Name" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input className="form-control" type="text" name placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input className="form-control" type="text" name placeholder="Phone Number" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <select className="selectpicker">
                          <option>What is app about?</option>
                          <option>What is app about?</option>
                          <option>What is app about?</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <div className="btn-blk text-center">
                          <button className="btn btn-primary btn-lg">Submit</button>
                        </div>
                      </div>
                    </div>
                  </form>
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
                    <li> <a className="fa fa-facebook" aria-hidden="true" href="javascript://" /> </li>
                    <li> <a className="fa fa-twitter" aria-hidden="true" href="javascript://" /> </li>
                    <li> <a className="fa fa-instagram" aria-hidden="true" href="javascript://" /> </li>
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


export default Wui_ux
