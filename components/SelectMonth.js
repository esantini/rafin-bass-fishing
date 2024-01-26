import styles from '../styles/Home.module.css';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function SelectMonth({ required }) {
  return (
    <select name="month" id="month" className={styles.bookingInput} required={required}>
      <option value="">-Month-</option>
      {monthNames.map(month => (
        <option value={month} key={month}>{month}</option>
      ))}
    </select>
  );
}
