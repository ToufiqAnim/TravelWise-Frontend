/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

export default function ServiceCard({ data }: { data: any }) {
  return (
    <div className="card w-[300px] bg-base-100 shadow-2xl rounded-md">
      <div>
        <figure className="relative">
          <img
            src={data?.image}
            alt="destination"
            className="w-full h-52 rounded-t-md  "
            //   width={100}
            //   height={100}
          />
        </figure>

        <h2 className="absolute right-0 bottom-[124px] card-title font-medium text-base text-white  p-2 bg-orange-500">
          Featured
        </h2>
      </div>
      <div className="card-body p-3">
        <h2 className="card-title text-sm">{data?.title}</h2>
        <h2 className="card-title text-base">{data?.city}</h2>

        <div className="flex justify-between">
          <p className="text-orange-400 font-semibold">
            ${data?.price} <small className="text-black">/per person</small>
          </p>
          <Link
            href={`/service/${data?._id}`}
            className="py-2 rounded bg-orange-400 px-2 text-white"
          >
            <p> Book Now</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
