'use client';
import React from 'react';
import ServiceCard from '../reuseable/ServiceCard';
import { useGetServicesQuery } from '@/redux/api/serviceApi';
import { Playfair_Display } from 'next/font/google';
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
});
export default function AvailableService() {
  const { data } = useGetServicesQuery({
    page: 1,
    limit: 100,
    status: 'available',
  });
  console.log(data);
  return (
    <div className="section-padding">
      <h1
        className={`text-center text-3xl font-bold mb-6 ${playfair.className}`}
      >
        Available Services
      </h1>
      <div className="card_div">
        {data?.data?.map((service: any) => (
          <ServiceCard key={service._id} data={service} />
        ))}
      </div>
    </div>
  );
}
