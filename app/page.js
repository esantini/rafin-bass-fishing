import Head from 'next/head';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import FbSection from '../components/FbSection';
import AboutUs from '../components/AboutUs';
import Location from '../components/Location';
import Gallery from '../components/Gallery';
import Faq from '../components/Faq';
import Booking from '../components/Booking';
import styles from '../styles/Home.module.css';

function Home({ images }) {
  return (
    <div className={styles.container} id="root">
      <div className="main-bg">
        <Image
          src="/bg.jpg"
          layout="fill"
          className="main-bg"
          objectFit="cover"
          objectPosition="top"
          alt="Rafin Bass Fishing Background"
        />
      </div>
      <Head>
        <title>RAFIN BASS FISHING GUIDES</title>
        <meta name="description" content="COME AND LIVE IT" />
        <meta name="viewport" content="width=device-width, initial-scale=0.6" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="Description" content="Rafin Bass Fishing Guides At El Oviachic is a friends trip kind, based on in-town food, great fishing days and having a great time." />
        <meta name="Keywords" content="bass, fishing, oviachic, rafin, Guides, Bass fishing guides, Oviachic lake, Fishing in mexico, Black bass, Large mouth bass, Presa el oviachic, Lobina, Lobina negra, Pesca deportiva, fishing guides, come and live it, obregon, sonora, mexico" />
      </Head>

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

        <Gallery images={images} />

        <Faq />

        <Booking />

      </main>

      <div id="fb-root"></div>
    </div>
  )
}

import imagesData from '../imagesData.json';
// This function gets called at build time
export async function getStaticProps() {
  imagesData.splice(30);

  // By returning { props: { images } }, the component
  // will receive `images` as a prop at build time
  return {
    props: {
      images: imagesData,
    },
  }
}

export default Home;
