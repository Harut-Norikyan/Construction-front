import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";
import f1 from "../assets/img/elements/f1.jpg"
import f2 from "../assets/img/elements/f2.jpg"
import f3 from "../assets/img/elements/f3.jpg"
import f4 from "../assets/img/elements/f4.jpg"
import f5 from "../assets/img/elements/f5.jpg"
import f6 from "../assets/img/elements/f6.jpg"
import f7 from "../assets/img/elements/f7.jpg"
import f8 from "../assets/img/elements/f8.jpg"
import g1 from "../assets/img/elements/g1.jpg"
import g2 from "../assets/img/elements/g2.jpg"
import g3 from "../assets/img/elements/g3.jpg"
import g4 from "../assets/img/elements/g4.jpg"
import g5 from "../assets/img/elements/g5.jpg"
import g6 from "../assets/img/elements/g6.jpg"
import g7 from "../assets/img/elements/g7.jpg"
import g8 from "../assets/img/elements/g8.jpg"
import about from "../assets/img/hero/about.jpg"

class Elements extends Component {
  static propTypes = {};

  render() {
    return (
      <Wrapper>
        <div className="slider-area ">
          <div className="single-slider hero-overly slider-height2 d-flex align-items-center"
             style={{backgroundImage: `url(${about})`}}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap pt-100">
                    <h2>Our Element</h2>
                    <nav aria-label="breadcrumb ">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#">Element</Link></li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <section className="sample-text-area">
          <div className="container box_1170">
            <h3 className="text-heading">Text Sample</h3>
            <p className="sample-text">
              Every avid independent filmmaker has <b>Bold</b> about making that <i>Italic</i> interest documentary,
              or short
              film to show off their creative prowess. Many have great ideas and want to “wow”
              the<sup>Superscript</sup> scene,
              or video renters with their big project. But once you have the<sub>Subscript</sub> “in the can” (no easy
              feat), how
              do you move from a <del>Strike</del> through of master DVDs with the <u>“Underline”</u> marked
              hand-written title
              inside a secondhand CD case, to a pile of cardboard boxes full of shiny new, retail-ready DVDs, with UPC
              barcodes
              and polywrap sitting on your doorstep? You need to create eye-popping artwork and have your project
              replicated.
              Using a reputable full service DVD Replication company like PacificDisc, Inc. to partner with is
              certainly a
              helpful option to ensure a professional end result, but to help with your DVD replication project, here
              are 4 easy
              steps to follow for good DVD replication results:

            </p>
          </div>
        </section>


        <section className="button-area">
          <div className="container box_1170 border-top-generic">
            <h3 className="text-heading">Sample Buttons</h3>
            <div className="button-group-area">
              <Link to="#" className="genric-btn default">Default</Link>
              <Link to="#" className="genric-btn primary">Primary</Link>
              <Link to="#" className="genric-btn success">Success</Link>
              <Link to="#" className="genric-btn info">Info</Link>
              <Link to="#" className="genric-btn warning">Warning</Link>
              <Link to="#" className="genric-btn danger">Danger</Link>
              <Link to="#" className="genric-btn link">Link</Link>
              <Link to="#" className="genric-btn disable">Disable</Link>
            </div>
            <div className="button-group-area mt-10">
              <Link to="#" className="genric-btn default-border">Default</Link>
              <Link to="#" className="genric-btn primary-border">Primary</Link>
              <Link to="#" className="genric-btn success-border">Success</Link>
              <Link to="#" className="genric-btn info-border">Info</Link>
              <Link to="#" className="genric-btn warning-border">Warning</Link>
              <Link to="#" className="genric-btn danger-border">Danger</Link>
              <Link to="#" className="genric-btn link-border">Link</Link>
              <Link to="#" className="genric-btn disable">Disable</Link>
            </div>
            <div className="button-group-area mt-40">
              <Link to="#" className="genric-btn default radius">Default</Link>
              <Link to="#" className="genric-btn primary radius">Primary</Link>
              <Link to="#" className="genric-btn success radius">Success</Link>
              <Link to="#" className="genric-btn info radius">Info</Link>
              <Link to="#" className="genric-btn warning radius">Warning</Link>
              <Link to="#" className="genric-btn danger radius">Danger</Link>
              <Link to="#" className="genric-btn link radius">Link</Link>
              <Link to="#" className="genric-btn disable radius">Disable</Link>
            </div>
            <div className="button-group-area mt-10">
              <Link to="#" className="genric-btn default-border radius">Default</Link>
              <Link to="#" className="genric-btn primary-border radius">Primary</Link>
              <Link to="#" className="genric-btn success-border radius">Success</Link>
              <Link to="#" className="genric-btn info-border radius">Info</Link>
              <Link to="#" className="genric-btn warning-border radius">Warning</Link>
              <Link to="#" className="genric-btn danger-border radius">Danger</Link>
              <Link to="#" className="genric-btn link-border radius">Link</Link>
              <Link to="#" className="genric-btn disable radius">Disable</Link>
            </div>
            <div className="button-group-area mt-40">
              <Link to="#" className="genric-btn default circle">Default</Link>
              <Link to="#" className="genric-btn primary circle">Primary</Link>
              <Link to="#" className="genric-btn success circle">Success</Link>
              <Link to="#" className="genric-btn info circle">Info</Link>
              <Link to="#" className="genric-btn warning circle">Warning</Link>
              <Link to="#" className="genric-btn danger circle">Danger</Link>
              <Link to="#" className="genric-btn link circle">Link</Link>
              <Link to="#" className="genric-btn disable circle">Disable</Link>
            </div>
            <div className="button-group-area mt-10">
              <Link to="#" className="genric-btn default-border circle">Default</Link>
              <Link to="#" className="genric-btn primary-border circle">Primary</Link>
              <Link to="#" className="genric-btn success-border circle">Success</Link>
              <Link to="#" className="genric-btn info-border circle">Info</Link>
              <Link to="#" className="genric-btn warning-border circle">Warning</Link>
              <Link to="#" className="genric-btn danger-border circle">Danger</Link>
              <Link to="#" className="genric-btn link-border circle">Link</Link>
              <Link to="#" className="genric-btn disable circle">Disable</Link>
            </div>
            <div className="button-group-area mt-40">
              <Link to="#" className="genric-btn default circle arrow">Default<span
                className="lnr lnr-arrow-right"></span></Link>
              <Link to="#" className="genric-btn primary circle arrow">Primary<span
                className="lnr lnr-arrow-right"></span></Link>
              <Link to="#" className="genric-btn success circle arrow">Success<span
                className="lnr lnr-arrow-right"></span></Link>
              <Link to="#" className="genric-btn info circle arrow">Info<span
                className="lnr lnr-arrow-right"></span></Link>
              <Link to="#" className="genric-btn warning circle arrow">Warning<span
                className="lnr lnr-arrow-right"></span></Link>
              <Link to="#" className="genric-btn danger circle arrow">Danger<span
                className="lnr lnr-arrow-right"></span></Link>
            </div>
            <div className="button-group-area mt-10">
              <Link to="#" className="genric-btn default-border circle arrow">Default<span
                className="lnr lnr-arrow-right"></span></Link>
              <Link to="#" className="genric-btn primary-border circle arrow">Primary<span
                className="lnr lnr-arrow-right"></span></Link>
              <Link to="#" className="genric-btn success-border circle arrow">Success<span
                className="lnr lnr-arrow-right"></span></Link>
              <Link to="#" className="genric-btn info-border circle arrow">Info<span
                className="lnr lnr-arrow-right"></span></Link>
              <Link to="#" className="genric-btn warning-border circle arrow">Warning<span
                className="lnr lnr-arrow-right"></span></Link>
              <Link to="#" className="genric-btn danger-border circle arrow">Danger<span
                className="lnr lnr-arrow-right"></span></Link>
            </div>
            <div className="button-group-area mt-40">
              <Link to="#" className="genric-btn primary e-large">Extra Large</Link>
              <Link to="#" className="genric-btn success large">Large</Link>
              <Link to="#" className="genric-btn primary">Default</Link>
              <Link to="#" className="genric-btn success medium">Medium</Link>
              <Link to="#" className="genric-btn primary small">Small</Link>
            </div>
            <div className="button-group-area mt-10">
              <Link to="#" className="genric-btn primary-border e-large">Extra Large</Link>
              <Link to="#" className="genric-btn success-border large">Large</Link>
              <Link to="#" className="genric-btn primary-border">Default</Link>
              <Link to="#" className="genric-btn success-border medium">Medium</Link>
              <Link to="#" className="genric-btn primary-border small">Small</Link>
            </div>
          </div>
        </section>


        <div className="whole-wrap">
          <div className="container box_1170">
            <div className="section-top-border">
              <h3 className="mb-30">Left Aligned</h3>
              <div className="row">
                <div className="col-md-3">
                  <img src="assets/img/elements/d.jpg" alt="" className="img-fluid"/>
                </div>
                <div className="col-md-9 mt-sm-20">
                  <p>Recently, the US Federal government banned online casinos from operating in America by making
                    it illegal to
                    transfer money to them through any US bank or payment system. As a result of this law, most
                    of the popular
                    online casino networks such as Party Gaming and PlayTech left the United States. Overnight,
                    online casino
                    players found themselves being chased by the Federal government. But, after a fortnight, the
                    online casino
                    industry came up with a solution and new online casinos started taking root. These began to
                    operate under a
                    different business umbrella, and by doing that, rendered the transfer of money to and from
                    them legal. A major
                    part of this was enlisting electronic banking systems that would accept this new
                    clarification and start doing
                    business with me. Listed in this article are the electronic banking systems that accept
                    players from the United
                    States that wish to play in online casinos.</p>
                </div>
              </div>
            </div>
            <div className="section-top-border text-right">
              <h3 className="mb-30">Right Aligned</h3>
              <div className="row">
                <div className="col-md-9">
                  <p className="text-right">Over time, even the most sophisticated, memory packed computer can begin
                    to run slow if we
                    don’t do something to prevent it. The reason why has less to do with how computers are made
                    and how they age and
                    more to do with the way we use them. You see, all of the daily tasks that we do on our PC
                    from running programs
                    to downloading and deleting software can make our computer sluggish. To keep this from
                    happening, you need to
                    understand the reasons why your PC is getting slower and do something to keep your PC
                    running at its best. You
                    can do this through regular maintenance and PC performance optimization programs</p>
                  <p className="text-right">Before we discuss all of the things that could be affecting your PC’s
                    performance, let’s
                    talk a little about what symptoms</p>
                </div>
                <div className="col-md-3">
                  <img src="assets/img/elements/d.jpg" alt="" className="img-fluid"/>
                </div>
              </div>
            </div>
            <div className="section-top-border">
              <h3 className="mb-30">Definition</h3>
              <div className="row">
                <div className="col-md-4">
                  <div className="single-defination">
                    <h4 className="mb-20">Definition 01</h4>
                    <p>Recently, the US Federal government banned online casinos from operating in America by
                      making it illegal to
                      transfer money to them through any US bank or payment system. As a result of this law,
                      most of the popular
                      online casino networks</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-defination">
                    <h4 className="mb-20">Definition 02</h4>
                    <p>Recently, the US Federal government banned online casinos from operating in America by
                      making it illegal to
                      transfer money to them through any US bank or payment system. As a result of this law,
                      most of the popular
                      online casino networks</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-defination">
                    <h4 className="mb-20">Definition 03</h4>
                    <p>Recently, the US Federal government banned online casinos from operating in America by
                      making it illegal to
                      transfer money to them through any US bank or payment system. As a result of this law,
                      most of the popular
                      online casino networks</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-top-border">
              <h3 className="mb-30">Block Quotes</h3>
              <div className="row">
                <div className="col-lg-12">
                  <blockquote className="generic-blockquote">
                    “Recently, the US Federal government banned online casinos from operating in America by
                    making it illegal to
                    transfer money to them through any US bank or payment system. As a result of this law, most
                    of the popular
                    online casino networks such as Party Gaming and PlayTech left the United States. Overnight,
                    online casino
                    players found themselves being chased by the Federal government. But, after a fortnight, the
                    online casino
                    industry came up with a solution and new online casinos started taking root. These began to
                    operate under a
                    different business umbrella, and by doing that, rendered the transfer of money to and from
                    them legal. A major
                    part of this was enlisting electronic banking systems that would accept this new
                    clarification and start doing
                    business with me. Listed in this article are the electronic banking”
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="section-top-border">
              <h3 className="mb-30">Table</h3>
              <div className="progress-table-wrap">
                <div className="progress-table">
                  <div className="table-head">
                    <div className="serial">#</div>
                    <div className="country">Countries</div>
                    <div className="visit">Visits</div>
                    <div className="percentage">Percentages</div>
                  </div>
                  <div className="table-row">
                    <div className="serial">01</div>
                    <div className="country"><img src={f1} alt="flag"/>Canada</div>
                    <div className="visit">645032</div>
                    <div className="percentage">
                      <div className="progress">
                        <div
                          className="progress-bar color-1"
                          role="progressbar"
                          style={{width: "80%"}}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="serial">02</div>
                    <div className="country"><img src={f2} alt="flag"/>Canada</div>
                    <div className="visit">645032</div>
                    <div className="percentage">
                      <div className="progress">
                        <div
                          className="progress-bar color-2"
                          role="progressbar"
                          style={{width: "30%"}}
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="serial">03</div>
                    <div className="country"><img src={f3} alt="flag" />Canada</div>
                    <div className="visit">645032</div>
                    <div className="percentage">
                      <div className="progress">
                        <div
                          className="progress-bar color-3"
                          role="progressbar"
                          style={{width: "55%"}}
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="serial">04</div>
                    <div className="country"><img src={f4} alt="flag" />Canada</div>
                    <div className="visit">645032</div>
                    <div className="percentage">
                      <div className="progress">
                        <div
                          className="progress-bar color-4"
                          role="progressbar"
                          style={{width: "60%"}}
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="serial">05</div>
                    <div className="country"><img src={f5} alt="flag" />Canada</div>
                    <div className="visit">645032</div>
                    <div className="percentage">
                      <div className="progress">
                        <div
                          className="progress-bar color-5"
                          role="progressbar"
                          style={{width: "40%"}}
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="serial">06</div>
                    <div className="country"><img src={f6} alt="flag" />Canada</div>
                    <div className="visit">645032</div>
                    <div className="percentage">
                      <div className="progress">
                        <div
                          className="progress-bar color-6"
                          role="progressbar"
                          style={{width: "70%"}}
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="serial">07</div>
                    <div className="country"><img src={f7} alt="flag" />Canada</div>
                    <div className="visit">645032</div>
                    <div className="percentage">
                      <div className="progress">
                        <div
                          className="progress-bar color-7"
                          role="progressbar"
                          style={{width: "30%"}}
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="serial">08</div>
                    <div className="country"><img src={f8} alt="flag" />Canada</div>
                    <div className="visit">645032</div>
                    <div className="percentage">
                      <div className="progress">
                        <div
                          className="progress-bar color-8"
                          role="progressbar"
                          style={{width: "60%"}}
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-top-border">
              <h3>Image Gallery</h3>
              <div className="row gallery-item">
                <div className="col-md-4">
                  <Link to="assets/img/elements/g1.jpg" className="img-pop-up">
                    <div className="single-gallery-image" style={{backgroundImage: `url(${g1})`}}></div>
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link to="assets/img/elements/g2.jpg" className="img-pop-up">
                    <div className="single-gallery-image" style={{backgroundImage: `url(${g2})`}}></div>
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link to="assets/img/elements/g3.jpg" className="img-pop-up">
                    <div className="single-gallery-image" style={{backgroundImage: `url(${g3})`}}></div>
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link to="assets/img/elements/g4.jpg" className="img-pop-up">
                    <div className="single-gallery-image" style={{backgroundImage: `url(${g4})`}}></div>
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link to="assets/img/elements/g5.jpg" className="img-pop-up">
                    <div className="single-gallery-image" style={{backgroundImage: `url(${g5})`}}></div>
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link to="assets/img/elements/g6.jpg" className="img-pop-up">
                    <div className="single-gallery-image" style={{backgroundImage: `url(${g6})`}}></div>
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link to="assets/img/elements/g7.jpg" className="img-pop-up">
                    <div className="single-gallery-image" style={{backgroundImage: `url(${g7})`}}></div>
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link to="assets/img/elements/g8.jpg" className="img-pop-up">
                    <div className="single-gallery-image" style={{backgroundImage: `url(${g8})`}}></div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="section-top-border">
              <div className="row">
                <div className="col-md-4">
                  <h3 className="mb-20">Image Gallery</h3>
                  <div className="typography">
                    <h1>This is header 01</h1>
                    <h2>This is header 02</h2>
                    <h3>This is header 03</h3>
                    <h4>This is header 04</h4>
                    <h5>This is header 01</h5>
                    <h6>This is header 01</h6>
                  </div>
                </div>
                <div className="col-md-4 mt-sm-30">
                  <h3 className="mb-20">Unordered List</h3>
                  <div className="">
                    <ul className="unordered-list">
                      <li>Fta Keys</li>
                      <li>For Women Only Your Computer Usage</li>
                      <li>Facts Why Inkjet Printing Is Very Appealing
                        <ul>
                          <li>Addiction When Gambling Becomes
                            <ul>
                              <li>Protective Preventative Maintenance</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>Dealing With Technical Support 10 Useful Tips</li>
                      <li>Make Myspace Your Best Designed Space</li>
                      <li>Cleaning And Organizing Your Computer</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 mt-sm-30">
                  <h3 className="mb-20">Ordered List</h3>
                  <div className="">
                    <ol className="ordered-list">
                      <li><span>Fta Keys</span></li>
                      <li><span>For Women Only Your Computer Usage</span></li>
                      <li><span>Facts Why Inkjet Printing Is Very Appealing</span>
                        <ol className="ordered-list-alpha">
                          <li><span>Addiction When Gambling Becomes</span>
                            <ol className="ordered-list-roman">
                              <li><span>Protective Preventative Maintenance</span></li>
                            </ol>
                          </li>
                        </ol>
                      </li>
                      <li><span>Dealing With Technical Support 10 Useful Tips</span></li>
                      <li><span>Make Myspace Your Best Designed Space</span></li>
                      <li><span>Cleaning And Organizing Your Computer</span></li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-top-border">
              <div className="row">
                <div className="col-lg-8 col-md-8">
                  <h3 className="mb-30">Form Element</h3>
                  <form action="#">
                    <div className="mt-10">
                      <input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        required
                        className="single-input"/>
                    </div>
                    <div className="mt-10">
                      <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        required
                        className="single-input"/>
                    </div>
                    <div className="mt-10">
                      <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        required
                        className="single-input"/>
                    </div>
                    <div className="mt-10">
                      <input
                        type="email"
                        name="EMAIL"
                        placeholder="Email address"
                        required
                        className="single-input"/>
                    </div>
                    <div className="input-group-icon mt-10">
                      <div className="icon"><i className="fa fa-thumb-tack" aria-hidden="true"></i></div>
                      <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        required
                        className="single-input"/>
                    </div>
                    <div className="input-group-icon mt-10">
                      <div className="icon"><i className="fa fa-plane" aria-hidden="true"></i></div>
                      <div className="form-select" id="default-select">
                        <select>
                          <option value="1">City</option>
                          <option value="1">Dhaka</option>
                          <option value="1">Dilli</option>
                          <option value="1">Newyork</option>
                          <option value="1">Islamabad</option>
                        </select>
                      </div>
                    </div>
                    <div className="input-group-icon mt-10">
                      <div className="icon"><i className="fa fa-globe" aria-hidden="true"></i></div>
                      <div className="form-select" id="default-select">
                        <select>
                          <option value=" 1">Country</option>
                          <option value="1">Bangladesh</option>
                          <option value="1">India</option>
                          <option value="1">England</option>
                          <option value="1">Srilanka</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-10">
								<textarea
                  className="single-textarea"
                  placeholder="Message"
                  required
                />
                    </div>


                    <div className="primary-input">
                      <input
                        id="primary-input"
                        type="text"
                        name="first_name"
                        placeholder="Primary color"
                      />
                      <label for="primary-input"/>
                    </div>

                <div className="mt-10">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Primary color"
                    required
                    className="single-input-primary"
                  />
                </div>
                <div className="mt-10">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Accent color"
                    required
                    className="single-input-accent"
                  />
                </div>
                <div className="mt-10">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Secondary color"
                    required
                    className="single-input-secondary"
                  />
                </div>
              </form>
            </div>
            <div className="col-lg-3 col-md-4 mt-sm-30">
              <div className="single-element-widget">
                <h3 className="mb-30">Switches</h3>
                <div className="switch-wrap d-flex justify-content-between">
                  <p>01. Sample Switch</p>
                  <div className="primary-switch">
                    <input type="checkbox" id="default-switch"/>
                    <label for="default-switch"/>
                  </div>
                </div>
                <div className="switch-wrap d-flex justify-content-between">
                  <p>02. Primary Color Switch</p>
                  <div className="primary-switch">
                    <input type="checkbox" id="primary-switch" checked/>
                    <label for="primary-switch"/>
                  </div>
                </div>
                <div className="switch-wrap d-flex justify-content-between">
                  <p>03. Confirm Color Switch</p>
                  <div className="confirm-switch">
                    <input type="checkbox" id="confirm-switch" checked/>
                    <label for="confirm-switch"/>
                  </div>
                </div>
              </div>
              <div className="single-element-widget mt-30">
                <h3 className="mb-30">Selectboxes</h3>
                <div className="default-select" id="default-select">
                  <select>
                    <option value="1">English</option>
                    <option value="1">Spanish</option>
                    <option value="1">Arabic</option>
                    <option value="1">Portuguise</option>
                    <option value="1">Bengali</option>
                  </select>
                </div>
              </div>
              <div className="single-element-widget mt-30">
                <h3 className="mb-30">Checkboxes</h3>
                <div className="switch-wrap d-flex justify-content-between">
                  <p>01. Sample Checkbox</p>
                  <div className="primary-checkbox">
                    <input type="checkbox" id="default-checkbox" />
                      <label for="default-checkbox" />
                  </div>
                </div>
                <div className="switch-wrap d-flex justify-content-between">
                  <p>02. Primary Color Checkbox</p>
                  <div className="primary-checkbox">
                    <input type="checkbox" id="primary-checkbox" checked />
                      <label for="primary-checkbox" />
                  </div>
                </div>
                <div className="switch-wrap d-flex justify-content-between">
                  <p>03. Confirm Color Checkbox</p>
                  <div className="confirm-checkbox">
                    <input type="checkbox" id="confirm-checkbox" />
                      <label for="confirm-checkbox" />
                  </div>
                </div>
                <div className="switch-wrap d-flex justify-content-between">
                  <p>04. Disabled Checkbox</p>
                  <div className="disabled-checkbox">
                    <input type="checkbox" id="disabled-checkbox" disabled />
                      <label for="disabled-checkbox" />
                  </div>
                </div>
                <div className="switch-wrap d-flex justify-content-between">
                  <p>05. Disabled Checkbox active</p>
                  <div className="disabled-checkbox">
                    <input type="checkbox" id="disabled-checkbox-active" checked disabled />
                      <label for="disabled-checkbox-active" />
                  </div>
                </div>
              </div>
              <div className="single-element-widget mt-30">
                <h3 className="mb-30">Radios</h3>
                <div className="switch-wrap d-flex justify-content-between">
                  <p>01. Sample radio</p>
                  <div className="primary-radio">
                    <input type="checkbox" id="default-radio" />
                      <label for="default-radio" />
                  </div>
                </div>
                <div className="switch-wrap d-flex justify-content-between">
                  <p>02. Primary Color radio</p>
                  <div className="primary-radio">
                    <input type="checkbox" id="primary-radio" checked />
                      <label for="primary-radio" />
                  </div>
                </div>
                <div className="switch-wrap d-flex justify-content-between">
                  <p>03. Confirm Color radio</p>
                  <div className="confirm-radio">
                    <input type="checkbox" id="confirm-radio" checked />
                      <label for="confirm-radio" />
                  </div>
                </div>
                <div className="switch-wrap d-flex justify-content-between">
                  <p>04. Disabled radio</p>
                  <div className="disabled-radio">
                    <input type="checkbox" id="disabled-radio" disabled />
                      <label for="disabled-radio" />
                  </div>
                </div>
                <div className="switch-wrap d-flex justify-content-between">
                  <p>05. Disabled radio active</p>
                  <div className="disabled-radio">
                    <input type="checkbox" id="disabled-radio-active" checked disabled />
                      <label for="disabled-radio-active" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  </Wrapper>
  )
  }
  }


  const mapStateToProps = (state) => ({});

  const mapDispatchToProps = {};

  const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
  )(Elements);

  export default Container;
