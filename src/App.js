//1st import

import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast'

//2nd import

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: '',
      showModal: false,
      selectedBeast: '',
      selectedDescription: '',
      selectedImg: '',
    }
  }
  addHearts = () => {
    this.setState({
      heart: this.state.heart + '🖤'
    })
  }
  handleOpenModal = (name, description, image_url) => {
    this.setState({
      showModal: true,
      selectedBeast: name,
      selectedDescription: description,
      selectedImg: image_url,
    })
  }
  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }
render(){
  return (
    <>
      <Header heart={this.state.heart}/>
      <Main 
      addHearts={this.addHearts} 
      handleOpenModal={this.handleOpenModal}
      />
      <SelectedBeast
      handleOpenModal={this.handleOpenModal}
      handleCloseModal={this.handleCloseModal}
      showModal={this.state.showModal}
      selectedBeast={this.state.selectedBeast}
      selectedDescription={this.state.selectedDescription}
      selectedImg={this.state.selectedImg}
      />
      <Footer />
    </>
  )
}
}

//3rd export the component

export default App;