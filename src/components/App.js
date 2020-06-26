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

  onChangeType = (pet) => {
    this.setState({
      filters: {
        ...this.state.filters, 
        type: pet}
    })
    
    let url = '/api/pets'

    pet === 'all' ? url = '/api/pets' : url = `/api/pets?type=${pet}`

    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pets: data
      })
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
              <Filters onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
