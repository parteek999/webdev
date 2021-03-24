import React from 'react'
import Header from '../subcomponents/Header'
import Form from '../subcomponents/Form'
import Footer from '../subcomponents/Footer'
// import AOS from 'aos'

// import './css/aos.css'
// import './css/bootstrap.min.css'
// import './css/bootstrap-select.min.css'
// import './css/font-awesome.min.css'
// import './css/slick.css'
// import './css/style.css'


function Datacentre() {
  // AOS.init();
  return (
    <div>

      <Header />
      <div id="wrapper">
        <section className="section inner-page-banner overflow-hidden">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 order-lg-2">
                <div className="fig-blk banner-img-7">
                  <img className="img-fluid" src="./img/banner07.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-7 order-lg-1">
                <div className="heading-grp">
                  <h2 className="mb-3" data-aos="fade-up" data-aos-duration={400}>100%Safe, Ethical<br />
                      and Effective<br />
                      Search Results<span className="yellow-color">.</span>
                  </h2>
                  <p className="p16-dark">By choosing the best services suitable for your story, we take things to next level</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section white-section section-padding-top">
          <div className="container">
            <div className="heading-grp text-center">
              <h2 className="mb-3">Our Datacenters</h2>
            </div>
            <div className="map-blk">
              <img className="img-fluid" src="./img/world-map.png" alt="img" />
              <span className="storage-icon">
                <img src="./img/storage-icon.png" alt="img" />
              </span>
              <span className="dark-dot dd01" />
              <span className="dark-dot dd02" />
              <span className="dark-dot dd03" />
              <span className="dark-dot dd04" />
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
              <div className="col-md-4 col-sm-6 col-12">
                <div className="logo-wrap" data-aos="fade-up" data-aos-duration={300}>
                  <figure className="mb-0">
                    <img src="./img/s1.png" alt="img" />
                    <figcaption>VPS/DEDICATED SERVER</figcaption>
                  </figure>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="logo-wrap" data-aos="fade-up" data-aos-duration={600}>
                  <figure className="mb-0">
                    <img src="./img/s2.png" alt="img" />
                    <figcaption>NETWORK AND ADMIN SYSTEM SUPPORT</figcaption>
                  </figure>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="logo-wrap" data-aos="fade-up" data-aos-duration={900}>
                  <figure className="mb-0">
                    <img src="./img/s3.png" alt="img" />
                    <figcaption className="text-uppercase">Email Server</figcaption>
                  </figure>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="logo-wrap" data-aos="fade-up" data-aos-duration={400}>
                  <figure className="mb-0">
                    <img src="./img/s4.png" alt="img" />
                    <figcaption className="text-uppercase">Web Hosting</figcaption>
                  </figure>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="logo-wrap" data-aos="fade-up" data-aos-duration={400}>
                  <figure className="mb-0">
                    <img src="./img/s5.png" alt="img" />
                    <figcaption>Firewall</figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div></section>
        <section className="section white-section contact-form-center section-padding-top section-padding-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="heading-grp text-center">
                  <h2 className="mb-5">Got an idea for your own app? Share with us!</h2>
                  <p className="p16 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum has been the industry's standard.</p>
                </div>
              <Form/>
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
      <Footer />
    </div>
  )
}

export default Datacentre
