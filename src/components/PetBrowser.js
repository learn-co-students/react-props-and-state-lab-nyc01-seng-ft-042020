import React from 'react'
import Pet from './Pet'

const PetBrowser = (props) => {

let petArray = props.pets.map(
  (pet) => {
  return (
  <Pet pets={pet} key={pet.id}/>)}
  )

    return(
    <div className="ui cards">{petArray}</div>
    )
}

export default PetBrowser
