import React from 'react'
import Styles from './Card.module.css'

export const Card = ({person}) => {
  return <div className={Styles.card} key={person.id}>
    <p>{person.name}</p>
    <p>{person.height}</p>
    <p>{person.mass}</p>
    <p>{person.gender}</p>
    <p>{person.birth_year}</p>
  </div>
}