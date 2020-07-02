import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import logo2_footer from "../assets/img/logo/logo2_footer.png"
import map_footer from "../assets/img/gallery/map-footer.png"
import vladimir1 from "../assets/img/logo/vladimir1.png"

class Footer extends Component {
  static propTypes = {};

  render() {
    return (
      <footer>

        <div className="footer-main">
          <div className="footer-area footer-padding">
            <div className="container">
              <div className="row  justify-content-between">
                <div className="col-lg-4 col-md-4 col-sm-8">
                  <div className="single-footer-caption mb-30">

                    <div className="footer-logo">
                      <Link to="/"><img style={{height : 80}} src={vladimir1} alt="" /></Link>
                    </div>
                    <div className="footer-tittle">
                      <div className="footer-pera">
                        <p className="info1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod
                          tempor incididunt ut labore.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-5">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Quick Links</h4>
                      <ul>
                        <li><Link to="#">About</Link></li>
                        <li><Link to="#">Services</Link></li>
                        <li><Link to="#">Projects</Link></li>
                        <li><Link to="#">Contact Us</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-7">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Contact</h4>
                      <div className="footer-pera">
                        <p className="info1">Владимирская область город Владимир мкр. Юрьевец</p>
                      </div>
                      <ul>
                        <li><Link to="#">Phone: +7 (920) 926 00 00</Link></li>
                        {/*<li><Link to="#">Cell: +95 (0) 123 456 789</Link></li>*/}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-8">
                  <div className="single-footer-caption mb-50">

                    <div className="footer-form">
                      <div id="mc_embed_signup">
                        <form target="_blank"
                              action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                              method="get" className="subscribe_form relative mail_part" noValidate="true">
                          <input type="email" name="EMAIL" id="newsletter-form-email" placeholder=" Email Address "
                                 className="placeholder hide-on-focus" onFocus="this.placeholder = ''"
                                 onBlur="this.placeholder = ' Email Address '" />
                            <div className="form-icon">
                              <button type="submit" name="submit" id="newsletter-submit"
                                      className="email_icon newsletter-submit button-contactForm">
                                SIGN UP
                              </button>
                            </div>
                            <div className="mt-10 info"></div>
                        </form>
                      </div>
                    </div>

                    <div className="map-footer">
                      <img src={map_footer} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              {/*<div className="row align-items-center">*/}
              {/*  <div className="col-xl-12 ">*/}
              {/*    <div className="footer-copy-right">*/}

              {/*        Copyright &copy;*/}
              {/*        <script>document.write(new Date().getFullYear());</script>*/}
              {/*        All rights reserved | This template is made with*/}
              {/*        <i*/}
              {/*          className="fa fa-heart"*/}
              {/*          aria-hidden="true"*/}
              {/*        ></i> by*/}
              {/*        <Link to="https://colorlib.com" target="_blank">Colorlib</Link>*/}

              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>

      </footer>

  )
  }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);

export default Container;
