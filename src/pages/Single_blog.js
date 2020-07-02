import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wrapper from "../components/Wrapper";
import about from "../assets/img/hero/about.jpg"
import single_blog_1 from "../assets/img/blog/single_blog_1.png"
import preview from "../assets/img/post/preview.png"
import author from "../assets/img/blog/author.png"
import comment_1 from "../assets/img/comment/comment_1.png"
import comment_2 from "../assets/img/comment/comment_2.png"
import comment_3 from "../assets/img/comment/comment_3.png"
import post_1 from "../assets/img/post/post_1.png"
import post_2 from "../assets/img/post/post_2.png"
import post_3 from "../assets/img/post/post_3.png"
import post_4 from "../assets/img/post/post_4.png"
import post_5 from "../assets/img/post/post_5.png"
import post_6 from "../assets/img/post/post_6.png"
import post_7 from "../assets/img/post/post_7.png"
import post_8 from "../assets/img/post/post_8.png"
import post_9 from "../assets/img/post/post_9.png"
import post_10 from "../assets/img/post/post_10.png"
import {Link} from "react-router-dom";



class Home extends Component {
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
                    <h2>Single Blog</h2>
                    <nav aria-label="breadcrumb ">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#">Single Blog</Link></li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <section className="blog_area single-post-area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 posts-list">
                <div className="single-post">
                  <div className="feature-img">
                    <img className="img-fluid" src={single_blog_1} alt="" />
                  </div>
                  <div className="blog_details">
                    <h2>Second divided from form fish beast made every of seas
                      all gathered us saying he our
                    </h2>
                    <ul className="blog-info-link mt-3 mb-4">
                      <li><Link to="#"><i className="fa fa-user"></i> Travel, Lifestyle</Link></li>
                      <li><Link to="#"><i className="fa fa-comments"></i> 03 Comments</Link></li>
                    </ul>
                    <p className="excert">
                      MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                      should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                      fraction of the camp price. However, who has the willpower
                    </p>
                    <p>
                      MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                      should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                      fraction of the camp price. However, who has the willpower to actually sit through a
                      self-imposed MCSE training. who has the willpower to actually
                    </p>
                    <div className="quote-wrapper">
                      <div className="quotes">
                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                        should have to spend money on boot camp when you can get the MCSE study materials yourself at
                        a fraction of the camp price. However, who has the willpower to actually sit through a
                        self-imposed MCSE training.
                      </div>
                    </div>
                    <p>
                      MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                      should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                      fraction of the camp price. However, who has the willpower
                    </p>
                    <p>
                      MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                      should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                      fraction of the camp price. However, who has the willpower to actually sit through a
                      self-imposed MCSE training. who has the willpower to actually
                    </p>
                  </div>
                </div>
                <div className="navigation-top">
                  <div className="d-sm-flex justify-content-between text-center">
                    <p className="like-info"><span className="align-middle"><i className="fa fa-heart"></i></span> Lily
                      and 4
                      people like this</p>
                    <div className="col-sm-4 text-center my-2 my-sm-0">

                    </div>
                    <ul className="social-icons">
                      <li><Link to="#"><i className="fa fa-facebook-f"></i></Link></li>
                      <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                      <li><Link to="#"><i className="fa fa-dribbble"></i></Link></li>
                      <li><Link to="#"><i className="fa fa-behance"></i></Link></li>
                    </ul>
                  </div>
                  <div className="navigation-area">
                    <div className="row">
                      <div
                        className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                        <div className="thumb">
                          <Link to="#">
                            <img className="img-fluid" src={preview} alt="" />
                          </Link>
                        </div>
                        <div className="arrow">
                          <Link to="#">
                            <span className="lnr text-white ti-arrow-left"></span>
                          </Link>
                        </div>
                        <div className="detials">
                          <p>Prev Post</p>
                          <Link to="#">
                            <h4>Space The Final Frontier</h4>
                          </Link>
                        </div>
                      </div>
                      <div
                        className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                        <div className="detials">
                          <p>Next Post</p>
                          <Link to="#">
                            <h4>Telescopes 101</h4>
                          </Link>
                        </div>
                        <div className="arrow">
                          <Link to="#">
                            <span className="lnr text-white ti-arrow-right"></span>
                          </Link>
                        </div>
                        <div className="thumb">
                          <Link to="#">
                            <img className="img-fluid" src="assets/img/post/next.png" alt="" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-author">
                  <div className="media align-items-center">
                    <img src={author} alt="" />
                      <div className="media-body">
                        <Link to="#">
                          <h4>Harvard milan</h4>
                        </Link>
                        <p>Second divided from form fish beast made. Every of seas all gathered use saying you're, he
                          our dominion twon Second divided from</p>
                      </div>
                  </div>
                </div>
                <div className="comments-area">
                  <h4>05 Comments</h4>
                  <div className="comment-list">
                    <div className="single-comment justify-content-between d-flex">
                      <div className="user justify-content-between d-flex">
                        <div className="thumb">
                          <img src={comment_1} alt="" />
                        </div>
                        <div className="desc">
                          <p className="comment">
                            Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                            Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                          </p>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <h5>
                                <Link to="#">Emilly Blunt</Link>
                              </h5>
                              <p className="date">December 4, 2017 at 3:12 pm </p>
                            </div>
                            <div className="reply-btn">
                              <Link to="#" className="btn-reply text-uppercase">reply</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-list">
                    <div className="single-comment justify-content-between d-flex">
                      <div className="user justify-content-between d-flex">
                        <div className="thumb">
                          <img src={comment_2} alt="" />
                        </div>
                        <div className="desc">
                          <p className="comment">
                            Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                            Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                          </p>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <h5>
                                <Link to="#">Emilly Blunt</Link>
                              </h5>
                              <p className="date">December 4, 2017 at 3:12 pm </p>
                            </div>
                            <div className="reply-btn">
                              <Link to="#" className="btn-reply text-uppercase">reply</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-list">
                    <div className="single-comment justify-content-between d-flex">
                      <div className="user justify-content-between d-flex">
                        <div className="thumb">
                          <img src={comment_3} alt="" />
                        </div>
                        <div className="desc">
                          <p className="comment">
                            Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                            Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                          </p>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <h5>
                                <Link to="#">Emilly Blunt</Link>
                              </h5>
                              <p className="date">December 4, 2017 at 3:12 pm </p>
                            </div>
                            <div className="reply-btn">
                              <Link to="#" className="btn-reply text-uppercase">reply</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-form">
                  <h4>Leave a Reply</h4>
                  <form className="form-contact comment_form" action="#" id="commentForm">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                              <textarea
                                className="form-control w-100"
                                name="comment"
                                id="comment"
                                cols="30"
                                rows="9"
                                placeholder="Write Comment"
                              />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input className="form-control" name="name" id="name" type="text" placeholder="Name" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input className="form-control" name="email" id="email" type="email" placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input className="form-control" name="website" id="website" type="text" placeholder="Website" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="button button-contactForm btn_1 boxed-btn">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog_right_sidebar">
                  <aside className="single_sidebar_widget search_widget">
                    <form action="#">
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder='Search Keyword'/>
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
                          <p>(21)</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="d-flex">
                          <p>Health Care</p>
                          <p>(21)</p>
                        </Link>
                      </li>
                    </ul>
                  </aside>
                  <aside className="single_sidebar_widget popular_post_widget">
                    <h3 className="widget_title">Recent Post</h3>
                    <div className="media post_item">
                      <img src={post_1} alt="post" />
                        <div className="media-body">
                          <Link to="single-blog.html">
                            <h3>From life was you fish...</h3>
                          </Link>
                          <p>January 12, 2019</p>
                        </div>
                    </div>
                    <div className="media post_item">
                      <img src={post_2} alt="post" />
                        <div className="media-body">
                          <Link to="single-blog.html">
                            <h3>The Amazing Hubble</h3>
                          </Link>
                          <p>02 Hours ago</p>
                        </div>
                    </div>
                    <div className="media post_item">
                      <img src={post_3} alt="post" />
                        <div className="media-body">
                          <Link to="single-blog.html">
                            <h3>Astronomy Or Astrology</h3>
                          </Link>
                          <p>03 Hours ago</p>
                        </div>
                    </div>
                    <div className="media post_item">
                      <img src={post_4} alt="post" />
                        <div className="media-body">
                          <Link to="single-blog.html">
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
                          <img className="img-fluid" src={post_9} alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img className="img-fluid" src={post_10} alt="" />
                        </Link>
                      </li>
                    </ul>
                  </aside>
                  <aside className="single_sidebar_widget newsletter_widget">
                    <h4 className="widget_title">Newsletter</h4>
                    <form action="#">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder='Enter email'
                          required />
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
)(Home);

export default Container;
