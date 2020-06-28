import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick = (event) => {
    if (this.state.filters.type === "all") {
      fetch("/api/pets")
      .then(r => r.json())
      .then(all => {
        this.setState({
          pets: all
        })
        console.log(all)
      })
    }
    if (this.state.filters.type === "cat") {
      fetch("/api/pets?type=cat")
      .then(r => r.json())
      .then(cats => {
        this.setState({
          pets: cats
        })
        console.log(cats)
      })
    }
    if (this.state.filters.type === "dog") {
      fetch("/api/pets?type=dog")
      .then(r => r.json())
      .then(dogs => {
        this.setState({
          pets: dogs
        })
        console.log(dogs)
      })
    }
    if (this.state.filters.type === "micropig") {
      fetch("/api/pets?type=micropig")
      .then(r => r.json())
      .then(micropigs => {
        this.setState({
          pets: micropigs
        })
        console.log(micropigs)
      })
    }
  }


  onAdoptPet = (event, petId) => {
    // event.preventDefault()
    let foundPet = this.state.pets.find(findPet => findPet.id === petId)
    let changedArray = this.state.pets.filter(pets => pets.id !== petId)
    foundPet.isAdopted = true
    changedArray.push(foundPet)
    this.setState({
      pets: changedArray
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
