import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from "./Header";
import Footer from "./Footer";

class Wrapper extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <Header />
          {this.props.children}
        <Footer />
      </>
    )
  }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Wrapper);

export default Container;
