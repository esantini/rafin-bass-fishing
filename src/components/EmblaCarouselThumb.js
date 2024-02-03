import React from "react";
import Image from 'next/image';

export const Thumb = ({ selected, onClick, img }) => (
  <div
    className={`embla__slide embla__slide--thumb ${selected ? "is-selected" : ""
      }`}
  >
    <button
      onClick={onClick}
      className="embla__slide__inner embla__slide__inner--thumb"
      type="button"
    >
      <Image
        className="embla__slide__thumbnail"
        src={img.src}
        alt="Fishing bass at Lake Oviachic with Rafin, Amigo Style!"
        styles={{ objectFit: "contain" }}
        style={{ width: 'auto', height: '100%' }}
        width={img.width}
        height={img.height}
      />
    </button>
  </div>
);
