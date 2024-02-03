import styles from '../styles/Home.module.css';

export default function SelectSubject({ setValue }) {
  return (
    <div className={styles.selectSubject}>
      <ul>
        <li>
          <input name="subject" type="radio" id='subject0' value="Booking" defaultChecked onChange={e => setValue(e.target.value)} />
          <label htmlFor='subject0'>Booking</label>
          <div className={styles.check}></div>
        </li>
        <li>
          <input name="subject" type="radio" id='subject1' value="Message" onChange={e => setValue(e.target.value)} />
          <label htmlFor='subject1'>Comments or Questions</label>
          <div className={styles.check}></div>
        </li>
      </ul>
    </div>
  )
}