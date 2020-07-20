import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";
import about from "../assets/img/hero/about.jpg";
import Utils from "../helpers/Utils";
import {getProjects} from "../store/actions/projects";
import Pagination from "react-js-pagination";

class Projects extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    }
  }


  componentDidMount() {
    this.props.getProjects(this.state.activePage);
  }

  handlePageChange=async (e)=> {
    await this.setState({activePage: parseInt(e)});
    this.props.getProjects(this.state.activePage);
  };

  render() {
    let {projects,projectCount} = this.props
    let {activePage} = this.state
    console.log(projects,projectCount,"123")
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

                        {/*<Pagination*/}
                        {/*  activePage={activePage}*/}
                        {/*  totalItemsCount={projectCount?projectCount:10}*/}
                        {/*  onChange={this.handlePageChange}*/}
                        {/*/>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*<Pagination*/}
              {/*  activePage={activePage}*/}
              {/*  totalItemsCount={projectCount?projectCount:10}*/}
              {/*  onChange={this.handlePageChange}*/}
              {/*/>*/}
              <nav aria-label="navigation " className="navigationPagination">
                <ul className="pagination mt-50 mb-70">
                  <li className="page-item">
                    <Pagination
                        itemClass="page-item"
                        linkClass="page-link"
                      activePage={activePage}
                      totalItemsCount={projectCount?projectCount:10}
                      onChange={this.handlePageChange}
                    />
                  </li>
                </ul>
              </nav>
            </div>

          </section>
        </main>
      </Wrapper>
    )
  }
}


const mapStateToProps = (state) => ({
  projects:state.projects.projects,
  projectCount:state.projects.projectCount
});

const mapDispatchToProps = {
  getProjects
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);

export default Container;
