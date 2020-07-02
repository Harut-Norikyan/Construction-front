import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wrapper from "../components/Wrapper";
import about from "../assets/img/hero/about.jpg"
import services_details from "../assets/img/gallery/services_details.png"


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
                  <div className="col-lg-10 col-xl-8">
                    <div className="hero-cap hero-cap2 pt-120">
                      <h2>Инженерные технологии и внедрение</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="services-details-area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="single-services section-padding2">
                    <div className="details-img mb-40">
                      <img src={services_details} alt="" />
                    </div>
                    <div className="details-caption">
                      <p>Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife
                        nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt
                        mollitemnth incididbnt ut;o5tu layjobore mofllit anim.Mollit anim laborum.Dvcuis aute
                        iruxvfg.</p>

                      <p className="mb-50">Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit
                        esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg
                        dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim.Mollit anim
                        laborum.Dvcuis aute iruxvfg.</p>

                      <h3>How can we help?</h3>
                      <p>Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife
                        nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt
                        mollitemnth incididbnt ut;o5tu layjobore mofllit anim.Mollit anim laborum.Dvcuis aute
                        iruxvfg.</p>

                      <p>Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife
                        nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt
                        mollitemnth incididbnt ut;o5tu layjobore mofllit anim.Mollit anim laborum.Dvcuis aute
                        iruxvfg.</p>
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
