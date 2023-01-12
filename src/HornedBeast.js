import React from 'react';
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    }
  }

  handleFavorite = () => {
    this.setState({
      favorites: this.state.favorites + 1
    })
  }
  handleNameClick = () => {
    this.props.handleOpenModal(this.props.title, this.props.description, this.props.imageURL)
  }
  render() {

    return (
      <>
        <Col>
          <Card onClick={this.handleNameClick}>
            <Card.Img variant="top" src={this.props.imageURL} alt="the beast" onClick={this.props.addHearts}/>
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                {this.props.description}
              </Card.Text>
              <Button onClick={this.handleFavorite} variant="primary">FAVORITE: 🖤 {this.state.favorites}</Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    )
  }
}

export default HornedBeast;