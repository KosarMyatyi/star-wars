import Styles from './ColorEyeSelect.module.css';

export const ColorEyeSelect = ({filter, setFilter}) => {
  return (
    <label>
      color eye
      <select className={Styles.colorEyeSelect} name="ColorEyeFilter" value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="brown">brown</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="white">white</option>
        <option value="black">black</option>
        <option value="yellow">yellow</option>
      </select>
    </label>
  )
}