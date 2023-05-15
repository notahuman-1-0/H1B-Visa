import React, { Component } from 'react';

class Toggle extends Component{
  handleClick(event){
    this.props.onClick(this.props.name,!this.props.value);
  }

  render(){
    let className = "btn btn-info";

    if(this.props.value){
      className += " btn-default";
    }
    return(
      <button className={className} onClick={this.handleClick.bind(this)}>
      {this.props.label}
      </button>
    );
  }
}
export default Toggle;
