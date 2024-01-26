import { useState } from 'react';
import SelectDay from './SelectDay';
import SelectMonth from './SelectMonth';
import SelectDayCount from './SelectDayCount';
import SelectSubject from './SelectSubject';
import styles from '../styles/Home.module.css';

const getFormMessage = status => {
  let message;
  if (status === 'sending') message = <h3>Sending...</h3>;
  else if (status === 'sent') message = <h3>Gracias!<br />I&apos;ll get back to you as soon as I can</h3>;
  if (!message) return null;
  return <div className={styles.sending}>{message}</div>;
}

export default function Booking() {
  const [subject, setSubject] = useState('Booking');
  const [status, setStatus] = useState('');
  const isBooking = subject === 'Booking';

  const submitBooking = async e => {
    e.preventDefault();
    setStatus('sending');

    const subject = e.target.subject.value;
    const formBody = {
      name: e.target.name.value,
      subject,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    if (isBooking) {
      formBody.when = `${e.target.month.value} ${e.target.day.value}`;
      formBody.days = e.target.days.value;
    }

    await fetch('/api/booking', {
      body: JSON.stringify(formBody),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(
      () => setStatus('sent')
    ).catch(err => {
      console.err(err);
      setStatus('error');
    });
  }

  return (
    <section className={styles.booking} id='booking'>
      <h2>BOOKING</h2>

      <div className={`${styles.contact} ${status === 'sent' ? styles.sent : ''}`}>

        <p>
          If you want to make a reservation, ask me a question or simply check if a date is available feel free to use the form below
          or contact me directly via email at <strong>raosga@hotmail.com</strong>
        </p>

        <dl>
          <dt>Rafin Bass Fishing Guides at el Oviachic</dt>
          <dd><strong>Phone:</strong> +52 1 (644) 998-8783</dd>
          <dd><strong>Address:</strong> Jalisco 950 Sur, Ciudad Obreg&oacute;n, Sonora, M&eacute;xico</dd>
          <dd><strong>Email:</strong> raosga@hotmail.com</dd>
        </dl>

        <form onSubmit={submitBooking} method='POST' name='booking' id='bookingform'>
          {getFormMessage(status)}
          <div className={styles.formContent}>
            <h3 style={{ marginBottom: 0 }}>Contact me: </h3>
            <div className={styles.formColumns}>

              <div className={styles.selectFields}>

                <SelectSubject setValue={setSubject} />
                <div className={`${styles.bookingSelectContainer} ${isBooking ? '' : styles.hide}`} >
                  <div className={styles.bookingSelect} >
                    <h4>When</h4>
                    <div>
                      <SelectMonth required={isBooking} />
                      <SelectDay required={isBooking} />
                    </div>
                  </div>

                  <div className={styles.bookingSelect} >
                    <h4>How Long?</h4>
                    <div>
                      <SelectDayCount />
                    </div>
                  </div>
                </div>

              </div>

              <div className={styles.textFields}>

                <input name="name" type="text" className={styles.bookingInput} id="name" placeholder='Your name' required />
                <input name="email" type="email" className={styles.bookingInput} id="email" placeholder='E-Mail' required />
                <input name="phone" type="tel" className={styles.bookingInput} id="phone" placeholder='Phone' />
                <textarea name="message" className={styles.bookingInput} id="message" placeholder='Your Comments or Questions' required={subject === "Message"} />

                <div>
                  <input type='submit' name='submit' value='send' className="active" />
                </div>
              </div>

            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
