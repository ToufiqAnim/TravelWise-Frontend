'use client';
import {
  useAddReviewMutation,
  useGetReviewsByServiceIdQuery,
  useGetReviewsQuery,
} from '@/redux/api/reviewApi';
import React, { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import toast from 'react-hot-toast';
import ReviewCard from '../reuseable/ReviewCard';
import { getUserInfo } from '@/services/auth.services';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  rating: string;
  review: string;
};

type IReviewsProps = {
  serviceId: string;
};

export default function Reviews({ serviceId }: IReviewsProps) {
  const [addReview, { isError, isLoading, isSuccess }] = useAddReviewMutation();

  useEffect(() => {
    if (isSuccess)
      toast.success('Review Posted succesfully', { id: 'success' });

    if (isLoading)
      toast.loading('Processing...', { id: 'process', duration: 800 });
    if (isError) toast.error('Failed to post review', { id: 'err' });
  }, [isSuccess, isError, isLoading]);

  const { data } = useGetReviewsByServiceIdQuery(serviceId);
  const reviewsData = data?.data;

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    data.rating = Number(data.rating);
    data.service = serviceId;
    console.log(data);
    addReview(data);
  };

  const userInfo = getUserInfo();

  return (
    <div>
      <h2 className="text-2xl font-semibold">User Review:</h2>
      <form
        className="card-body p-0 mt-2 max-w-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating </span>
          </label>
          {/*    <select
            className="select select-bordered w-1/2 text-black"
            placeholder="Select Rating"
            {...register('rating', { required: true })}
          >
            <option value="1">1 star</option>
            <option value="2">2 Star</option>
            <option value="3">3 Star</option>
            <option value="4">4 Star</option>
            <option value="5">5 Star</option>
          </select> */}
          <div className="flex gap-2">
            <label>
              <div className="flex items-center text-orange-500">
                <input type="radio" value="1" {...register('rating')} />
                <p className="ml-1">1</p> <FaStar />
              </div>
            </label>
            <label>
              <div className="flex items-center text-orange-500">
                <input type="radio" value="2" {...register('rating')} />
                <p className="ml-1">2</p> <FaStar />
              </div>
            </label>
            <label>
              <div className="flex items-center text-orange-500">
                <input type="radio" value="3" {...register('rating')} />
                <p className="ml-1">3</p> <FaStar />
              </div>
            </label>
            <label>
              <div className="flex items-center text-orange-500">
                <input type="radio" value="4" {...register('rating')} />
                <p className="ml-1">4</p> <FaStar />
              </div>
            </label>
            <label>
              <div className="flex items-center text-orange-500">
                <input type="radio" value="5" {...register('rating')} />
                <p className="ml-1">5</p> <FaStar />
              </div>
            </label>
          </div>
        </div>
        <div className="form-control">
          <textarea
            className="textarea textarea-bordered resize-none"
            placeholder="Your Review"
            required
            {...register('review', { required: true })}
          ></textarea>
        </div>
        <div className="form-control mt-2">
          <button
            disabled={!userInfo}
            className="bg-orange-500 py-2 rounded text-white btn-wide"
          >
            Post
          </button>
          {!userInfo && (
            <p className="text-sm text-error">
              Please log in first to post review
            </p>
          )}
        </div>
      </form>
      <div className="flex flex-wrap gap-5 mt-6">
        {reviewsData?.length ? (
          reviewsData?.map((review: any) => (
            <ReviewCard key={review._id} review={review} />
          ))
        ) : (
          <p>No Reviews Yet :(</p>
        )}
      </div>
    </div>
  );
}
