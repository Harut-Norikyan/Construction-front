import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";
// import project_details from "../assets/img/gallery/project_details.jpg"
import about from "../assets/img/hero/about.jpg"
import Carousel from 'nuka-carousel';
import {getProjectById} from "../store/actions/projects";
import UtilsFromCarousel from "../helpers/UtilsFromCarousel";
// import UtilsFromCarousel from "../helpers/UtilsFromCarousel";

class Project_details extends Component {
  static propTypes = {};

  componentDidMount() {
    const {id} = this.props.match.params
    this.props.getProjectById(id)
  }


  render() {
    // console.log(this.props.projectById,"projectById")
    let { projectById } = this.props
    // console.log(projectById)
    // if (projectById){
    //   console.log(projectById.images,typeof(projectById.images),JSON.parse(projectById.images))
    // }
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
                      <h2>projects Details</h2>
                      <nav aria-label="breadcrumb ">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                          <li className="breadcrumb-item"><Link to="#">projects Details</Link></li>
                        </ol>
                      </nav>
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

                    <Carousel
                      className="details-img mb-40"
                      wrapAround
                    >
                      {/*{projectById? JSON.parse(projectById.images).map((m)=>(<img src={UtilsFromCarousel.fileUrl(m)} alt="i" key={m} />)):null}*/}
                      {projectById ? JSON.parse(projectById.images).map((m) => (<img src={UtilsFromCarousel.fileUrl(m)} alt="i" key={m} />)) : null}
                    </Carousel>
                    {/*{product ? JSON.parse(product.images).map((m) => (<img src={UtilsFromCarousel.fileUrl(m)} alt="i" key={m} />)) : null}*/}

                    <div className="details-caption">
                      <p>Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife
                        nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt
                        mollitemnth incididbnt ut;o5tu layjobore mofllit anim.Mollit anim laborum.Dvcuis aute
                        iruxvfg.</p>

                      <p className="mb-50">Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit
                        esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg
                        dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim.Mollit anim
                        laborum.Dvcuis aute iruxvfg.</p>

                      <h3>Our main goal</h3>
                      <p className="mb-50">Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit
                        esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg
                        dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim.Mollit anim
                        laborum.Dvcuis aute iruxvfg.</p>

                      <h3>Take a look to our challenges</h3>
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


const mapStateToProps = (state) => ({
  projectById:state.projects.projectById
});

const mapDispatchToProps = {
  getProjectById
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Project_details);

export default Container;
