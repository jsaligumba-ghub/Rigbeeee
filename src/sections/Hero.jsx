import React from 'react'


const socialIcons = [
  { name: 'Twitter', href: 'https://twitter.com', icon: '/ic-x.svg' },
  { name: 'Telegram', href: 'https://telegram.org', icon: '/ic-tele.svg' },
  { name: 'CoinGecko', href: 'https://coingecko.com', icon: '/ic-gecko.svg' },
  { name: 'Discord', href: 'https://discord.com', icon: '/ix-disc.svg' }
];


const Hero = () => {
  return (
    <section className="relative w-full h-[1050px] max-lg:w-full max-lg:h-full">
            {/* <img src='/ludi.webp' alt='bgpage' className='absolute inset-0 max-lg:w-full max-lg:h-full w-full h-full object-cover z-[-1]' /> */}
        <div className='flex flex-col w-full lg:w-full h-auto mx-auto max-lg:w-auto'>
          <img src='rigby.gif' alt='rg' className='size-[550px] animate-bounce mx-auto cursor-pointer transition-all duration-1500' />
          
        <div className='flex flex-col w-auto h-auto m-auto max-lg:w-auto text-center font-secondary'>
            <h1 className='m-auto w-auto h-auto text-[198px] max-lg:w-[455px] max-lg:text-7xl font-extrabold text-white p-3'>
                RUGBY
            </h1>
            <p className='h-auto text-4xl text-white mx-auto w-[1155px] italic max-lg:w-[455px] max-lg:text-xl max-lg:mt-4 p-3 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div className="flex space-x-4 w-[650px] m-auto">
                    
                    {socialIcons.map((icon) => (
                        <a key={icon.name} href={icon.href} className="text-white hover:text-gray-300 bg-orange-950 orange-600 p-2 rounded-xl border-[1px] border-l-4 border-b-4 border-white hover:border-l-[1px] hover:border-b-[1px] duration-300 transition-all ease-in-out m-auto">
                            <img src={icon.icon} alt={icon.name} className="h-12 w-12 max-lg:size-10" />
                        </a>

                        
                    ))}
                </div>
        </div>

        
        </div>


    </section>
  )
}

export default Hero