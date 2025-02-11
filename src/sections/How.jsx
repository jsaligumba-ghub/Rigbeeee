import React from 'react'

const How = () => {
  return (
    <section className='relative w-full h-auto'>
        <div className='relative flex flex-col w-full h-[820px]'>
        <h1 className='mx-auto text-8xl font-bold text-white mt-3'>HOW TO BUY</h1>
            
            <div className='flex flex-row w-full h-auto mt-16 justify-center text-center gap-14 text-white'>
                <div className='flex flex-col w-[400px] h-[565px] rounded-4xl bg-orange-300 p-8 gap-6 drop-shadow-xl border-b-4 border-amber-900 '>
                    <img src='/wallet.png' alt='wallet' className='size-24 mx-auto' />
                    <h1 className='text-3xl font-extrabold'>Prepare your wallet!</h1>
                    <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorum voluptate voluptatem minima a? Reprehenderit distinctio, ullam quas doloribus, accusamus officiis a incidunt perspiciatis corrupti in, optio praesentium quibusdam quis?</p>                    
                    </div>
                    <div className='flex flex-col w-[400px] h-[565px] rounded-4xl bg-orange-300 p-8 gap-6 drop-shadow-xl border-b-4 border-amber-900 '>
                    <img src='/dollar.png' alt='wallet' className='size-24 mx-auto' />
                    <h1 className='text-3xl font-extrabold'>Ready your Wallet!</h1>
                    <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorum voluptate voluptatem minima a? Reprehenderit distinctio, ullam quas doloribus, accusamus officiis a incidunt perspiciatis corrupti in, optio praesentium quibusdam quis?</p>                    
                    </div>
                    <div className='flex flex-col w-[400px] h-[565px] rounded-4xl bg-orange-300 p-8 gap-6 drop-shadow-xl border-b-4 border-amber-900 '>
                    <img src='/connect.png' alt='wallet' className='size-24 mx-auto' />
                    <h1 className='text-3xl font-extrabold'>Connect with everyone!</h1>
                    <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorum voluptate voluptatem minima a? Reprehenderit distinctio, ullam quas doloribus, accusamus officiis a incidunt perspiciatis corrupti in, optio praesentium quibusdam quis?</p>                    
                    </div>
            </div>
        </div>
        
    </section>
  );
};

export default How