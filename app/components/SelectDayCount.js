import styles from '../styles/Home.module.css';

export default function SelectDayCount() {
  return (
    <select name="days" id="days" className={styles.bookingInput} defaultValue={3}>

      <option value={1}>1 day</option>
      <option value={2}>2 days</option>
      <option value={3}>3 days</option>
      <option value={4}>4 days</option>
      <option value={5}>5 days</option>
      <option value={6}>6 days</option>
      <option value={7}>7 days</option>
      <option value={8}>8 days</option>
      <option value={9}>9 days</option>
      <option value={10}>10 days</option>

    </select>
  )
}
