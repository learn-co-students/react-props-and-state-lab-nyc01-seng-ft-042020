import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {console.log(this.props.pet)}
            {this.props.pet.gender === "female" ? '♀' : '♂' }
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {/* {console.log(this.props.pet.isAdopted)} */}
          {this.props.pet.isAdopted 
          ? 
          <button className="ui disabled button">Already adopted</button> 
          : 
          <button className="ui primary button" onClick={(event) => this.props.onAdoptPet(event, this.props.pet.id)}>Adopt pet</button>}
          {/* {console.log(this.props.pet.isAdopted)} */}
        </div>
      </div>
    )
  }
}

export default Pet
