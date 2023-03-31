import Styles from './ColorEyeSelect.module.css'

const ColorEyeSelect = ({}) => {
  return (
    <label>
      color eye
      <select className={Styles.colorEyeSelect} name="ColorEyeFilter" defaultValue="All">
        <option value="All">All</option>
        <option value="brown">brown</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="white">white</option>
      </select>
    </label>
  )
}

export default ColorEyeSelect;
