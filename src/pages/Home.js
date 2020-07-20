import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import Carousel from 'nuka-carousel';

import servicess1 from "../assets/img/service/servicess1.png"
import servicess2 from "../assets/img/service/servicess2.png"
import servicess3 from "../assets/img/service/servicess3.png"
import services_icon1 from "../assets/img/icon/services_icon1.png"
import safe_in from "../assets/img/gallery/safe_in.png"
import project1 from "../assets/img/gallery/project1.png"
import project2 from "../assets/img/gallery/project2.png"
import project3 from "../assets/img/gallery/project3.png"
import project4 from "../assets/img/gallery/project4.png"
import project5 from "../assets/img/gallery/project5.png"
import project6 from "../assets/img/gallery/project6.png"
import h1_hero from "../assets/img/hero/h1_hero.jpg"
import section_bg2 from "../assets/img/gallery/section-bg2.jpg"
import section_bg3 from "../assets/img/gallery/section-bg3.jpg"
import team1 from "../assets/img/team/team1.png"
import team2 from "../assets/img/team/team2.png"
import team3 from "../assets/img/team/team3.png"
import david_1 from "../assets/img/david/david_1.png"
import david_2 from "../assets/img/david/david_2.png"
import Wrapper from "../components/Wrapper";
import {getProjects} from "../store/actions/projects";
import Utils from "../helpers/Utils";
import {getAbout} from "../store/actions/about";
import passport from "../assets/img/about/passport.png";
import magnifier from "../assets/img/about/magnifying.png";
import master from "../assets/img/about/master1.png";
import contract from "../assets/img/about/contract.png";



class Home extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state={
      activePage: 1
    }
  }

  componentDidMount() {
    this.props.getProjects(this.state.activePage);
    this.props.getAbout()
  }



  render() {
    const {projects,about} = this.props
    return (
      <Wrapper>
      <main>
        <div className="slider-area ">
          <div className="slider-active">
            <div className="single-slider  hero-overly slider-height d-flex align-items-center"
                 style={{ backgroundImage: `url(${h1_hero})` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="hero__caption">
                      <div className="hero-text1">
                        <span data-animation="fadeInUp" data-delay=".3s">hand car wash and detailing service</span>
                      </div>
                      <h1 data-animation="fadeInUp" data-delay=".5s">Строительство</h1>
                      <h1 data-animation="fadeInUp" data-delay=".5s" className="vo">во</h1>
                      <div className="stock-text" data-animation="fadeInUp" data-delay=".8s">
                        <h2>Владимире</h2>
                        <h2>Владимире</h2>
                      </div>
                      <div className="hero-text2 mt-110" data-animation="fadeInUp" data-delay=".9s">
                        <span><Link to="/services">Our Services  </Link></span>
                      </div>
                    </div>
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
                    <h4><Link to="/services_details">Engineering techniques & implementation  </Link></h4>
                    <Link to="/services_details" className="more-btn">Read More <i className="ti-plus"></i>  </Link>
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
                    <h4><Link to="/services_details">Engineering techniques & implementation  </Link></h4>
                    <Link to="/services_details" className="more-btn">Read More <i className="ti-plus"></i>  </Link>
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
                    <h4><Link to="/services_details">Engineering techniques & implementation  </Link></h4>
                    <Link to="/services_details" className="more-btn">Read More <i className="ti-plus"></i>  </Link>
                  </div>
                  <div className="service-icon">
                    <img src={services_icon1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <section className="support-company-area fix pt-10">
            <div className="support-wrapper align-items-end">
              <div className="left-content">

                <div className="section-tittle section-tittle2 mb-55">
                  <div className="front-text">
                    <h2 style={{fontSize :70}}>{about?about.title:null}</h2>
                  </div>
                </div>
                <div className="support-caption">
                  <p>{about?about.desc:null}</p>
                  <Link to="/about" className="btn red-btn2">Узнать больше</Link>
                </div>
              </div>
              <div className="right-content">

                <div className="right-img">
                  <img src={safe_in} alt="" />
                </div>
                <div className="support-img-cap text-center">
                  <span>1994</span>
                  <p>Since</p>
                </div>
              </div>
            </div>
          </section>
        </div>


        <div className="line" />
        <div className="team-area section-padding30">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">

                <div className="section-tittle section-tittle5 mb-50">
                  <div className="front-text">
                    <h3 className="aboutContentTitle">Зачем сотрудничать с нами?</h3>
                  </div>

                </div>
              </div>
            </div>
            <div className="aboutContent">
              <div className="aboutContentItem">
                <img className="aboutContentItemImg"  src={passport} alt=""/>
                <p className="aboutContentItemDesc">
                  Все рабочие граждане
                  <br/>
                  Российской Федерации
                </p>
              </div>
              <div className="aboutContentItem">
                <img className="aboutContentItemImg"  src={magnifier} alt=""/>
                <p className="aboutContentItemDesc">
                  Отсутствие скрытых
                  <br/>
                  платежей
                </p>
              </div>
              <div className="aboutContentItem">
                <img className="aboutContentItemImg"  src={master} alt=""/>
                <p className="aboutContentItemDesc">
                  Бесплатный выезд
                  <br/>
                  замерщика
                </p>
              </div>
              <div className="aboutContentItem">
                <img className="aboutContentItemImg" src={contract} alt=""/>
                <p className="aboutContentItemDesc">
                  Работаем официально
                  <br/>
                  по договору
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="line" />

        <section className="project-area  section-padding30">
          <div className="container">
            <div className="project-heading mb-35">
              <div className="row align-items-end">
                <div className="col-lg-6">

                  <div className="section-tittle section-tittle3">
                    <div className="front-text">
                      <h2 className="">Our Projects</h2>
                    </div>
                    <span className="back-text">Gellary</span>
                  </div>
                </div>

              </div>
            </div>
            <div className="row">
              <div className="col-12">
                  <div className="tab-pane fade active show" id="nav-home" role="tabpanel"
                       aria-labelledby="nav-home-tab">
                    <div className="project-caption">
                      <div className="row">
                        {projects?projects.map(m=>
                          <div className="col-lg-4 col-md-6">
                            <div className="single-project mb-30">
                              <div className="project-img">
                                <img src={Utils.fileUrl(m.images)} alt="i" />
                              </div>
                              <div className="project-cap">
                                <h5 className="titleInProjects">
                                  <Link to={`/project_details/${m.id}`}>{m.title}</Link>
                                </h5>
                              </div>
                            </div>
                          </div>
                        ):null}

                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>


        <section className="contact-with-area"
                 // data-background="assets/img/gallery/section-bg2.jpg"
                 style={{backgroundImage : `url(${section_bg2})`}}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-9 offset-xl-1 offset-lg-1">
                <div className="contact-us-caption">
                  <div className="team-info mb-30 pt-45">

                    <div className="section-tittle section-tittle4">
                      <div className="front-text">
                        <h2 className="">Lats talk with us</h2>
                      </div>
                      <span className="back-text">Lat`s chat</span>
                    </div>
                    <p>Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife
                      nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt
                      mollitemnth incididbnt ut;o5tu layjobore mofllit anim.</p>
                    <Link to="#" className="white-btn">read more  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        <div className="team-area section-padding30">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">

                <div className="section-tittle section-tittle5 mb-50">
                  <div className="front-text">
                    <h2 className="">Our team</h2>
                  </div>
                  <span className="back-text">exparts</span>
                </div>
              </div>
            </div>
            <div className="row">

              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src={team1} alt="" />
                  </div>
                  <div className="team-caption">
                    <span>UX Designer</span>
                    <h3>Ethan Welch</h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src={team2} alt="" />
                  </div>
                  <div className="team-caption">
                    <span>UX Designer</span>
                    <h3>Ethan Welch</h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src={team3} alt="" />
                  </div>
                  <div className="team-caption">
                    <span>UX Designer</span>
                    <h3>Ethan Welch</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="testimonial-area t-bg testimonial-padding">
          <div className="container ">
            <div className="row">
              <div className="col-xl-12">

                <div className="section-tittle section-tittle6 mb-50">
                  <div className="front-text">
                    <h2 className="">Testimonial</h2>
                  </div>
                  <span className="back-text">Feedback</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-10 col-lg-11 col-md-10 offset-xl-1">
                <div className="h1-testimonial-active">

                  <div className="single-testimonial">

                    <div className="testimonial-caption ">
                      <div className="testimonial-top-cap">
                        <p>Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu
                          quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg
                          dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim. Mollit anim
                          laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla
                          parihatur. Excghcepteur sfwsignjn.</p>
                      </div>

                      <div className="testimonial-founder d-flex align-items-center">
                        <div className="founder-text">
                          <span>Jessya Inn</span>
                          <p>Co Founder</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-testimonial">

                    <div className="testimonial-caption ">
                      <div className="testimonial-top-cap">

                        <p>Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu
                          quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg
                          dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim. Mollit anim
                          laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla
                          parihatur. Excghcepteur sfwsignjn.</p>
                      </div>

                      <div className="testimonial-founder d-flex align-items-center">
                        <div className="founder-text">
                          <span>Jessya Inn</span>
                          <p>Co Founder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="latest-news-area section-padding30">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">

                <div className="section-tittle section-tittle7 mb-50">
                  <div className="front-text">
                    <h2 className="">latest news</h2>
                  </div>
                  <span className="back-text">Our Blog</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">

                <div className="single-news mb-30">
                  <div className="news-img">
                    <img src={david_1} alt="" />
                      <div className="news-date text-center">
                        <span>24</span>
                        <p>Now</p>
                      </div>
                  </div>
                  <div className="news-caption">
                    <ul className="david-info">
                      <li> | &nbsp; &nbsp;  Porperties</li>
                    </ul>
                    <h2><Link to="/single-blog">Footprints in Time is perfect
                      House in Kurashiki  </Link></h2>
                    <Link to="/single-blog" className="d-btn">Read more »  </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">

                <div className="single-news mb-30">
                  <div className="news-img">
                    <img src={david_2} alt="" />
                      <div className="news-date text-center">
                        <span>24</span>
                        <p>Now</p>
                      </div>
                  </div>
                  <div className="news-caption">
                    <ul className="david-info">
                      <li> | &nbsp; &nbsp;  Porperties</li>
                    </ul>
                    <h2><Link to="/single-blog">Footprints in Time is perfect
                      House in Kurashiki  </Link></h2>
                    <Link to="/single-blog" className="d-btn">Read more »   </Link>
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


const mapStateToProps = (state) => ({
  projects:state.projects.projects,
  about:state.about.about,
  state
});

const mapDispatchToProps = {
  getProjects,
  getAbout
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default Container;
