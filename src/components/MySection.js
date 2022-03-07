import React, { Component } from 'react';

class MySection extends Component {
  state={
    name:["ALI","VALI"],
    id:"ALI",
    currentNameIndex:0,
  }
  // changeIndex (){
  // if(this.state.currentNameIndex===1){
  //   this.setState({
    
  //     currentNameIndex:0,
    

   
  // })
  // }
  // else{
  //   this.setState({
    
  //     currentNameIndex:1,
    

   
  // })
  // }
  // }
  render() {
    return (
      <div>
        <h6>asss asndflfme {this.props.myName[this.props.current]} </h6>
        {console.log(this.props.myName) }
        {/* <p>ASSALOMU ALAYKO'M {this.state.name[this.state.currentNameIndex]}</p> 
        <h4>qaliysan nima gaplar {this.state.name[1]} </h4>   */}
        <button 
        // onClick={()=>this.changeIndex()} 
        onClick={this.props.changeName}
        className="btn-danger btn">Change
        </button>
      </div>
    );
  }
}

export default MySection;