/* eslint-disable @next/next/no-img-element */
import { Playfair_Display } from 'next/font/google';
import React from 'react';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600'],
});
export default function BlogCard() {
  return (
    <>
      <div className="max-w-lg ">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://i.ibb.co/3WDghqQ/deanna-ritchie-227649-unsplash-800x450.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5
                className={`text-gray-900 font-bold text-2xl tracking-tight mb-2 ${playfair.className}`}
              >
                Staying at Coconut Garden beach resort in Indonesia
              </h5>
            </a>
            <p className="font-normal text-gray-700 mb-3">
              Families traveling with kids will find Amboseli national park a
              safari destination matched to no other, with less tourist traffic,
              breathtaking open spaces...
            </p>
            <a
              className="text-white  bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href="#"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-lg ">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://i.ibb.co/k5bgZTm/andre-benz-250740-unsplash-800x450.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5
                className={`text-gray-900 font-bold text-2xl tracking-tight mb-2 ${playfair.className}`}
              >
                The comprehensive guide to Tokyos Golden Gai
              </h5>
            </a>
            <p className="font-normal text-gray-700 mb-3">
              In pellentesque massa placerat duis ultricies. A arcu cursus vitae
              congue mauris rhoncus aenean vel elit. Diam vel quam elementum
              pulvinar etiam non quam lacus....
            </p>
            <a
              className="text-white  bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href="#"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-lg ">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://i.ibb.co/BB98wg3/brevite-434280-unsplash-585x330.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5
                className={`text-gray-900 font-bold text-2xl tracking-tight mb-2 ${playfair.className}`}
              >
                What to pack when traveling to Barcelona
              </h5>
            </a>
            <p className="font-normal text-gray-700 mb-3">
              View On AirbnbVintage Concept Flat in Chic Neighbourhood If you’re
              planning a stag do in Barcelona, you’d almost have to include some
              sporting activities.
            </p>
            <a
              className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href="#"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
