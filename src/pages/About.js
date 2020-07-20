import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";
import aboutImg from "../assets/img/hero/about.jpg"
import {getAbout} from "../store/actions/about";
import Utils from "../helpers/Utils";
import passport from "../assets/img/about/passport.png"
import master from "../assets/img/about/master1.png"
import magnifier from "../assets/img/about/magnifying.png"
import contract from "../assets/img/about/contract.png"


class About extends Component {
  static propTypes = {};


  componentDidMount() {
    this.props.getAbout()
  }

  render() {
    let {about} = this.props
    return (
      <Wrapper>
        <main>

          <div className="slider-area ">
            <div className="single-slider hero-overly slider-height2 d-flex align-items-center"
                 // data-background="assets/img/hero/about.jpg"
              style={{backgroundImage : `url(${aboutImg})`}}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="hero-cap pt-100">
                      <h2>О нас</h2>
                      <nav aria-label="breadcrumb ">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><Link to="/">Главная</Link></li>
                          <li className="breadcrumb-item"><Link to="#">О нас</Link></li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <section className="support-company-area fix pt-10 section-padding30">
            <div className="support-wrapper align-items-end rightBar">
              <div className="left-content">
                <div className="section-tittle section-tittle2 mb-55">
                  <div className="front-text">
                    <h2 style={{fontSize:70}}>{about?about.title:null}</h2>
                  </div>
                </div>
                <div className="support-caption">
                  <p>
                    {about?about.desc:null}
                    {about?about.longDesc:null}
                  </p>
                </div>
              </div>
              <div className="right-content">
                <div className="right-img">
                  {about ?<img src={Utils.fileUrl(about.images)} alt="i" style={{width:"90%",marginBottom:30}}/> :null}
                </div>
              </div>
              {/*<div className="longDesc">*/}
              {/*  <p> {about?about.desc:null}</p>*/}
              {/*</div>*/}

            </div>
          </section>
         <div className="line"/>


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

        </main>

      </Wrapper>
  )
  }
  }


  const mapStateToProps = (state) => ({
    about:state.about.about
  });

  const mapDispatchToProps = {
    getAbout
  };

  const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
  )(About);

  export default Container;
