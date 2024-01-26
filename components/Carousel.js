import { useState, useEffect, useCallback } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
import Image from 'next/image';
import { Thumb } from "./EmblaCarouselThumb";

const Carousel = ({ images, startIndex = 0 }) => {
  const [selectedIndex, setSelectedIndex] = useState(startIndex);
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false, startIndex });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    selectedClass: "",
    dragFree: true,
    startIndex,
  });

  const keyEvent = useCallback(({ key }) => {
    if (key === "ArrowRight") embla.scrollNext();
    else if (key === "ArrowLeft") embla.scrollPrev();
  }, [embla]);

  useEffect(() => {
    window.addEventListener("keydown", keyEvent);
    return () => {
      window.removeEventListener("keydown", keyEvent);
    };
  }, [keyEvent]);

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <div id="carousel">
      <div className="embla embla--main">
        <div className="embla__viewport" ref={mainViewportRef}>
          <div className="embla__container">
            {images.map((img, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <Image
                    className="embla__slide__img"
                    src={img.src}
                    alt="Fishing bass at Lake Oviachic with Rafin, Amigo Style!"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="embla embla--thumb">
        <div className="embla__viewport" ref={thumbViewportRef}>
          <div className="embla__container embla__container--thumb">
            {images.map((img, index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={img.src}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
