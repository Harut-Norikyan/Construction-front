import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";
import servicess1 from "../assets/img/service/servicess1.png"
import servicess2 from "../assets/img/service/servicess2.png"
import servicess3 from "../assets/img/service/servicess3.png"
import servicess4 from "../assets/img/service/servicess4.png"
import servicess5 from "../assets/img/service/servicess5.png"
import servicess6 from "../assets/img/service/servicess6.png"
import services_icon1 from "../assets/img/icon/services_icon1.png"
import about from "../assets/img/hero/about.jpg"

class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <Wrapper>
        <main>

          <div className="slider-area ">
            <div className="single-slider hero-overly slider-height2 d-flex align-items-center"
                style={{backgroundImage : `url(${about})`}}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="hero-cap pt-100">
                      <h2>Services</h2>
                      <nav aria-label="breadcrumb ">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                          <li className="breadcrumb-item"><Link to="#">Services</Link></li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="services-area1 section-padding30">
            <div className="container">

              <div className="row">
                <div className="col-lg-12">
                  <div className="section-tittle mb-55">
                    <div className="front-text">
                      <h2 className="">Our Services</h2>
                    </div>
                    <span className="back-text">Services</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-service-cap mb-30">
                    <div className="service-img">
                      <img src={servicess1} alt="" />
                    </div>
                    <div className="service-cap">
                      <h4><Link to="services_details.html">Engineering techniques & implementation</Link></h4>
                      <Link to="services_details.html" className="more-btn">Read More <i className="ti-plus"></i></Link>
                    </div>
                    <div className="service-icon">
                      <img src={services_icon1} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-service-cap mb-30">
                    <div className="service-img">
                      <img src={servicess2} alt="" />
                    </div>
                    <div className="service-cap">
                      <h4><Link to="services_details.html">Engineering techniques & implementation</Link></h4>
                      <Link to="services_details.html" className="more-btn">Read More <i className="ti-plus"></i></Link>
                    </div>
                    <div className="service-icon">
                      <img src={services_icon1} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-service-cap mb-30">
                    <div className="service-img">
                      <img src={servicess3} alt="" />
                    </div>
                    <div className="service-cap">
                      <h4><Link to="services_details.html">Engineering techniques & implementation</Link></h4>
                      <Link to="services_details.html" className="more-btn">Read More <i className="ti-plus"></i></Link>
                    </div>
                    <div className="service-icon">
                      <img src={services_icon1} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-service-cap mb-30">
                    <div className="service-img">
                      <img src={servicess4} alt="" />
                    </div>
                    <div className="service-cap">
                      <h4><Link to="services_details.html">Engineering techniques & implementation</Link></h4>
                      <Link to="services_details.html" className="more-btn">Read More <i className="ti-plus"></i></Link>
                    </div>
                    <div className="service-icon">
                      <img src={services_icon1} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-service-cap mb-30">
                    <div className="service-img">
                      <img src={servicess5} alt="" />
                    </div>
                    <div className="service-cap">
                      <h4><Link to="services_details.html">Engineering techniques & implementation</Link></h4>
                      <Link to="services_details.html" className="more-btn">Read More <i className="ti-plus"></i></Link>
                    </div>
                    <div className="service-icon">
                      <img src={services_icon1} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-service-cap mb-30">
                    <div className="service-img">
                      <img src={servicess6} alt="" />
                    </div>
                    <div className="service-cap">
                      <h4><Link to="services_details.html">Engineering techniques & implementation</Link></h4>
                      <Link to="" className="more-btn">Read More <i className="ti-plus"></i></Link>
                    </div>
                    <div className="service-icon">
                      <img src={services_icon1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>

      </Wrapper>
    )
  }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default Container;
