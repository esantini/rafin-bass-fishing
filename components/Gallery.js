import { useState, useCallback, useEffect } from 'react';

import GridGallery from 'react-photo-gallery';
import Carousel from './Carousel';
import styles from '../styles/Home.module.css';

export default function Gallery({ images }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const closeCarousel = useCallback(() => {
    setCurrentImage(0);
    setViewerIsOpen(false);
    revivalBack()
  }, []);

  const keyEvent = useCallback(({ key, target }) => {
    if (key === "Escape" || target.id === 'carousel') closeCarousel();
  }, [closeCarousel]);

  useEffect(() => {
    window.addEventListener("keydown", keyEvent);
    window.addEventListener("mousedown", keyEvent);
    return () => {
      window.removeEventListener("keydown", keyEvent);
      window.removeEventListener("mousedown", keyEvent);
    }
  }, [keyEvent]);

  const openCarousel = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
    neutralizeBack(closeCarousel);
  }, [closeCarousel]);

  const neutralizeBack = (callback) => {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, "", window.location.href);
      callback();
    };
  };

  const revivalBack = () => {
    window.onpopstate = undefined;
    window.history.back();
  };

  return (
    <section className={styles.gallery} id='gallery'>
      <h2>GALLERY</h2>
      <p>Click on image to zoom-in. Enjoy!</p>
      <div className={styles.images}>
        <GridGallery photos={images} onClick={openCarousel} />
      </div>
      {viewerIsOpen && <Carousel images={images} startIndex={currentImage} />}
    </section>
  );
}
