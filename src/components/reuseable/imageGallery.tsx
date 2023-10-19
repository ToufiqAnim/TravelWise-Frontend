/* eslint-disable @next/next/no-img-element */
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
});
const ImageGallery = () => {
  return (
    <div>
      <h1 className={`text-center text-3xl font-bold ${playfair.className}`}>
        Beautiful Tourism Destination Gallery
      </h1>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/cwLwHpR/tour-img09.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/RzCMmp8/tour-img08.jpg"
                loading="lazy"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/h19L6NM/tour-img06.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/r6gPvgR/tour-img05.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/2K7VKW1/beautiful-sunrise-mountain-sea-norway-lofoten-island-scenery-hd-wallpaper-uhdpaper-com-415-0-f.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/sbM0Rnb/f621e5b5c4835d24d947fb4f95c20934.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
