'use client';

import { useState, useCallback, useEffect } from 'react';

import PhotoAlbum from 'react-photo-album';
import Carousel from './Carousel';
import styles from '../styles/Home.module.css';
import jsonImages from '../imagesData.json';

const hcImages = jsonImages.map((image) => ({
  ...image,
  alt: "Fishing bass at Lake Oviachic with Rafin, Amigo Style!"
}));

export default function Gallery() {
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

  const openCarousel = useCallback(({ index }) => {
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
        <PhotoAlbum layout="rows" photos={hcImages} onClick={openCarousel} />
      </div>
      {viewerIsOpen && <Carousel images={hcImages} startIndex={currentImage} />}
    </section>
  );
}
