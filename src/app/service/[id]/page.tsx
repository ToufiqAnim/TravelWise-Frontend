'use client';
/* eslint-disable @next/next/no-img-element */
import Reviews from '@/components/ui/Reviews';
import { useAddBookingMutation } from '@/redux/api/bookingApi';
import { useGetServiceQuery } from '@/redux/api/serviceApi';
import { getUserInfo } from '@/services/auth.services';
import React, { useEffect, useState } from 'react';
import { Playfair_Display } from 'next/font/google';

import toast from 'react-hot-toast';
import {
  useAddCartMutation,
  useDeleteCartMutation,
  useGetCartsByServiceIdQuery,
} from '@/redux/api/cartApi';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
});
export default function ServiceDetails({ params }: { params: { id: string } }) {
  const [date, setDate] = useState('');
  const [addBooking] = useAddBookingMutation();
  const [addToCart, { isError, isLoading, isSuccess }] = useAddCartMutation();
  const [removeFromCart] = useDeleteCartMutation();
  const id = params.id;
  const { data: cartData } = useGetCartsByServiceIdQuery(id);
  const { data } = useGetServiceQuery(id);

  const serviceData = data?.data;
  const userInfo = getUserInfo();

  const handleBookingService = () => {
    if (!date) {
      toast.error('Please select a date.', { id: 'err' });
      return;
    }
    const data = { service: id, serviceDate: date };
    addBooking(data);
    toast.success('Thank You For Booking');
  };
  const handleAddToCart = () => {
    addToCart({ service: id });
  };

  useEffect(() => {
    if (isSuccess) toast.success('Added to succesfully', { id: 'success' });

    if (isLoading)
      toast.loading('Processing...', { id: 'process', duration: 800 });
    if (isError) toast.error('Failed to add to cart', { id: 'err' });
  }, [isSuccess, isError, isLoading]);

  //@ts-ignore
  const userId = getUserInfo()._id;
  let alreadyAddedToCart = cartData?.data?.find(
    (cart: any) => cart?.user?._id == userId
  );

  const handleRemoveFromCart = () => {
    removeFromCart(alreadyAddedToCart._id);
  };
  return (
    <div className="px-8 py-5 container mx-auto">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <img
            src={serviceData?.image}
            alt="location"
            className=" w-full object-cover rounded-md"
          />
          <div className="mt-8 border p-4 ">
            <h2 className={`text-2xl font-bold mb-3 ${playfair.className}`}>
              {serviceData?.city}
            </h2>
            <p className="mb-5">
              ${serviceData?.price}
              <small>/per person</small>
            </p>
            <h3 className={`text-xl font-semibold ${playfair.className}`}>
              Description
            </h3>
            <p>{serviceData?.description}</p>
          </div>
        </div>
        <div className="mt-6 border p-5">
          <div>
            <div className="flex items-center gap-4">
              <h2 className={`text-2xl font-bold mb-3 ${playfair.className}`}>
                Book Your Tour Now!!!!
              </h2>
            </div>
          </div>
          <div className="text-end flex gap-4">
            <input
              onChange={(e) => setDate(e.target.value)}
              type="date"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <button
              onClick={handleBookingService}
              disabled={!userInfo}
              className="bg-orange-500 text-white px-2 py-2 rounded"
            >
              Book Now
            </button>
            {!!alreadyAddedToCart ? (
              <button
                onClick={handleRemoveFromCart}
                disabled={!userInfo}
                className="bg-red-700 text-white px-2 py-2 rounded"
              >
                Remove From Cart
              </button>
            ) : (
              <button
                onClick={handleAddToCart}
                disabled={!userInfo}
                className="bg-orange-500 text-white px-2 py-2 rounded"
              >
                Add To Cart
              </button>
            )}
            {!userInfo && (
              <p className="text-sm text-error">
                Please log in first to post review
              </p>
            )}
          </div>
          <div className="mt-4">
            <Reviews serviceId={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
