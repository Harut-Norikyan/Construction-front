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
    console.log(projectById)
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
                      <h2>Детали Проекта</h2>
                      <nav aria-label="breadcrumb ">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><Link to="/">Главная</Link></li>
                          <li className="breadcrumb-item"><Link to="#">детали проекта</Link></li>
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

                    <div className="details-caption titleProjectId">
                      <h3>{projectById?projectById.title:null}</h3>
                    </div>
                    <Carousel
                      autoplay
                      wrapAround={1}
                      pauseOnHover={1}
                      className="carousel"
                    >
                      {projectById && projectById.images? JSON.parse(projectById.images).map((m)=>(
                        <img key={m.id} src={UtilsFromCarousel.fileUrl(m)} alt="m"/>
                      )):null}
                    </Carousel>
                    <div className="details-caption">
                      <p>{projectById?projectById.desc:null}</p>
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
