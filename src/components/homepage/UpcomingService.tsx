'use client';
import React from 'react';
import ServiceCard from '../reuseable/ServiceCard';
import { useGetServicesQuery } from '@/redux/api/serviceApi';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
});
export default function UpcomingService() {
  const { data } = useGetServicesQuery({
    page: 1,
    limit: 100,
    status: 'upcoming',
  });
  console.log(data);
  return (
    <div className="section-padding">
      <h2
        className={`text-center text-3xl font-bold mb-6 ${playfair.className}`}
      >
        Upcomming Services
      </h2>
      <div className="card_div">
        {data?.data?.map((data: any) => (
          <ServiceCard key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
}
