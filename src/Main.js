import React from 'react';
import HornedBeast from './HornedBeast';
import Data from './data/data.json';
import './Main.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  render() {
    return (
      <>
        <main>
          <Container>
            <Row xs={1} sm={2} md={3} lg={4}>
              {Data.map((hornedbeast, index) => {
                return (
                  <HornedBeast
                    title={hornedbeast.title}
                    imageURL={hornedbeast.image_url}
                    key={index}
                    description={hornedbeast.description}
                    addHearts={this.props.addHearts}
                    handleOpenModal={this.props.handleOpenModal}
                  />
                )
              })}
            </Row>
          </Container>
        </main>
      </>
    )
  }
}

export default Main;