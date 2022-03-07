import React, { Component } from "react";
import "./Section.css"

export default class Section extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <h1 style={{ color: "yellow", backgroundColor: "blue" }}>
            Hello world!
          </h1>
          <img src="./images/11.jpg" alt="123" />
        </div>
      </div>
    );
  }
}
