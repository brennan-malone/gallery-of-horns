import React from 'react';
import HornedBeast from './HornedBeast';
import Data from './data/data.json';
import './Main.css'

class Main extends React.Component {
  render() {
    return (
      <>
        <main>
          {Data.map((hornedbeast, index) => { 
            return <HornedBeast title={hornedbeast.title} imageURL={hornedbeast.image_url} key={index} description={hornedbeast.description} />
          })}
        </main>
      </>
    )
  }
}

export default Main;