import styles from '../styles/Home.module.css';

const options = [];
for (let i = 1; i <= 31; i++) {
  options.push(<option value={i} key={i}>{i}</option>);
}

export default function SelectDay({ required }) {
  return (
    <select name="day" id="day" className={styles.bookingInput} required={required}>
      <option value="">-Day-</option>
      {options}
    </select>
  );
}