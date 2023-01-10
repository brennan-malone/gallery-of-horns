import React from 'react';

class HornedBeast extends React.Component{
  render(){
    return (
      <>
      <h2>{this.props.title}</h2>
      <img src='{this.props.imageURL}' alt='image of a horned beast' title='{this.props.title}'></img>
      <p>{this.props.description}</p>
      </>
    )
  }
}

export default HornedBeast;