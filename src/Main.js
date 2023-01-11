import React from 'react';
import HornedBeast from './HornedBeast';
import Data from './data/data.json';
import './Main.css'

class Main extends React.Component {
  render() {
    return (
      <>
        <main>
          {Data.map((hornedbeast) => { 
            return <HornedBeast title={hornedbeast.title} imageURL={hornedbeast.image_url} />
          })}
        </main>
      </>
    )
  }
}

export default Main;