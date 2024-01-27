import Image from 'next/image';
import NavBar from '../components/NavBar';
import FbSection from '../components/FbSection';
import AboutUs from '../components/AboutUs';
import Location from '../components/Location';
import Gallery from '../components/Gallery';
import Faq from '../components/Faq';
import Booking from '../components/Booking';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export const metadata = {
  title: 'RAFIN BASS FISHING GUIDES',
  icon: '/favicon.ico',
  keywords: 'bass, fishing, oviachic, rafin, Guides, Bass fishing guides, Oviachic lake, Fishing in mexico, Black bass, Large mouth bass, Presa el oviachic, Lobina, Lobina negra, Pesca deportiva, fishing guides, come and live it, obregon, sonora, mexico',
  description: 'Rafin Bass Fishing Guides At El Oviachic is a friends trip kind, based on in-town food, great fishing days and having a great time.',
}
export const viewport = {
  width: 'device-width',
  initialScale: '0.6',
}

function Home() {
  return (
    <div className={styles.container} id="root">
      <div className="main-bg">
        <Image
          src="/bg.jpg"
          fill
          className="main-bg"
          style={{
            objectFit: 'cover',
            objectPosition: 'top'
          }}
          alt="Rafin Bass Fishing Background"
        />
      </div>

      <NavBar />

      <main className={styles.main}>
        <div className={styles.topPanel} id="home">

          <header>
            <h1>Rafin Bass Fishing Guides At El Oviachic</h1>
            <p>is a friends trip kind, based on in-town food, great fishing days and having a great time.</p>
            <h2>COME AND LIVE IT!</h2>
            <h3 className="amigo-style">Amigo Style!</h3>
          </header>

          <FbSection />
        </div>

        <AboutUs />

        <Location />

        <Gallery />

        <Faq />

        <Booking />

        <Footer />

      </main>

      <div id="fb-root"></div>
    </div>
  )
}

export default Home;
