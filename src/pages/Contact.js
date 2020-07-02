import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wrapper from "../components/Wrapper";
import about from "../assets/img/hero/about.jpg"
import {Link} from "react-router-dom";

class Contact extends Component {
  static propTypes = {};

  render() {
    return (
      <Wrapper>
        <div className="slider-area ">
          <div className="single-slider hero-overly slider-height2 d-flex align-items-center"
               style={{backgroundImage : `url(${about})`}}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap pt-100">
                    <h2>Контакты</h2>
                    <nav aria-label="breadcrumb ">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Главная</Link></li>
                        <li className="breadcrumb-item"><Link to="#">Контакты</Link></li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.5760304829273!2d43.842519314907236!3d40.79333404057366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ3JzM2LjAiTiA0M8KwNTAnNDEuMCJF!5e0!3m2!1sru!2s!4v1590418592229!5m2!1sru!2s"
            className="addressMap"
            tabIndex="0"
          />
        </div>


        <section className="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="contact-title">Get in Touch</h2>
              </div>
              <div className="col-lg-8">
                <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm"
                      noValidate="novalidate">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9"
                                  onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter Message'"
                                  placeholder=" Enter Message" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input className="form-control valid" name="name" id="name" type="text"
                               onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter your name'"
                               placeholder="Enter your name" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input className="form-control valid" name="email" id="email" type="email"
                               onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter email address'"
                               placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input className="form-control" name="subject" id="subject" type="text"
                               onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter Subject'"
                               placeholder="Enter Subject" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <button type="submit" className="button button-contactForm boxed-btn">Send</button>
                  </div>
                </form>
              </div>
              <div className="col-lg-3 offset-lg-1">
                <div className="media contact-info">
                  <span className="contact-info__icon"><i className="ti-home"></i></span>
                  <div className="media-body">
                    <h3>Buttonwood, California.</h3>
                    <p>Rosemead, CA 91770</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                  <div className="media-body">
                    <h3>+1 253 565 2365</h3>
                    <p>Mon to Fri 9am to 6pm</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon"><i className="ti-email"></i></span>
                  <div className="media-body">
                    <h3>support@colorlib.com</h3>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    )
  }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);

export default Container;
