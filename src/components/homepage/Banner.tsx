'use client';
import { Playfair_Display } from 'next/font/google';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Banner() {
  const [searchTerm, setSearchTerm] = useState('');
  const onFinishHandle = (e: any) => {
    e.preventDefault();
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(https://i.ibb.co/2K7VKW1/beautiful-sunrise-mountain-sea-norway-lofoten-island-scenery-hd-wallpaper-uhdpaper-com-415-0-f.jpg)',
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content  text-neutral-content">
        <div className={playfair.className}>
          <h1 className="mb-5 text-6xl font-semibold ">
            Embark on Your Dream Journey With Our Experties and Guidence
          </h1>
          <div className="flex gap-3">
            <form onSubmit={onFinishHandle} className="form-control">
              <input
                type="text"
                value={searchTerm}
                placeholder="Search Destination"
                className="input bg-transparent border-white w-72 placeholder:text-white"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
            <button className="btn bg-white ">Explore Package</button>
          </div>
        </div>
      </div>
    </div>
  );
}
