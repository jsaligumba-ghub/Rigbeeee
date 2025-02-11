import React from 'react'

const socialIcons = [
    { name: 'Twitter', href: 'https://twitter.com', icon: '/ic-x.svg' },
    { name: 'Telegram', href: 'https://telegram.org', icon: '/ic-tele.svg' },
    { name: 'CoinGecko', href: 'https://coinmarketcap.com', icon: '/cm.png' },
    { name: 'Discord', href: 'https://discord.com', icon: '/ix-disc.svg' }
  ];

export const Socials = () => {
  return (
    
    <section className='relative w-full h-auto'>
        <div className='flex flex-col w-full h-[550px]'>
        <div className='flex flex-row w-[1200px] h-[300px] mx-auto mt-22 text-black rounded-2xl bg-amber-100'>
            <div className='flex flex-col w-[520px] h-[250px] mt-3 ml-5 '>
                <h1 className='text-6xl font-bold'>FOLLOW RUGBY'S <br className='mt-7'/> SOCIALS!</h1>
                <p className='text=2xl font-semibold mt-8'>Stay tuned and keep your shit updated by following rugby's socials!</p>
                <div className="flex space-x-4">
                    
                    {socialIcons.map((icon) => (
                        <a key={icon.name} href={icon.href} className="text-white hover:text-gray-300 bg-black p-2 rounded-xl border-[1px] border-l-4 border-b-4 border-white hover:border-l-[1px] hover:border-b-[1px] duration-300 transition-all ease-in-out mt-7 ml-7">
                            <img src={icon.icon} alt={icon.name} className="h-12 w-12 max-lg:size-10" />
                        </a>
                    ))}
                </div>
                </div>
                <img src='/rb1.gif' alt='socrig' className='w-[450px] h-[300px] ml-auto rounded-2xl border-2 border-black'/>
        </div>
              
        </div>
        <div className='w-auto h-16 text-center text-4xl text-white'>
        <h1 className=''>© 2025 Rugby and Mordecoin!</h1>
        </div>
    </section>
  )
}
