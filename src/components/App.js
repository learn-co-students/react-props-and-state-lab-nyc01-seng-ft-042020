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

  onChangeType = (type) => {
    this.setState({
      filters: {
        type: type
      }
    })
  }
  
  updatePets = (pets) => {
    this.setState({ pets: pets })
  }

  onFindPetsClick = () => {
    const PETS_URL = '/api/pets'
    const type = this.state.filters.type

    if (type === "all") {
      fetch(PETS_URL)
        .then(resp => resp.json())
        .then(json => this.updatePets(json))
    }

    else {
      fetch(PETS_URL + `?type=${type}`)
        .then(resp => resp.json())
        .then(json => this.updatePets(json))
    }
  }

  onAdoptPet = (id) => {
    const pets = this.state.pets.map(pet => {return pet.id === id ? {...pet, isAdopted: true} : pet})

    this.setState({
      pets: pets
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
