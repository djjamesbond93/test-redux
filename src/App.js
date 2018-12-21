import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { push } from "connected-react-router";

class Shopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <React.Fragment>Shopping</React.Fragment>;
  }
}

class Announce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <React.Fragment>Announce</React.Fragment>;
  }
}
class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>a</div>
    )
  }
}

export default App;
