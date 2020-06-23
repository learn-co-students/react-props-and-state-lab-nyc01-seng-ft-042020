import React from 'react'

class Pet extends React.Component {

  adoptPet = () => {
    const { id } = this.props.pet 

    this.props.onAdoptPet(id)
  }

  adoptedButton = (isAdopted) => {
    if (isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    }
    else {
      return <button className="ui primary button" onClick={this.adoptPet}>Adopt pet</button>
    }
  }

  render() {
    const { name, type, age, weight, gender, isAdopted } = this.props.pet

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === "female" ? '♀' : '♂'}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adoptedButton(isAdopted)}
        </div>
      </div>
    )
  }
}

export default Pet
