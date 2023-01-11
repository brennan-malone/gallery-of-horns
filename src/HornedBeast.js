import React from 'react';
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waves: 0,
      helpMe: false,
    }
  }

  handleWave = () => {
    this.setState({
      waves: this.state.waves + 1
    })
  }
  needHelp = () => {
    this.setState({
      helpMe: true
    });
  }
  gotHelp = () => {
    this.setState({
      helpMe: false
    });
  }
  render() {
    return (
      <>
        <article>
          <h3>{this.props.title}</h3>
          <p>Greetings</p>
          <p onClick={this.handleWave}> Hi {this.state.waves} {this.props.description}</p>
          <img alt="the beast" src={this.props.imageURL} />
          <Button onClick={this.needHelp}>I need help</Button>
          <Button onClick={this.gotHelp}>I got helped</Button>
          <div>{this.state.helpMe ? 'I need Help' : ''}</div>
        </article>
      </>
    )
  }
}

export default HornedBeast;