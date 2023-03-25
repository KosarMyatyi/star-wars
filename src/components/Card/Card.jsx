import Styles from './Card.module.css'

export const Card = ({ person }) => {
  return (
    <div className={Styles.card}>
      <a href='#!' className={Styles.cards}>
        <div className={Styles.cardName}>
          {person.name}
        </div>
        <div className={Styles.cardBoxContainer}>
          <div className={Styles.cardHeight}>
            <p>
              {person.height}
            </p>
          </div>
          <div className={Styles.cardMass}>
            <p>
              {person.mass}
            </p>
          </div>
        </div>
        <div className={Styles.cardBoxContainer}>
          <div className={Styles.cardDescHeight}>
              height
          </div>
          <div className={Styles.cardDescMass}>
              mass
          </div>
        </div>
        <div className={Styles.cardBoxContainer}>
          <div className={Styles.cardGender}>
            {person.gender}
          </div>
          <div className={Styles.cardBirthYear}>
            {person.birth_year}
          </div>
        </div>
      </a>
    </div>
  )
}

