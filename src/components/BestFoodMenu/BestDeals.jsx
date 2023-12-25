import React from 'react';

const BestDeals = () => {
    return (
        <div className=''>
           <div className='flex items-center justify-center col-span-1 shadow-md border p-5 rounded-lg'>
                 <img className='w-1/2 rounded-full
                 ' src="https://img.freepik.com/free-photo/photo-delicious-hamburger-isolated-white-background_125540-3378.jpg?size=626&ext=jpg&ga=GA1.1.1242648836.1702358523&semt=sph" alt="" />
                 <div>
                    <h1 className='font-semibold'>Chicken Naga Burger </h1>
                    <p>burger content</p>
                    <p>price: 23$</p>
                    
                    <button className='font-semibold mt-3 text-orange-500 border p-1 rounded-xl border-orange-400'>Add to cart</button>
                
                 </div>
                
           </div>
        </div>
    );
};

export default BestDeals;