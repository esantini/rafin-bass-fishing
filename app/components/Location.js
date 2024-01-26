import styles from '../styles/Home.module.css';

const isDev = process.env.NEXT_PUBLIC_DEV;

export default function Location() {
  return (
    <section className={styles.location} id='location' >
      <h2>LOCATION</h2>

      <div className={styles.locationMaps}>
        <div>
          <h3>Office: </h3>
          {!isDev &&
            <iframe title="Rafin Office Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1052.323037143803!2d-109.92932438706389!3d27.4823732036178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x71ac24552a37e1e!2sRAFIN+BASS+%26+FISHING!5e0!3m2!1ses-419!2smx!4v1472329815406" frameBorder="0" allowFullScreen></iframe>
          }
        </div>

        <div>
          <h3>El Oviachic Lake: </h3>
          {!isDev &&
            <iframe title="Oviachic Lake Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225868.67299635903!2d-109.98741575367617!3d27.80367514621626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c88ec268088c79%3A0x13b2779a0bd98a6a!2sEl+Oviachic!5e0!3m2!1ses-419!2smx!4v1470279716894" frameBorder="0" allowFullScreen></iframe>
          }
        </div>
      </div>
    </section>
  );
}