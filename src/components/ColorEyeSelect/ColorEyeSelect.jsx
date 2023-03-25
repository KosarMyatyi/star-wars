import Styles from './ColorEyeSelect.module.css'

export default function ColorEyeSelect() {
  return (
    <label>
      Color eye:
      <select name="selectedColorEye" defaultValue="colorEye">
        <option value="All">All</option>
        <option value="brown">brown</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="white">white</option>
      </select>
    </label>
  )
}
