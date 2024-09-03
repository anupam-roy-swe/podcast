import React from 'react';

const ProductsDetails = ({
  params,
}: {
  params: { podcastId: string };
}) => {
  return (
    <p className='text-white-2'>
      ProductsDetails
      {params.podcastId}
    </p>
  );
};

export default ProductsDetails;
