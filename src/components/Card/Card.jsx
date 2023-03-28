import Styles from './Card.module.css'

export const Card = ({ person, setPerson }) => {
  const checkColor = () => {
    switch (person.gender) {
      case 'male':
        return 'green';
      case 'female':
        return 'red';
      case 'hermaphrodite':
        return 'yellow';
      default:
        return null;
    }
  }

  return (
    <div onClick={() => setPerson(person)} className={Styles.card}>
      <div className={Styles.cardName}>
        {person.name}
      </div>
      <div className={Styles.cardBoxContainer}>
        <div className={Styles.cardHeight}>
          {person.height === 'unknown' ? 0: person.height}
        </div>
        <div className={Styles.cardMass}>
          {person.mass === 'unknown' ? 0 : person.mass}
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
        {person.gender !== 'n/a' && <div className={Styles.cardGender} style={{background: checkColor()}}> {person.gender} </div>}
        <div className={Styles.cardBirthYear}>
          {person.birth_year}
        </div>
      </div>
    </div>
  )
}

