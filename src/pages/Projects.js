import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";
import project1 from "../assets/img/gallery/project1.png";
import project2 from "../assets/img/gallery/project2.png";
import project3 from "../assets/img/gallery/project3.png";
import project4 from "../assets/img/gallery/project4.png";
import project5 from "../assets/img/gallery/project5.png";
import project6 from "../assets/img/gallery/project6.png";
import about from "../assets/img/hero/about.jpg";


class Projects extends Component {
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
                      <h2>
                        Наши проекты</h2>
                      <nav aria-label="breadcrumb ">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><Link to="/">Главная</Link></li>
                          <li className="breadcrumb-item"><Link to="/#">Проекты</Link></li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <section className="project-area  section-padding30">
            <div className="container">
              <div className="project-heading mb-35">
                <div className="row align-items-end">
                  <div className="col-lg-6">

                    <div className="section-tittle section-tittle3">
                      <div className="front-text">
                        <h2 className="">Our Projects</h2>
                      </div>
                      <span className="back-text">Gallery</span>
                    </div>
                  </div>
                  {/*<div className="col-lg-6">*/}
                  {/*  <div className="properties__button">*/}

                  {/*    <nav>*/}
                  {/*      <div className="nav nav-tabs" id="nav-tab" role="tablist">*/}
                  {/*        <Link className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" to="/#nav-home"*/}
                  {/*           role="tab" aria-controls="nav-home" aria-selected="false"> Show all </Link>*/}
                  {/*        <Link className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" to="/#nav-profile"*/}
                  {/*           role="tab" aria-controls="nav-profile" aria-selected="false"> Intorior</Link>*/}
                  {/*        <Link className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" to="/#nav-contact"*/}
                  {/*           role="tab" aria-controls="nav-contact" aria-selected="false">Recent</Link>*/}
                  {/*        <Link className="nav-item nav-link" id="nav-last-tab" data-toggle="tab" to="/#nav-last"*/}
                  {/*           role="tab" aria-controls="nav-contact" aria-selected="false">Big building</Link>*/}
                  {/*        <Link className="nav-item nav-link" id="nav-technology" data-toggle="tab" to="/#nav-techno"*/}
                  {/*           role="tab" aria-controls="nav-contact" aria-selected="false">Park</Link>*/}
                  {/*      </div>*/}
                  {/*    </nav>*/}

                  {/*  </div>*/}
                  {/*</div>*/}
                </div>
              </div>
              <div className="row">
                <div className="col-12">

                  <div className="tab-content active" id="nav-tabContent">

                    <div className="tab-pane fade active show" id="nav-home" role="tabpanel"
                         aria-labelledby="nav-home-tab">
                      <div className="project-caption">
                        <div className="row">
                          <div className="col-lg-4 col-md-6">
                            <div className="single-project mb-30">
                              <div className="project-img">
                                <img src={project1} alt="" />
                              </div>
                              <div className="project-cap">
                                <Link to="/project_details" className="plus-btn"><i className="ti-plus"></i></Link>
                                <h4><Link to="/project_details">Floride Chemicals</Link></h4>
                                <h4><Link to="/project_details">Factory</Link></h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="single-project mb-30">
                              <div className="project-img">
                                <img src={project2} alt="" />
                              </div>
                              <div className="project-cap">
                                <Link to="/project_details" className="plus-btn"><i className="ti-plus"></i></Link>
                                <h4><Link to="/project_details">Floride Chemicals</Link></h4>
                                <h4><Link to="/project_details">Factory</Link></h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="single-project mb-30">
                              <div className="project-img">
                                <img src={project3} alt="" />
                              </div>
                              <div className="project-cap">
                                <Link to="/project_details" className="plus-btn"><i className="ti-plus"></i></Link>
                                <h4><Link to="/project_details">Floride Chemicals</Link></h4>
                                <h4><Link to="/project_details">Factory</Link></h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="single-project mb-30">
                              <div className="project-img">
                                <img src={project4} alt="" />
                              </div>
                              <div className="project-cap">
                                <Link to="/project_details" className="plus-btn"><i className="ti-plus"></i></Link>
                                <h4><Link to="/project_details">Floride Chemicals</Link></h4>
                                <h4><Link to="/project_details">Factory</Link></h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="single-project mb-30">
                              <div className="project-img">
                                <img src={project5} alt="" />
                              </div>
                              <div className="project-cap">
                                <Link to="/project_details" className="plus-btn"><i className="ti-plus"></i></Link>
                                <h4><Link to="/project_details">Floride Chemicals</Link></h4>
                                <h4><Link to="/project_details">Factory</Link></h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="single-project mb-30">
                              <div className="project-img">
                                <img src={project6} alt="" />
                              </div>
                              <div className="project-cap">
                                <Link to="/project_details" className="plus-btn"><i className="ti-plus"></i></Link>
                                <h4><Link to="/project_details">Floride Chemicals</Link></h4>
                                <h4><Link to="/project_details">Factory</Link></h4>
                              </div>
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
)(Projects);

export default Container;
