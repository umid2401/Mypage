import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">Footer {this.props.myName[this.props.current]}
        <p>{this.props.myName[1]}</p>
        </div>
      </div>
    );
  }
}
