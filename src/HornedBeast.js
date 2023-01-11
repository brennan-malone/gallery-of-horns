import React from 'react';
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
      helpMe: false,
    }
  }

  handleFavorite = () => {
    this.setState({
      favorites: this.state.favorites + 1
    })
  }
  render() {
    
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.imageURL} alt="the beast" />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            {this.props.description}
            </Card.Text>
            <Button onClick={this.handleFavorite} variant="primary">FAVORITE: 🖤 {this.state.favorites}</Button>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default HornedBeast;