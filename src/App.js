import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import MySection from "./components/MySection";
import Counter from "./components/Counter";

class App extends Component {
  state = {
    name: ["Ali", "Vali"],
    currentNameIndex: 0,
    count:0,
  };
  changeName=()=>{
  if(this.state.currentNameIndex===0){
    this.setState({
      currentNameIndex:1,
    })
  }
  else{
    this.setState({
      currentNameIndex:0,
    })
  }
  }
  plusChange=()=>{
    this.setState({
      count:this.state.count+1,
    })
  }
  minusChange=()=>{
    this.setState({
      count:this.state.count-1,
    })
  }
  
  render() {
    return (
      <div>
      
        <Navbar />
        <MySection 
        myName={this.state.name}
        changeName={this.changeName}
        current={this.state.currentNameIndex}
        />
        <Counter
        counter={this.state.count}
        plusChange={this.plusChange}
        minusChange={this.minusChange}
        />
        <Footer
         myName={this.state.name}
         current={this.state.currentNameIndex}
        />
       
      </div>
    );
   
  }
}

export default App;
