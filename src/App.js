//1st import

import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast'
import HornForm from './HornForm'
import Data from './data/data.json';


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
      horns: '',
      sortedData: Data,
      allBeasts: Data,
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
  handleChangeHorn = (event) => {
    event.preventDefault();
    let checkboxOne = document.getElementById('inline-checkbox-1');
    let checkboxTwo = document.getElementById('inline-checkbox-2');
    let checkboxThree = document.getElementById('inline-checkbox-3');
    let checkboxOnehundred = document.getElementById('inline-checkbox-4');
    let newSortedData = this.state.sortedData;

    if ((checkboxOne.checked === false) && (checkboxTwo.checked === false) && (checkboxThree.checked === false) && (checkboxOnehundred.checked === false)) {
      newSortedData = this.state.allBeasts

      this.setState({
        sortedData: newSortedData,
      })

    } else if ((checkboxOne.checked === true) && (checkboxTwo.checked === true) && (checkboxThree.checked === true) && (checkboxOnehundred.checked === true)) {
      newSortedData = this.state.allBeasts

      this.setState({
        sortedData: newSortedData,
      })
 
    } else if ((checkboxOne.checked === true) && (checkboxTwo.checked === true) && (checkboxThree.checked === true) && (checkboxOnehundred.checked === false)) {
      newSortedData = this.state.allBeasts.filter(selectedBeast => selectedBeast.horns <= 4);

      this.setState({
        sortedData: newSortedData,
      })
 
    } else if ((checkboxOne.checked === true) && (checkboxTwo.checked === true) && (checkboxThree.checked === false) && (checkboxOnehundred.checked === true)) {
      newSortedData = this.state.allBeasts.filter(selectedBeast => selectedBeast.horns === (1 || 2 || 100));

      this.setState({
        sortedData: newSortedData,
      })
 
    } else if ((checkboxOne.checked === true) && (checkboxTwo.checked === false) && (checkboxThree.checked === true) && (checkboxOnehundred.checked === true)) {
      newSortedData = this.state.allBeasts.filter(selectedBeast => selectedBeast.horns === (1 || 3 || 100));

      this.setState({
        sortedData: newSortedData,
      })

    } else if ((checkboxOne.checked === false) && (checkboxTwo.checked === true) && (checkboxThree.checked === true) && (checkboxOnehundred.checked === true)) {
      newSortedData = this.state.allBeasts.filter(selectedBeast => selectedBeast.horns >= 2);

      this.setState({
        sortedData: newSortedData,
      })

    } else if ((checkboxOne.checked === true) && (checkboxTwo.checked === true) && (checkboxThree.checked === false) && (checkboxOnehundred.checked === false)) {
      newSortedData = this.state.allBeasts.filter(selectedBeast => selectedBeast.horns === (1 || 2));

      this.setState({
        sortedData: newSortedData,
      })

    } else if ((checkboxOne.checked === true) && (checkboxTwo.checked === true) && (checkboxThree.checked === false) && (checkboxOnehundred.checked === false)) {
      newSortedData = this.state.allBeasts.filter(selectedBeast => selectedBeast.horns === (1 || 3));

      this.setState({
        sortedData: newSortedData,
      })

    } else if ((checkboxOne.checked === true) && (checkboxTwo.checked === false) && (checkboxThree.checked === false) && (checkboxOnehundred.checked === true)) {
      newSortedData = this.state.allBeasts.filter(selectedBeast => selectedBeast.horns === (1 || 100));

      this.setState({
        sortedData: newSortedData,
      })

    } else if ((checkboxOne.checked === false) && (checkboxTwo.checked === true) && (checkboxThree.checked === true) && (checkboxOnehundred.checked === false)) {
      newSortedData = this.state.allBeasts.filter(selectedBeast => selectedBeast.horns === (2 || 3));

      this.setState({
        sortedData: newSortedData,
      })

    } else if ((checkboxOne.checked === false) && (checkboxTwo.checked === true) && (checkboxThree.checked === false) && (checkboxOnehundred.checked === true)) {
      newSortedData = this.state.allBeasts.filter(selectedBeast => selectedBeast.horns === (2 || 100));

      this.setState({
        sortedData: newSortedData,
      })

    } else if ((checkboxOne.checked === false) && (checkboxTwo.checked === false) && (checkboxThree.checked === true) && (checkboxOnehundred.checked === true)) {
      newSortedData = this.state.allBeasts.filter(selectedBeast => selectedBeast.horns === (3 || 100));

      this.setState({
        sortedData: newSortedData,
      })
    } else if ((checkboxOne.checked === false) && (checkboxTwo.checked === false) && (checkboxThree.checked === false) && (checkboxOnehundred.checked === true)) {
      newSortedData = this.state.allBeasts.filter(selectedBeast => selectedBeast.horns === (100));

      this.setState({
        sortedData: newSortedData,
      })
    } else if ((checkboxOne.checked === false) && (checkboxTwo.checked === false) && (checkboxThree.checked === true) && (checkboxOnehundred.checked === false)) {
      newSortedData = this.state.allBeasts.filter(selectedBeast => selectedBeast.horns === (3));

      this.setState({
        sortedData: newSortedData,
      })
    } else if ((checkboxOne.checked === false) && (checkboxTwo.checked === true) && (checkboxThree.checked === false) && (checkboxOnehundred.checked === false)) {
      newSortedData = this.state.allBeasts.filter(selectedBeast => selectedBeast.horns === (2));

      this.setState({
        sortedData: newSortedData,
      })
    } else if ((checkboxOne.checked === true) && (checkboxTwo.checked === false) && (checkboxThree.checked === false) && (checkboxOnehundred.checked === false)) {
      newSortedData = this.state.allBeasts.filter(selectedBeast => selectedBeast.horns === (1));

      this.setState({
        sortedData: newSortedData,
      })
    }


  }
  render() {
    return (
      <>
        <Header
          heart={this.state.heart}
        />
        <HornForm
          handleChangeHorn={this.handleChangeHorn}
          selectedHorns={this.state.selectedHorns}
        />
        <Main
          addHearts={this.addHearts}
          handleOpenModal={this.handleOpenModal}
          Data={this.state.sortedData}
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