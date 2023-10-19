'use client';
import React from 'react';
import ReviewCard from '../reuseable/ReviewCard';
import { useGetReviewsQuery } from '@/redux/api/reviewApi';
import { Playfair_Display } from 'next/font/google';
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
});
export default function ClientReview() {
  const { data } = useGetReviewsQuery({ limit: 3 });

  return (
    <div className="section-padding">
      <h1 className={`text-center text-3xl font-bold ${playfair.className}`}>
        Client Reviews
      </h1>
      <div className="card_div">
        {data?.data?.map((review: any) => (
          <ReviewCard key={review?._id} review={review} />
        ))}
      </div>
    </div>
  );
}
