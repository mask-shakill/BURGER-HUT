import BestDeals from '@/components/BestFoodMenu/BestDeals';
import React from 'react';

const Pricing = () => {
  return (
    <div className='mx-14 mt-10'>
         <h1 className='text-center mt-5 text-2xl font-bold'>Explore today's premier offers.</h1>
           <div className='grid grid-cols-2 gap-8 mt-7'>
            <BestDeals/>
            <BestDeals/>
            <BestDeals/>
            <BestDeals/>
           </div>
    </div>
  );
};

export default Pricing;