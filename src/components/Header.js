import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import loder_logo from "../assets/img/logo/loder-logo.png"
import logo from "../assets/img/logo/logo.png"
import vladimir from "../assets/img/logo/vladimir.png"
import vladimir1 from "../assets/img/logo/vladimir1.png"
import vladimir2 from "../assets/img/logo/vladimir2.png"
import vladimir4 from "../assets/img/logo/vladimir4.png"
import vladimir5 from "../assets/img/logo/vladimir5.png"
import vladimirr from "../assets/img/logo/vladimirr.png"
import vladimir_icon from "../assets/img/logo/vladimir_icon.png"
import ChatFlow from "./ChatFlow";
class Header extends Component {
  static propTypes = {};
state={
  sticky : false
}
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }


  handleScroll = () => {
    const { sticky } = this.state;
    const top = Math.max(document.getElementsByTagName('html')[0].scrollTop, document.body.scrollTop);
    if (top > 200 && !sticky) {
      this.setState({
        sticky: true,
      });
    } else if (top <= 10 && sticky) {
      this.setState({
        sticky: false,
      });
    }
  };


  render() {
    let { sticky } = this.state
    return (
      <div>
        <ChatFlow />
        {/*<div id="preloader-active">*/}
        {/*  <div className="preloader d-flex align-items-center justify-content-center">*/}
        {/*    <div className="preloader-inner position-relative">*/}
        {/*      <div className="preloader-circle"></div>*/}
        {/*      <div className="preloader-img pere-text">*/}
        {/*        <img src={loder_logo} alt="" />*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}

        <header>

          <div className="header-area header-transparent">
            <div className="main-header ">
              <div className="header-top d-none d-lg-block">
                <div className="container-fluid">
                  <div className="col-xl-12">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="header-info-left">
                        <ul>
                          <li>+7&nbsp;&nbsp;(920)&nbsp;&nbsp;926-00-00</li>
                          <li>info@domain.com</li>
                          <li>пн - сб &nbsp; 9:00 - 18:00</li>
                        </ul>
                      </div>
                      <div className="header-info-right">
                        <ul className="header-social">
                          <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                          <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                          <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                          <li><Link to="#"><i className="fab fa-google-plus-g"></i></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/*//////header-bottom  header-sticky sticky-bar sticky*/}
              <div className={`header-bottom header-sticky ${sticky ? 'sticky-bar sticky' : ''}`}>

                <div className="container-fluid">
                  <div className="row align-items-center">

                    <div className="col-xl-2 col-lg-2 col-md-1">
                      <div className="logo">

                        <Link to="/" className="big-logo"><img style={{height : 80}} src={vladimir1} alt="" /></Link>

                        <Link to="/" className="small-logo"><img src={loder_logo} alt="" /></Link>
                      </div>
                    </div>
                    <div className="col-xl-10 col-lg-10 col-md-10">

                      <div className="main-menu f-right d-none d-lg-block">
                        <nav>
                          <ul id="navigation">
                            <li><Link to="/">Главная</Link></li>
                            <li><Link to="/about">О нас</Link></li>
                            <li><Link to="/projects">Проекты</Link></li>
                            {/*<li><Link to="/services">Наши работы</Link></li>*/}
                            <li><Link to="/blog">Блог</Link>  </li>
                              {/*<ul className="submenu">*/}
                              {/*  <li><Link to="/blog">Блог</Link></li>*/}
                              {/*  <li><Link to="/single_blog">Подробности блога</Link></li>*/}
                              {/*</ul>*/}

                            {/*<li><Link to="#">Pages</Link>*/}
                            {/*  <ul className="submenu">*/}
                            {/*    <li><Link to="/elements">Element</Link></li>*/}
                            {/*    <li><Link to="/project_details">Projects Details</Link></li>*/}
                            {/*    <li><Link to="/services_details">Services Details</Link></li>*/}
                            {/*  </ul>*/}
                            {/*</li>*/}
                            <li><Link to="/contact">
                              Контакты</Link></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    {/*<div className="col-xl-2 col-lg-2 col-md-3">*/}
                    {/*  <div className="header-right-btn f-right d-none d-lg-block">*/}
                    {/*    <Link to="#" className="btn">Contact Now</Link>*/}
                    {/*  </div>*/}
                    {/*</div>*/}

                    <div className="col-12">
                      <div className="mobile_menu d-block d-lg-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>


    )
  }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default Container;
