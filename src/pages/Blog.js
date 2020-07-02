import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";
import about from "../assets/img/hero/about.jpg";
import single_blog_1 from "../assets/img/blog/single_blog_1.png"
import single_blog_2 from "../assets/img/blog/single_blog_2.png"
import single_blog_3 from "../assets/img/blog/single_blog_3.png"
import single_blog_4 from "../assets/img/blog/single_blog_4.png"
import single_blog_5 from "../assets/img/blog/single_blog_5.png"
import post_1 from "../assets/img/post/post_1.png"
import post_2 from "../assets/img/post/post_2.png"
import post_3 from "../assets/img/post/post_3.png"
import post_4 from "../assets/img/post/post_4.png"
import post_5 from "../assets/img/post/post_5.png"
import post_6 from "../assets/img/post/post_6.png"
import post_7 from "../assets/img/post/post_7.png"
import post_8 from "../assets/img/post/post_8.png"



class Blog extends Component {
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
                    <h2> Блог</h2>
                    <nav aria-label="breadcrumb ">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Главная</Link></li>
                        <li className="breadcrumb-item"><Link to="#"> Блог</Link></li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <section className="blog_area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mb-5 mb-lg-0">
                <div className="blog_left_sidebar">
                  <article className="blog_item">
                    <div className="blog_item_img">
                      <img className="card-img rounded-0" src={single_blog_1} alt="" />
                        <Link to="#" className="blog_item_date">
                          <h3>15</h3>
                          <p>Jan</p>
                        </Link>
                    </div>

                    <div className="blog_details">
                      <Link className="d-inline-block" to="/single-blog">
                        <h2>Google inks pact for new 35-storey office</h2>
                      </Link>
                      <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                        he earth it first without heaven in place seed it second morning saying.</p>
                      <ul className="blog-info-link">
                        <li><Link to="#"><i className="fa fa-user"></i> Travel, Lifestyle</Link></li>
                        <li><Link to="#"><i className="fa fa-comments"></i> 03 Comments</Link></li>
                      </ul>
                    </div>
                  </article>

                  <article className="blog_item">
                    <div className="blog_item_img">
                      <img className="card-img rounded-0" src={single_blog_2} alt="" />
                        <Link to="#" className="blog_item_date">
                          <h3>15</h3>
                          <p>Jan</p>
                        </Link>
                    </div>

                    <div className="blog_details">
                      <Link className="d-inline-block" to="/single-blog">
                        <h2>Google inks pact for new 35-storey office</h2>
                      </Link>
                      <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                        he earth it first without heaven in place seed it second morning saying.</p>
                      <ul className="blog-info-link">
                        <li><Link to="#"><i className="fa fa-user"></i> Travel, Lifestyle</Link></li>
                        <li><Link to="#"><i className="fa fa-comments"></i> 03 Comments</Link></li>
                      </ul>
                    </div>
                  </article>

                  <article className="blog_item">
                    <div className="blog_item_img">
                      <img className="card-img rounded-0" src={single_blog_3} alt="" />
                        <Link to="#" className="blog_item_date">
                          <h3>15</h3>
                          <p>Jan</p>
                        </Link>
                    </div>

                    <div className="blog_details">
                      <Link className="d-inline-block" to="/single-blog">
                        <h2>Google inks pact for new 35-storey office</h2>
                      </Link>
                      <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                        he earth it first without heaven in place seed it second morning saying.</p>
                      <ul className="blog-info-link">
                        <li><Link to="#"><i className="fa fa-user"></i> Travel, Lifestyle</Link></li>
                        <li><Link to="#"><i className="fa fa-comments"></i> 03 Comments</Link></li>
                      </ul>
                    </div>
                  </article>

                  <article className="blog_item">
                    <div className="blog_item_img">
                      <img className="card-img rounded-0" src={single_blog_4} alt="" />
                        <Link to="#" className="blog_item_date">
                          <h3>15</h3>
                          <p>Jan</p>
                        </Link>
                    </div>

                    <div className="blog_details">
                      <Link className="d-inline-block" to="/single-blog">
                        <h2>Google inks pact for new 35-storey office</h2>
                      </Link>
                      <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                        he earth it first without heaven in place seed it second morning saying.</p>
                      <ul className="blog-info-link">
                        <li><Link to="#"><i className="fa fa-user"></i> Travel, Lifestyle</Link></li>
                        <li><Link to="#"><i className="fa fa-comments"></i> 03 Comments</Link></li>
                      </ul>
                    </div>
                  </article>

                  <article className="blog_item">
                    <div className="blog_item_img">
                      <img className="card-img rounded-0" src={single_blog_5} alt="" />
                        <Link to="#" className="blog_item_date">
                          <h3>15</h3>
                          <p>Jan</p>
                        </Link>
                    </div>

                    <div className="blog_details">
                      <Link className="d-inline-block" to="/single-blog">
                        <h2>Google inks pact for new 35-storey office</h2>
                      </Link>
                      <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                        he earth it first without heaven in place seed it second morning saying.</p>
                      <ul className="blog-info-link">
                        <li><Link to="#"><i className="fa fa-user"></i> Travel, Lifestyle</Link></li>
                        <li><Link to="#"><i className="fa fa-comments"></i> 03 Comments</Link></li>
                      </ul>
                    </div>
                  </article>

                  <nav className="blog-pagination justify-content-center d-flex">
                    <ul className="pagination">
                      <li className="page-item">
                        <Link to="#" className="page-link" aria-label="Previous">
                          <i className="ti-angle-left"></i>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="#" className="page-link">1</Link>
                      </li>
                      <li className="page-item active">
                        <Link to="#" className="page-link">2</Link>
                      </li>
                      <li className="page-item">
                        <Link to="#" className="page-link" aria-label="Next">
                          <i className="ti-angle-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog_right_sidebar">
                  <aside className="single_sidebar_widget search_widget">
                    <form action="#">
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <input type="text" className="form-control" placeholder='Search Keyword'
                                 onFocus="this.placeholder = ''"
                                 onBlur="this.placeholder = 'Search Keyword'" />
                            <div className="input-group-append">
                              <button className="btns" type="button"><i className="ti-search"></i></button>
                            </div>
                        </div>
                      </div>
                      <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                              type="submit">Search
                      </button>
                    </form>
                  </aside>

                  <aside className="single_sidebar_widget post_category_widget">
                    <h4 className="widget_title">Category</h4>
                    <ul className="list cat-list">
                      <li>
                        <Link to="#" className="d-flex">
                          <p>Resaurant food</p>
                          <p>(37)</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="d-flex">
                          <p>Travel news</p>
                          <p>(10)</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="d-flex">
                          <p>Modern technology</p>
                          <p>(03)</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="d-flex">
                          <p>Product</p>
                          <p>(11)</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="d-flex">
                          <p>Inspiration</p>
                          <p>21</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="d-flex">
                          <p>Health Care (21)</p>
                          <p>09</p>
                        </Link>
                      </li>
                    </ul>
                  </aside>

                  <aside className="single_sidebar_widget popular_post_widget">
                    <h3 className="widget_title">Recent Post</h3>
                    <div className="media post_item">
                      <img src={post_1} alt="post" />
                        <div className="media-body">
                          <Link to="single-blog">
                            <h3>From life was you fish...</h3>
                          </Link>
                          <p>January 12, 2019</p>
                        </div>
                    </div>
                    <div className="media post_item">
                      <img src={post_2} alt="post" />
                        <div className="media-body">
                          <Link to="single-blog">
                            <h3>The Amazing Hubble</h3>
                          </Link>
                          <p>02 Hours ago</p>
                        </div>
                    </div>
                    <div className="media post_item">
                      <img src={post_3} alt="post" />
                        <div className="media-body">
                          <Link to="single-blog">
                            <h3>Astronomy Or Astrology</h3>
                          </Link>
                          <p>03 Hours ago</p>
                        </div>
                    </div>
                    <div className="media post_item">
                      <img src={post_4} alt="post" />
                        <div className="media-body">
                          <Link to="single-blog">
                            <h3>Asteroids telescope</h3>
                          </Link>
                          <p>01 Hours ago</p>
                        </div>
                    </div>
                  </aside>
                  <aside className="single_sidebar_widget tag_cloud_widget">
                    <h4 className="widget_title">Tag Clouds</h4>
                    <ul className="list">
                      <li>
                        <Link to="#">project</Link>
                      </li>
                      <li>
                        <Link to="#">love</Link>
                      </li>
                      <li>
                        <Link to="#">technology</Link>
                      </li>
                      <li>
                        <Link to="#">travel</Link>
                      </li>
                      <li>
                        <Link to="#">restaurant</Link>
                      </li>
                      <li>
                        <Link to="#">life style</Link>
                      </li>
                      <li>
                        <Link to="#">design</Link>
                      </li>
                      <li>
                        <Link to="#">illustration</Link>
                      </li>
                    </ul>
                  </aside>


                  <aside className="single_sidebar_widget instagram_feeds">
                    <h4 className="widget_title">Instagram Feeds</h4>
                    <ul className="instagram_row flex-wrap">
                      <li>
                        <Link to="#">
                          <img className="img-fluid" src={post_5} alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img className="img-fluid" src={post_6} alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img className="img-fluid" src={post_7} alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img className="img-fluid" src={post_8} alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img className="img-fluid" src="assets/img/post/post_9.png" alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img className="img-fluid" src="assets/img/post/post_10.png" alt="" />
                        </Link>
                      </li>
                    </ul>
                  </aside>


                  <aside className="single_sidebar_widget newsletter_widget">
                    <h4 className="widget_title">Newsletter</h4>

                    <form action="#">
                      <div className="form-group">
                        <input type="email" className="form-control" onFocus="this.placeholder = ''"
                               onBlur="this.placeholder = 'Enter email'" placeholder='Enter email' required />
                      </div>
                      <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                              type="submit">Subscribe
                      </button>
                    </form>
                  </aside>
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
)(Blog);

export default Container;
