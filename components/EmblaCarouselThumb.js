import React from "react";
import Image from 'next/image';

export const Thumb = ({ selected, onClick, imgSrc }) => (
  <div
    className={`embla__slide embla__slide--thumb ${selected ? "is-selected" : ""
      }`}
  >
    <button
      onClick={onClick}
      className="embla__slide__inner embla__slide__inner--thumb"
      type="button"
    >
      <Image className="embla__slide__thumbnail" objectFit="cover" layout="fill" src={imgSrc} alt="Fishing bass at Lake Oviachic with Rafin, Amigo Style!" />
    </button>
  </div>
);
