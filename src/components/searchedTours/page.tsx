/* import React from 'react';

import { useGetSearchTourServiceQuery } from '@/redux/api/serviceApi';
import { useParams } from 'next/navigation';
import ServiceCard from '../../components/reuseable/ServiceCard';

const SearchResult = () => {
  const { searchTerm } = useParams();

  const { data, isLoading } = useGetSearchTourServiceQuery(searchTerm);

  const tour = data?.data;

  if (tour?.length) {
    return (
      <>
        {isLoading ? (
          <div className="flex justify-center h-[100vh]">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-5 py-8">
            {tour?.map(() => (
              <ServiceCard key={tour._id} {...tour} />
            ))}
          </div>
        )}
      </>
    );
  } else {
    return <h4 className="text-center h-screen text-4xl ">Nothing Found!!!</h4>;
  }
};

export default SearchResult;
 */
